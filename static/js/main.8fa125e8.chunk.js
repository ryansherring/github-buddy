(this["webpackJsonpgithub-buddy"]=this["webpackJsonpgithub-buddy"]||[]).push([[0],{11:function(e,a,t){e.exports=t(19)},16:function(e,a,t){},17:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(8),o=t.n(r),c=(t(16),t(6)),u=t(21),m=t(22),i=t(23),s=(t(17),t(18),t(9)),d=t.n(s);var p=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1],o=Object(n.useState)(""),s=Object(c.a)(o,2),p=s[0],h=s[1];return l.a.createElement(u.a,{fluid:!0,className:"App",style:{height:"100vh",backgroundImage:"url(".concat(d.a,")")}},l.a.createElement("header",{className:"App-header"},"Github-Buddy"),l.a.createElement(u.a,{style:{marginTop:"20vh"}},l.a.createElement("div",{className:"search-box"},l.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Press Enter to Search...",onChange:function(e){return h(e.target.value)},value:p,onKeyPress:function(e){"Enter"===e.key&&fetch("https://api.github.com/users/".concat(p)).then((function(e){return e.json()})).then((function(e){r(e),console.log(e),h("")}))}})),t?l.a.createElement(u.a,{style:{borderWidth:".2rem .2rem 0",borderRadius:"8px 8px 0 0",borderColor:"grey",marginTop:"5vh"}},l.a.createElement(m.a,{className:"mx-auto"},l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Name:")),null!=t.name?l.a.createElement("p",null,t.name):l.a.createElement("p",null,"add a name!")),l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Public Repos:")),null!=t.public_repos?l.a.createElement("p",null,t.public_repos):l.a.createElement("p",null,"Make some Repos!")),l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Location:")),null!=t.location?l.a.createElement("p",null,t.location):l.a.createElement("p",null,"Add a location to your profile!")),l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Company:")),null!=t.company?l.a.createElement("p",null,t.company):l.a.createElement("p",null,"add a company to your profile!")),l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Available for hire?")),null!=t.hireable?l.a.createElement("p",null,t.hireable):l.a.createElement("p",null,"make it known on your profile!")),l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"email:")),null!=t.email?l.a.createElement("p",null,t.email):l.a.createElement("p",null,"add an email to your profile!")),l.a.createElement(i.a,{className:"mx-auto"},l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Laguages Used:"))," Feature  coming soon"),l.a.createElement(i.a,{className:"mx-auto"},l.a.createElement(i.a.Header,null,l.a.createElement("h4",null,"Suggestion for Next Project:")),"Feature  coming soon"))):l.a.createElement(i.a,{className:"mx-auto",style:{width:"40%",marginTop:"10vh"}},"Github-Buddy checks to make sure you have your profile filled out and with the right information! Currently working on adding a pie chart of languages used and a suggestion for your next project.",l.a.createElement("br",null),"Search for your username and press enter to get started!")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/background.3960c1e7.jpg"}},[[11,1,2]]]);
//# sourceMappingURL=main.8fa125e8.chunk.js.map