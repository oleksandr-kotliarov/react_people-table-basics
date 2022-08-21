(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(2)),s=c(0),j=c(1),i=Object(s.memo)((function(){return Object(j.jsx)("h1",{className:"title",children:"Home Page"})})),l=c(6),o=c.n(l),b=Object(s.memo)((function(){return Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(j.jsx)(a.c,{className:function(e){var t=e.isActive;return o()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})})),h=c(8),d=c(4),O=(c(22),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var u=Object(s.memo)((function(e){var t=e.person,c=e.onSelect;return Object(j.jsx)(a.b,{className:o()({"has-text-danger":"f"===t.sex}),to:"/people/".concat(t.slug),onClick:function(){return c(t)},children:t.name})})),x=Object(s.memo)((function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)(!1),r=Object(d.a)(a,2),i=r[0],l=r[1],b=Object(s.useState)(!1),x=Object(d.a)(b,2),p=x[0],f=x[1],v=Object(s.useState)(null),g=Object(d.a)(v,2),N=g[0],y=g[1];return Object(s.useEffect)((function(){l(!0),f(!1),m().then((function(e){var t=e.map((function(t){return Object(h.a)(Object(h.a)({},t),{},{mother:e.find((function(e){return e.name===t.motherName})),father:e.find((function(e){return e.name===t.fatherName}))})}));n(t)})).catch((function(){return f(!0)})).finally((function(){return l(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[i&&Object(j.jsx)(O,{}),p&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!i&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),c.length>0&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:c.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"person",className:o()({"has-background-warning":(null===N||void 0===N?void 0:N.name)===e.name}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(u,{person:e,onSelect:y})}),Object(j.jsx)("td",{children:e.sex}),Object(j.jsx)("td",{children:e.born}),Object(j.jsx)("td",{children:e.died}),Object(j.jsx)("td",{children:e.mother?Object(j.jsx)(u,{person:e.mother,onSelect:y}):e.motherName||"-"}),Object(j.jsx)("td",{children:e.father?Object(j.jsx)(u,{person:e.father,onSelect:y}):e.fatherName||"-"})]},e.slug)}))})]})]})})]})})),p=function(){return Object(j.jsxs)("div",{"data-cy":"app",children:[Object(j.jsx)(b,{}),Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(r.b,{path:"/people",element:Object(j.jsx)(x,{}),children:Object(j.jsx)(r.b,{path:"/people/:slug",element:Object(j.jsx)(x,{})})}),Object(j.jsx)(r.b,{path:"/home",element:Object(j.jsx)(r.a,{to:"/",replace:!0})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(p,{})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8963c940.chunk.js.map