(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e){e.exports=[{id:1,title:"Portfolio Website ",subtitle:"Personal portfolio",tech:[{img:"./images/react.PNG"},{img:"./images/HTML.PNG"},{img:"./images/CSS.PNG"},{img:"./images/JS.PNG"}],description:"It is a personal portfolio website made using React framework. Single pagewebsite that contains all the information about my projects, certifications and skills. ",logo:"./images/portfolio.JPG"},{id:2,title:"NoProxy",subtitle:"LAN based Attendance management system",tech:[{img:"./images/Mongo.PNG"},{img:"./images/express.PNG"},{img:"./images/react.PNG"},{img:"./images/nodejs.PNG"}],description:"Different from traditional attendaance management systems that uses password to mark attendance, this app marks atendance for only those who are connected to the Teacher's short range Wifi-Hotspot.",logo:"./images/NoProxy.JPG"},{id:3,title:"Chat Application ",subtitle:"Chat Application Using React, Express and Socket.IO ",tech:[{img:"./images/react.PNG"},{img:"./images/express.PNG"},{img:"./images/Socket.PNG"}],description:"Chat application desgned using react framework and SocketIO that enables user to send and receive messages privately as well as in groups.",logo:"./images/chat-app.JPG"}]},function(e,t,a){e.exports=a.p+"static/media/google.f30af8fb.png"},function(e,t,a){e.exports=a.p+"static/media/Infosys.b03e71e9.png"},function(e,t,a){e.exports=a.p+"static/media/isro.1482c8d2.png"},function(e,t,a){e.exports=a.p+"static/media/coursera.90988c91.png"},,,,function(e,t,a){e.exports=a(44)},,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),l=a.n(n),r=a(15),c=a.n(r),o=(a(34),a(11)),i=a(9),s=a(3),m=a(23),u=a(22),h=(a(36),a(13));a(37);function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},l=n.iterator||"@@iterator",r=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(S){o=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var l=t&&t.prototype instanceof u?t:u,r=Object.create(l.prototype),c=new x(n||[]);return r._invoke=function(e,t,a){var n="suspendedStart";return function(l,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===l)throw r;return G()}for(a.method=l,a.arg=r;;){var c=a.delegate;if(c){var o=y(c,a);if(o){if(o===m)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),r}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(S){return{type:"throw",arg:S}}}e.wrap=i;var m={};function u(){}function h(){}function g(){}var f={};o(f,l,function(){return this});var d=Object.getPrototypeOf,E=d&&d(d(P([])));E&&E!==t&&a.call(E,l)&&(f=E);var v=g.prototype=u.prototype=Object.create(f);function N(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;this._invoke=function(l,r){function c(){return new t(function(n,c){!function n(l,r,c,o){var i=s(e[l],e,r);if("throw"!==i.type){var m=i.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,c,o)},function(e){n("throw",e,c,o)}):t.resolve(u).then(function(e){m.value=e,c(m)},function(e){return n("throw",e,c,o)})}o(i.arg)}(l,r,n,c)})}return n=n?n.then(c,c):c()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var l=n.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function P(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:G}}function G(){return{value:void 0,done:!0}}return h.prototype=g,o(v,"constructor",g),o(g,"constructor",h),h.displayName=o(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,o(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},N(w.prototype),o(w.prototype,r,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,l,r){void 0===r&&(r=Promise);var c=new w(i(t,a,n,l),r);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},N(v),o(v,c,"Generator"),o(v,l,function(){return this}),o(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=P,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var l=this.tryEntries.length-1;l>=0;--l){var r=this.tryEntries[l],c=r.completion;if("root"===r.tryLoc)return n("end");if(r.tryLoc<=this.prev){var o=a.call(r,"catchLoc"),i=a.call(r,"finallyLoc");if(o&&i){if(this.prev<r.catchLoc)return n(r.catchLoc,!0);if(this.prev<r.finallyLoc)return n(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return n(r.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return n(r.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n];if(l.tryLoc<=this.prev&&a.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var r=l;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var c=r?r.completion:{};return c.type=e,c.arg=t,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var l=n.arg;k(a)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:P(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function g(){var e=Object(n.useCallback)(function(){var e=Object(s.a)(p().mark(function e(t){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(u.a)(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),t=Object(n.useCallback)(function(){var e=Object(s.a)(p().mark(function e(t){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]);return l.a.createElement("section",{className:"Home"},l.a.createElement("div",{className:"navbar"},l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",null,l.a.createElement(h.a,{className:"element",to:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement(h.a,{className:"element",to:"#projects"},"Projects")),l.a.createElement("li",null,l.a.createElement(h.a,{className:"element",to:"#About"},"About")),l.a.createElement("li",null,l.a.createElement(h.a,{className:"element",to:"#Contact"},"Contact")))),l.a.createElement("div",{className:"profile-container",id:"home"},l.a.createElement("div",{className:"seperator-skew"},l.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("polygon",{className:"fill-white",points:"2560 0 2560 150 0 150"}))),l.a.createElement("div",{className:"profile-parent"},l.a.createElement(m.a,{id:"tsparticles",init:e,loaded:t,options:{background:{color:{value:"transparent"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"pull"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{pull:{quantity:4},repulse:{distance:50,duration:1}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{directions:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:500},value:50},opacity:{value:.1},shape:{type:"polygon"},size:{value:{min:1,max:5}}},detectRetina:!0}}),l.a.createElement("div",{className:"profile-details"},l.a.createElement("div",{className:"Colz"},l.a.createElement("div",null,l.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-facebook-square"})),l.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-google-plus-square"})),l.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("div",{className:"profile-details-name"},l.a.createElement("span",{className:"primary-text"},l.a.createElement("h3",null," ","Hello, I'm ",l.a.createElement("span",{className:"highlighted-text"},"Anuj"))),l.a.createElement("span",{className:"highlighted-text"},l.a.createElement("h1",null,"Full Stack ",l.a.createElement("div",{className:"dev"}," Dev"),"eloper")),l.a.createElement("span",{className:"profile-role-tagline"},"Knack of building applications with front and back end operations.")),l.a.createElement("div",{className:"profile-options"},l.a.createElement("button",{className:"btn primary-btn"},"Hire me"),l.a.createElement("a",{href:"AnujGuha_Resume.pdf",download:"AnujGuha_Resume.pdf"},l.a.createElement("button",{className:"btn highlighted-btn"},"Get Resume"))))),l.a.createElement("div",{className:"profile-picture"},l.a.createElement("div",{className:"profile-picture-background"})))),l.a.createElement("footer",{className:"footer"},l.a.createElement("h3",null,"THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO.")),l.a.createElement("footer",{className:"footer"}," ",l.a.createElement("h6",null," -Steve Jobs")))}a(38);var f=a(17);function d(e){return l.a.createElement("div",null,f.map(function(e,t){return l.a.createElement("div",{className:"project-box"},l.a.createElement("div",null,l.a.createElement("img",{src:e.logo,alt:"project-logo",className:"project-logo"})),l.a.createElement("div",{className:"right-box"},l.a.createElement("h1",{className:"head-123"},e.title),l.a.createElement("h6",{className:"head-123"},e.subtitle),l.a.createElement("div",{className:"tech-logos"},l.a.createElement("li",null," ",l.a.createElement("h3",null,"MADE WITH:")),l.a.createElement("li",null,e.tech.map(function(e,t){return l.a.createElement("img",{src:e.img,alt:"tech-logo",className:"tech-logo"})}))),l.a.createElement("p",null,e.description)))}))}function E(){return l.a.createElement("section",{className:"Projects-container",id:"projects"},l.a.createElement("div",{className:"seperator-skew2"},l.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("polygon",{className:"fill-white",points:"0 0 2560 150 0 150"}))),l.a.createElement("div",{className:"Heading"},l.a.createElement("h1",{className:"headone"},"My"),l.a.createElement("h1",{className:"head2"},"Projects")),l.a.createElement("div",{className:"pbox"},l.a.createElement(d,null)))}a(39);var v=a(18),N=a.n(v),w=a(19),y=a.n(w),b=a(20),k=a.n(b),x=a(21),P=a.n(x);function G(){return l.a.createElement("section",{className:"courses-container",id:"courses"},l.a.createElement("div",{className:"Heading"},l.a.createElement("h1",{className:"head1"},"Training &"),l.a.createElement("h1",{className:"head2"},"Certifications")),l.a.createElement("div",{className:"course-content"},l.a.createElement("ul",{className:"course-list"},l.a.createElement("li",{className:"cert-block"},l.a.createElement("img",{src:y.a,className:"cert-logo",alt:"logo"}),l.a.createElement("div",{className:"cert-text"},l.a.createElement("h3",null,"Full-stack Web Development"),l.a.createElement("p",null,l.a.createElement("b",null,"Skills Gained:"),"JavaScript and jQuery, Backend with Node.js, App-Development with Angular,Database Design with MySQL and NoSQL, Sass, Chrome developer tools."),l.a.createElement("button",{className:"view-cert"},"View Certificate"))),l.a.createElement("li",{className:"cert-block"},l.a.createElement("img",{src:N.a,className:"cert-logo",alt:"logo"}),l.a.createElement("div",{className:"cert-text"},l.a.createElement("h3",null,"IT Automation with Python (SPECIALIZATION) "),l.a.createElement("p",null,"Skills Gained: Python, Git and GitHub, Troubleshooting and debugging techniques, Configuration Management and the Cloud."),l.a.createElement("button",{className:"view-cert"},"View Certificate"))),l.a.createElement("li",{className:"cert-block"},l.a.createElement("img",{src:k.a,className:"cert-logo",alt:"logo"}),l.a.createElement("div",{className:"cert-text"},l.a.createElement("h3",null,"Satellite Remote sensing of Atmosphere"),l.a.createElement("p",null,"Topics Covered: Fundamentals of Remote sensing, Processes and types of Remote sensing, Imaging spectrometry, Interaction of EMR with Atmosphere, etc"),l.a.createElement("button",{className:"view-cert"},"View Certificate"))),l.a.createElement("li",{className:"cert-block"},l.a.createElement("img",{src:P.a,className:"cert-logo",alt:"logo"}),l.a.createElement("div",{className:"cert-text"},l.a.createElement("h3",null,"Foundations of UX Design "),l.a.createElement("p",null,"Topics Covered: Foundation concepts of UX design - User centered, Equity focussed, design process accessibility, design sprints, wireframes, etc"),l.a.createElement("button",{className:"view-cert"},"View Certificate"))))))}a(40);function S(){return l.a.createElement("section",{className:"About-container",id:"About"},l.a.createElement("div",{className:"seperator-skew4"},l.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("polygon",{className:"fill-white",points:"2560 0 2560 150 0 150"}))),l.a.createElement("div",{className:"aboutHeading"},l.a.createElement("h1",{className:"abouthead1"},"A"),l.a.createElement("h1",{className:"abouthead2"},"bout")),l.a.createElement("div",{className:"aboutBlock"},l.a.createElement("div",{className:"introbox"},l.a.createElement("h1",null,"Anuj Guha"),l.a.createElement("h3",null,"full stack Web Developer"),l.a.createElement("p",null,"I am a Full Stack Developer and a Problem-Solving enthusiast pursuing Computer Science engineering from MITS, Gwalior. "),l.a.createElement("p",null,"I have a passion for software development with a diverse skillset ranging from the MEARN stack to a stronghold on data structures and algorithms. "),l.a.createElement("p",null,"My tech stack includes ",l.a.createElement("li",null,"languages like C++, Python, and Javascript ")," ",l.a.createElement("li",null,"frameworks like React and Angular"),l.a.createElement("li",null," DBMS like MongoDB and MySQL. ")," ",l.a.createElement("li",null," Tools like Figma, Postman, Git, etc.")),l.a.createElement("p",null,"Presently, I have started competitive coding and I have earned 2",l.a.createElement("span",{role:"img","aria-label":"Star"},"\u2b50"),"'s on Codechef.I am also a student ambassador at Internshala and a member of the Google developer students club - Gwalior. I have been actively participating in online hackathons as well.")),l.a.createElement("img",{src:"./images/anuj_orangebg.PNG",alt:"myImage2",className:"myImage"})))}var j=a(24),C=(a(41),function(){var e=Object(n.useRef)();return l.a.createElement("section",{className:"ContactUs",id:"Contact"},l.a.createElement("div",{className:"HeadingContact"},l.a.createElement("h1",{className:"heading1"},"Contact "),l.a.createElement("h1",{className:"heading2"},"Me ")),l.a.createElement("div",{className:"formDiv"},l.a.createElement("form",{ref:e,onSubmit:function(t){t.preventDefault(),j.a.sendForm("service_lyq6his","template_1y1k15c",e.current,"tkMhX9KynhJSwV4yg").then(function(e){console.log(e.text)},function(e){console.log(e.text)})}},l.a.createElement("li",null,l.a.createElement("label",{className:"labelClass"},"Name")),l.a.createElement("li",null,l.a.createElement("input",{className:"inputclass",type:"text",name:"user_name"})),l.a.createElement("li",null,l.a.createElement("label",{className:"labelClass"},"Email")),l.a.createElement("li",null,l.a.createElement("input",{className:"inputclass",type:"email",name:"user_email"})),l.a.createElement("li",null,l.a.createElement("label",{className:"labelClass"},"Message")),l.a.createElement("li",null,l.a.createElement("textarea",{className:"inputclass2",name:"message"})),l.a.createElement("li",null,l.a.createElement("input",{className:"submitButton",type:"submit",value:"Send"})),l.a.createElement("li",{className:"or"},l.a.createElement("h5",null,"-OR-")),l.a.createElement("li",{className:"icon-block"},l.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-github-square"})),l.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-google-plus-square"})),l.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-instagram"})),l.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},l.a.createElement("i",{className:"fa fa-twitter"}))))))});a(42);function L(){return l.a.createElement("section",{className:"skill-container"},l.a.createElement("div",{className:"Headingskill"},l.a.createElement("h1",{className:"head1skill"},"Technical-"),l.a.createElement("h1",{className:"head2skill"},"Skills")),l.a.createElement("div",{className:"block"},l.a.createElement("ul",{className:"icons-skills"},l.a.createElement("li",null,l.a.createElement("li",null,l.a.createElement("img",{src:"../images/Mongo.PNG",alt:"mongoDB"}),l.a.createElement("h4",null,"MongDB")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/express.PNG",alt:"Express-logo"}),l.a.createElement("h4",null,"Express")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/angular.PNG",alt:"angular-logo"}),l.a.createElement("h4",null,"Angular")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/react.PNG",alt:"react-logo"}),l.a.createElement("h4",null,"React")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/nodejs.PNG",alt:"nodejs-logo"}),l.a.createElement("h4",null,"Nodejs")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/mysql.PNG",alt:"mysql-logo"}),l.a.createElement("h4",null,"MySQL"))),l.a.createElement("li",null,l.a.createElement("li",null,l.a.createElement("img",{src:"./images/cpp.PNG",alt:"cpp-logo"}),l.a.createElement("h4",null,"C++")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/Python-PNG.PNG",alt:"Python-logo"}),l.a.createElement("h4",null,"Python")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/bootstrap.PNG",alt:"bootstrap-logo"}),l.a.createElement("h4",null,"Bootstrap")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/HTML.PNG",alt:"html-logo"}),l.a.createElement("h4",null,"HTML")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/CSS.PNG",alt:"CSS-logo"}),l.a.createElement("h4",null,"CSS")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/JS.PNG",alt:"JS-logo"}),l.a.createElement("h4",null,"JavaScript")),l.a.createElement("li",null,l.a.createElement("img",{src:"./images/git.PNG",alt:"git-logo"}),l.a.createElement("h4",null,"Git"))))),l.a.createElement("div",{className:"seperator-skew9"},l.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("polygon",{className:"fill-white",points:"0 0 2560 150 0 150"}))))}a(43);var A=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",element:l.a.createElement(g,null)}),l.a.createElement(i.a,{path:"/projects",element:l.a.createElement(E,null)}),l.a.createElement(i.a,{path:"/courses",element:l.a.createElement(G,null)}),l.a.createElement(i.a,{path:"/About",element:l.a.createElement(S,null)}),l.a.createElement(i.a,{path:"/Contact",element:l.a.createElement(C,null)})),l.a.createElement(g,null),l.a.createElement(E,null),l.a.createElement(L,null),l.a.createElement(G,null),l.a.createElement(S,null),l.a.createElement(C,null))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(o.a,null,l.a.createElement(A,null))),O()}],[[25,1,2]]]);
//# sourceMappingURL=main.e6b98a78.chunk.js.map