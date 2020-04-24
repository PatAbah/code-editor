(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{534:function(e,t,a){},550:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(56),o=a.n(i),s=a(3),c=a(71),d='{{#accounts}}\n<div class="list-item" action="ftp-account" name="{{name}}" security="{{security}}" mode="{{mode}}" path="{{path}}"\n  username="{{username}}" password="{{password}}" hostname="{{hostname}}" port="{{port}}" id="{{id}}">\n  <span class="icon person"></span>\n  <div class="container">\n    <div class="text">\n      <span>{{name}}</span>\n    </div>\n  </div>\n  <span class="icon edit" action="edit"></span>\n  <span class="icon clearclose" action="remove"></span>\n</div>\n{{/accounts}}\n<div class="list-item" action="add-account">\n  <span class="icon add"></span>\n  <div class="container">\n    <div class="text">\n      <span>Add FTP account</span>\n    </div>\n  </div>\n</div>',p=(a(534),a(201)),l=a(5),u=a(476),m=a(112);t.default=function(){var e=JSON.parse(localStorage.ftpaccounts||"[]"),t=r()("span",{className:"icon search",attr:{action:"search"}}),a=Object(c.a)("FTP Accounts"),n=s.a.credentials,i=r.a.parse(o.a.render('<div class="main list" id="ftp-accounts">{{{list}}}</div>',{list:o.a.render(d,{accounts:y()})}));function v(e,t,a,n,r,i,o,c){var d=Object(u.a)(e,t,a,n,r,i);l.a.loaderShow("",strings.loading+"..."),d.homeDirectory().then((function(e){var t=d.originObject,a=t.origin+e+t.query;Object(m.a)(a,{saveState:!1,reloadOnResume:!1,name:c,id:o}),window.freeze=!1,actionStack.pop(),window.freeze=!0})).catch((function(e){s.a.error(e),console.error(e)})).finally((function(){l.a.loaderHide()}))}function f(t,a,r,c,p,u,m,f){(function(e,t,a,n,r,i,o){return r=r||21,i=i||"ftp",o=o||"passive",l.a.multiPrompt("FTP login",[{id:"name",placeholder:"Name (optional)",type:"text",value:n||""},{id:"username",placeholder:"Username (optional)",type:"text",value:e},{id:"password",placeholder:"Password (optional)",type:"password",value:t},{id:"hostname",placeholder:"Hostname",type:"text",required:!0,value:a},["Security type: ",{id:"ftp",placeholder:"FTP",name:"type",type:"radio",value:"ftp"===i},{id:"ftps",placeholder:"FTPS",name:"type",type:"radio",value:"ftps"===i}],["Connection mode: ",{id:"active",placeholder:"Active",name:"mode",type:"radio",value:"active"===o},{id:"passive",placeholder:"Passive",name:"mode",type:"radio",value:"passive"===o}],{id:"port",placeholder:"Port (optional)",type:"number",value:r}])})(t,a,r,c,p,m,f).then((function(t){var a=t.username,r=t.password,c=t.hostname,p=t.port,l=(t.ftp,t.ftps),m=t.active,f=(t.passive,t.name),w=l?"ftps":"ftp",g=m?"active":"passive";if(u){var b=!0,A=!1,S=void 0;try{for(var O,P=addedFolder[Symbol.iterator]();!(b=(O=P.next()).done);b=!0){var k=O.value;k.id&&k.id===u&&(k.remove(),v(a,r,c,p,w,g,u,f))}}catch(e){A=!0,S=e}finally{try{b||null==P.return||P.return()}finally{if(A)throw S}}h(u)}Array.isArray(e)&&e.push({username:n.encrypt(a),password:n.encrypt(r),hostname:n.encrypt(c),port:n.encrypt(p),id:u||s.a.uuid(),security:w,mode:g,name:f}),localStorage.setItem("ftpaccounts",JSON.stringify(e)),i.innerHTML=o.a.render(d,{accounts:y()})}))}function y(){var t=[];return Array.isArray(e)&&e.map((function(e){var a=e.name,r=e.username,i=e.password,o=e.hostname,s=e.port,c=e.id,d=e.security,p=e.mode;return r=n.decrypt(r),i=n.decrypt(i),o=n.decrypt(o),s=n.decrypt(s),t.push({username:r,password:i,hostname:o,port:s,name:a||"".concat(r,"@").concat(o),id:c,security:d,mode:p}),e})),t}function h(t){Array.isArray(e)&&(e=e.filter((function(e){return e.id!==t}))),i.innerHTML=o.a.render(d,{accounts:y()}),localStorage.setItem("ftpaccounts",JSON.stringify(e))}i.addEventListener("click",(function(e){var t=e.target;if(!(t instanceof HTMLElement))return;var a=t.getAttribute("action");if(!a)return;if("add-account"===a)f();else if("remove"===a){var n=t.parentElement,r=n.id,i=n.getAttribute("name");l.a.confirm(strings.warning,strings["delete {name}"].replace("{name}",i)).then((function(e){n&&r&&h(r)}))}else if("ftp-account"===a||"edit"===a){"edit"===a&&(t=t.parentElement);var o=t.getAttribute("username"),s=t.getAttribute("password"),c=t.getAttribute("hostname"),d=t.getAttribute("security"),p=t.getAttribute("port"),u=t.getAttribute("name"),m=t.getAttribute("mode"),y=t.id;if("edit"===a)f(o,s,c,u,p,y,d,m);else{var w=!0,g=!1,b=void 0;try{for(var A,S=addedFolder[Symbol.iterator]();!(w=(A=S.next()).done);w=!0){var O=A.value;if(O.id&&O.id===y)return actionStack.pop()}}catch(e){g=!0,b=e}finally{try{w||null==S.return||S.return()}finally{if(g)throw b}}v(o=o||null,s=s||null,c,p,d,m,y,u)}}})),a.querySelector("header").append(t),t.onclick=function(){Object(p.a)(a.querySelector(".list"))},a.append(i),app.appendChild(a),actionStack.push({id:"repos",action:a.hide}),a.onhide=function(){actionStack.remove("repos")}}}}]);