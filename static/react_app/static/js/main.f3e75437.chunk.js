(window.webpackJsonpreact_app=window.webpackJsonpreact_app||[]).push([[0],{14:function(e,t,a){e.exports=a(23)},23:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(7),o=a.n(c),l=(a(19),a(8)),i=a(9),s=a(12),u=a(10),m=a(13),d=a(25),h=a(26),p=a(27),w=a(28),v=a(29),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/cards").then((function(e){return e.json()})).then((function(t){return e.setState({data:t})}))}},{key:"render",value:function(){return console.log(this.state.data),r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},this.state.data&&this.state.data.map((function(e,t){return r.a.createElement("div",{className:"col-4",key:t},r.a.createElement(d.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,e.title),r.a.createElement(w.a,null,e.subtitle)),r.a.createElement("img",{width:"100%",src:e.img,alt:"Card image cap"}),r.a.createElement(h.a,null,r.a.createElement(v.a,null,e.description))))}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.f3e75437.chunk.js.map