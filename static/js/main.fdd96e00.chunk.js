(this["webpackJsonpemployee-tracker"]=this["webpackJsonpemployee-tracker"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(22),n(23),n(12)),l=n(13),i=n(16),m=n(15),u=n(14),d=n.n(u),f=function(e){Object(i.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={friends:[],order:"ascending"},e.handleFirstNameSort=function(){"ascending"===e.state.order?e.setState({order:"descending"}):e.setState({order:"ascending"})},e.sortByFirstName=function(t,n){return"ascending"===e.state.order?t.name.first<n.name.first?-1:n.name.first<t.name.first?1:0:t.name.first<n.name.first?1:n.name.first<t.name.first?-1:0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://randomuser.me/api/?results=10&nat=us").then((function(t){console.log(t.data),e.setState({friends:t.data.results})}))}},{key:"render",value:function(){var e=this.state.friends.sort(this.sortByFirstName);return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search"}),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{onClick:this.handleFirstNameSort,scope:"col"},"First"),r.a.createElement("th",{scope:"col"},"Last"),r.a.createElement("th",{scope:"col"},"Handle"))),r.a.createElement("tbody",null,e.map((function(e){return r.a.createElement("tr",{key:e.name.first+e.name.last},r.a.createElement("th",{scope:"row"},"1"),r.a.createElement("td",null,e.name.first),r.a.createElement("td",null,e.name.last))})))))}}]),n}(r.a.Component);var h=function(){return r.a.createElement(f,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.fdd96e00.chunk.js.map