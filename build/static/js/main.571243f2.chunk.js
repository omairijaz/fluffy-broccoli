(this.webpackJsonpytsubmanager=this.webpackJsonpytsubmanager||[]).push([[0],{18:function(e,t,n){e.exports=n(43)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(17),r=n.n(s),u=(n(23),n(2)),c=n(3),i=n(5),l=n(4),m=n(6),p=(n(24),n(25),function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"subEntry"},o.a.createElement("p",null,this.props.name),o.a.createElement("button",{className:"unsub",onClick:function(){return e.props.unsubscribe("test")}},"Unsubscribe"))}}]),t}(o.a.Component)),h=n(7),b=n.n(h),g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(o)))).state={username:"",subs:[]},n.getOauthToken=function(){var e=document.createElement("form");e.setAttribute("target","_blank"),e.setAttribute("method","GET"),e.setAttribute("action","https://accounts.google.com/o/oauth2/v2/auth");for(var t=["client_id","redirect_uri","response_type","scope"],n=["1065759368920-rqertu1ir6c2jpmema2uqto2pg4m4aca.apps.googleusercontent.com","http://localhost:3000","token","https://www.googleapis.com/auth/youtube"],a=0;a<4;a++){var o=document.createElement("input");o.setAttribute("type","hidden"),o.setAttribute("name",t[a]),o.setAttribute("value",n[a]),e.appendChild(o)}document.body.appendChild(e),e.submit()},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){for(var e,t={},n=/([^&=]+)=([^&]*)/g;e=n.exec(new URL(window.location.href).hash.substring(1));)t[decodeURIComponent(e[1])]=decodeURIComponent(e[2]);Object.keys(t).length>0&&localStorage.setItem("oauth2-test-params",JSON.stringify(t));var a=localStorage.getItem("oauth2-test-params");if(null!=a){var o=JSON.parse(a);o&&o.access_token&&this.getSubs(o.access_token)}}},{key:"getUsername",value:function(){return"Username"}},{key:"getSubs",value:function(e){var t=this;b.a.get("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&access_token="+e+"&maxResults=50").then((function(e){console.log(e.data.items),t.setState({subs:e.data.items})}),(function(e){console.log(e)}))}},{key:"unSub",value:function(e,t){b.a.delete("https://www.googleapis.com/youtube/v3/subscriptions?id=".concat(t,"&key=[").concat(e,"]")).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this,t=localStorage.getItem("oauth2-test-params");if(t){var n=JSON.parse(t),a=this.state.subs.map((function(t,a){return o.a.createElement("li",{key:a},o.a.createElement(p,{key:a,name:t.snippet.title,unsubscribe:function(t){e.unSub(n.access_token,t)}}))}));return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"YouTube Subscription Manager"),o.a.createElement("h3",null,this.state.username),a)}return o.a.createElement("div",{className:"App"},o.a.createElement("h2",null,"YouTube Subscription Manager"),o.a.createElement("h3",null,this.state.username),o.a.createElement("button",{onClick:this.getOauthToken},"Authorize"))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.571243f2.chunk.js.map