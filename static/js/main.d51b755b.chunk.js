(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e){e.exports=[{id:1,title:"Portfolio Website ",subtitle:"Personal portfolio",tech:[{img:"./images/React.PNG"},{img:"./images/HTML.PNG"},{img:"./images/CSS.PNG"},{img:"./images/JS.PNG"}],description:"It is a personal portfolio website made using React framework. Single pagewebsite that contains all the information about my projects, certifications and skills. ",logo:"./images/portfolio.jpg"},{id:2,title:"NoProxy",subtitle:"LAN based Attendance management system",tech:[{img:"./images/Mongo.PNG"},{img:"./images/express.PNG"},{img:"./images/React.PNG"},{img:"./images/nodejs.PNG"}],description:"Different from traditional attendaance management systems that uses password to mark attendance, this app marks atendance for only those who are connected to the Teacher's short range Wifi-Hotspot.",logo:"./images/NoProxy.JPG"},{id:3,title:"Chat Application ",subtitle:"Chat Application Using React, Express and Socket.IO ",tech:[{img:"./images/images.PNG"},{img:"./images/images.PNG"},{img:"./images/images.PNG"},{img:"./images/images.PNG"}],description:"Chat application desgned using react framework and SocketIO that enables user to send and receive messages privately as well as in groups.",logo:"./images/chat-app.JPG"}]},function(e,t,a){e.exports=a.p+"static/media/google.f30af8fb.png"},function(e,t,a){e.exports=a.p+"static/media/Infosys.b03e71e9.png"},function(e,t,a){e.exports=a.p+"static/media/isro.1482c8d2.png"},function(e,t,a){e.exports=a.p+"static/media/coursera.90988c91.png"},,,,function(e,t,a){e.exports=a(44)},,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(15),c=a.n(l),o=(a(34),a(11)),i=a(9),s=a(3),m=a(23),u=a(22),h=(a(36),a(13));a(37);function p(){p=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(C){o=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof u?t:u,l=Object.create(r.prototype),c=new x(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return S()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var o=y(c,a);if(o){if(o===m)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=i;var m={};function u(){}function h(){}function g(){}var f={};o(f,r,function(){return this});var d=Object.getPrototypeOf,E=d&&d(d(j([])));E&&E!==t&&a.call(E,r)&&(f=E);var v=g.prototype=u.prototype=Object.create(f);function N(e){["next","throw","return"].forEach(function(t){o(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var n;this._invoke=function(r,l){function c(){return new t(function(n,c){!function n(r,l,c,o){var i=s(e[r],e,l);if("throw"!==i.type){var m=i.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then(function(e){n("next",e,c,o)},function(e){n("throw",e,c,o)}):t.resolve(u).then(function(e){m.value=e,c(m)},function(e){return n("throw",e,c,o)})}o(i.arg)}(r,l,n,c)})}return n=n?n.then(c,c):c()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function b(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(b,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=g,o(v,"constructor",g),o(g,"constructor",h),h.displayName=o(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,o(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},N(w.prototype),o(w.prototype,l,function(){return this}),e.AsyncIterator=w,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new w(i(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then(function(e){return e.done?e.value:c.next()})},N(v),o(v,c,"Generator"),o(v,r,function(){return this}),o(v,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(o&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),k(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;k(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}function g(){var e=Object(n.useCallback)(function(){var e=Object(s.a)(p().mark(function e(t){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,Object(u.a)(t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]),t=Object(n.useCallback)(function(){var e=Object(s.a)(p().mark(function e(t){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t);case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),[]);return r.a.createElement("section",{className:"Home"},r.a.createElement("div",{className:"navbar"},r.a.createElement("ul",{className:"nav-list"},r.a.createElement("li",null,r.a.createElement(h.a,{className:"element",to:"#home"},"Home")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"element",to:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"element",to:"#About"},"About")),r.a.createElement("li",null,r.a.createElement(h.a,{className:"element",to:"#Contact"},"Contact")))),r.a.createElement("div",{className:"profile-container",id:"home"},r.a.createElement("div",{className:"seperator-skew"},r.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("polygon",{className:"fill-white",points:"2560 0 2560 150 0 150"}))),r.a.createElement("div",{className:"profile-parent"},r.a.createElement(m.a,{id:"tsparticles",init:e,loaded:t,options:{background:{color:{value:"transparent"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"pull"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{pull:{quantity:4},repulse:{distance:50,duration:1}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{directions:"none",enable:!0,outModes:{default:"bounce"},random:!1,speed:1,straight:!1},number:{density:{enable:!0,area:500},value:50},opacity:{value:.1},shape:{type:"polygon"},size:{value:{min:1,max:5}}},detectRetina:!0}}),r.a.createElement("div",{className:"profile-details"},r.a.createElement("div",{className:"Colz"},r.a.createElement("div",null,r.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-facebook-square"})),r.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-google-plus-square"})),r.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-instagram"})),r.a.createElement("a",{className:"Colz-icon",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("div",{className:"profile-details-name"},r.a.createElement("span",{className:"primary-text"},r.a.createElement("h3",null," ","Hello, I'm ",r.a.createElement("span",{className:"highlighted-text"},"Anuj"))),r.a.createElement("span",{className:"highlighted-text"},r.a.createElement("h1",null,"Full Stack ",r.a.createElement("div",{className:"dev"}," Dev"),"eloper")),r.a.createElement("span",{className:"profile-role-tagline"},"Knack of building applications with front and back end operations.")),r.a.createElement("div",{className:"profile-options"},r.a.createElement("button",{className:"btn primary-btn"},"Hire me"),r.a.createElement("a",{href:"Resume_anujguha_27june.pdf",download:"Anuj Resume_anujguha_27june.PDF"},r.a.createElement("button",{className:"btn highlighted-btn"},"Get Resume"))))),r.a.createElement("div",{className:"profile-picture"},r.a.createElement("div",{className:"profile-picture-background"})))),r.a.createElement("footer",{className:"footer"},r.a.createElement("h3",null,"THE ONLY WAY TO DO GREAT WORK IS TO LOVE WHAT YOU DO.")),r.a.createElement("footer",{className:"footer"}," ",r.a.createElement("h6",null," -Steve Jobs")))}a(38);var f=a(17);function d(e){return r.a.createElement("div",null,f.map(function(e,t){return r.a.createElement("div",{className:"project-box"},r.a.createElement("div",null,r.a.createElement("img",{src:e.logo,alt:"project-logo",className:"project-logo"})),r.a.createElement("div",{className:"right-box"},r.a.createElement("h1",{className:"head-123"},e.title),r.a.createElement("h6",{className:"head-123"},e.subtitle),r.a.createElement("div",{className:"tech-logos"},r.a.createElement("li",null," ",r.a.createElement("h3",null,"MADE WITH:")),r.a.createElement("li",null,e.tech.map(function(e,t){return r.a.createElement("img",{src:e.img,alt:"tech-logo",className:"tech-logo"})}))),r.a.createElement("p",null,e.description)))}))}function E(){return r.a.createElement("section",{className:"Projects-container",id:"projects"},r.a.createElement("div",{className:"seperator-skew2"},r.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("polygon",{className:"fill-white",points:"0 0 2560 150 0 150"}))),r.a.createElement("div",{className:"Heading"},r.a.createElement("h1",{className:"headone"},"My"),r.a.createElement("h1",{className:"head2"},"Projects")),r.a.createElement("div",{className:"pbox"},r.a.createElement(d,null)))}a(39);var v=a(18),N=a.n(v),w=a(19),y=a.n(w),b=a(20),k=a.n(b),x=a(21),j=a.n(x);function S(){return r.a.createElement("section",{className:"courses-container",id:"courses"},r.a.createElement("div",{className:"Heading"},r.a.createElement("h1",{className:"head1"},"Training &"),r.a.createElement("h1",{className:"head2"},"Certifications")),r.a.createElement("div",{className:"course-content"},r.a.createElement("ul",{className:"course-list"},r.a.createElement("li",{className:"cert-block"},r.a.createElement("img",{src:y.a,className:"cert-logo",alt:"logo"}),r.a.createElement("div",{className:"cert-text"},r.a.createElement("h3",null,"Full-stack Web Development"),r.a.createElement("p",null,r.a.createElement("b",null,"Skills Gained:"),"JavaScript and jQuery, Backend with Node.js, App-Development with Angular,Database Design with MySQL and NoSQL, Sass, Chrome developer tools."),r.a.createElement("button",{className:"view-cert"},"View Certificate"))),r.a.createElement("li",{className:"cert-block"},r.a.createElement("img",{src:N.a,className:"cert-logo",alt:"logo"}),r.a.createElement("div",{className:"cert-text"},r.a.createElement("h3",null,"IT Automation with Python (SPECIALIZATION) "),r.a.createElement("p",null,"Skills Gained: Python, Git and GitHub, Troubleshooting and debugging techniques, Configuration Management and the Cloud."),r.a.createElement("button",{className:"view-cert"},"View Certificate"))),r.a.createElement("li",{className:"cert-block"},r.a.createElement("img",{src:k.a,className:"cert-logo",alt:"logo"}),r.a.createElement("div",{className:"cert-text"},r.a.createElement("h3",null,"Satellite Remote sensing of Atmosphere"),r.a.createElement("p",null,"Topics Covered: Fundamentals of Remote sensing, Processes and types of Remote sensing, Imaging spectrometry, Interaction of EMR with Atmosphere, etc"),r.a.createElement("button",{className:"view-cert"},"View Certificate"))),r.a.createElement("li",{className:"cert-block"},r.a.createElement("img",{src:j.a,className:"cert-logo",alt:"logo"}),r.a.createElement("div",{className:"cert-text"},r.a.createElement("h3",null,"Foundations of UX Design "),r.a.createElement("p",null,"Topics Covered: Foundation concepts of UX design - User centered, Equity focussed, design process accessibility, design sprints, wireframes, etc"),r.a.createElement("button",{className:"view-cert"},"View Certificate"))))))}a(40);function C(){return r.a.createElement("section",{className:"About-container",id:"About"},r.a.createElement("div",{className:"seperator-skew4"},r.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("polygon",{className:"fill-white",points:"2560 0 2560 150 0 150"}))),r.a.createElement("div",{className:"aboutHeading"},r.a.createElement("h1",{className:"abouthead1"},"A"),r.a.createElement("h1",{className:"abouthead2"},"bout")),r.a.createElement("div",{className:"aboutBlock"},r.a.createElement("div",{className:"introbox"},r.a.createElement("h1",null,"Anuj Guha"),r.a.createElement("h3",null,"full stack Web Developer"),r.a.createElement("p",null,"I am a Full Stack Developer and a Problem-Solving enthusiast pursuing Computer Science engineering from MITS, Gwalior. "),r.a.createElement("p",null,"I have a passion for software development with a diverse skillset ranging from the MEARN stack to a stronghold on data structures and algorithms. "),r.a.createElement("p",null,"My tech stack includes ",r.a.createElement("li",null,"languages like C++, Python, and Javascript ")," ",r.a.createElement("li",null,"frameworks like React and Angular"),r.a.createElement("li",null," DBMS like MongoDB and MySQL. ")," ",r.a.createElement("li",null," Tools like Figma, Postman, Git, etc.")),r.a.createElement("p",null,"Presently, I have started competitive coding and I have earned 2",r.a.createElement("span",{role:"img","aria-label":"Star"},"\u2b50"),"'s on Codechef.I am also a student ambassador at Internshala and a member of the Google developer students club - Gwalior. I have been actively participating in online hackathons as well.")),r.a.createElement("img",{src:"/images/anuj_orangebg.PNG",alt:"myImage2",className:"myImage"})))}var P=a(24),L=(a(41),function(){var e=Object(n.useRef)();return r.a.createElement("section",{className:"ContactUs",id:"Contact"},r.a.createElement("div",{className:"HeadingContact"},r.a.createElement("h1",{className:"heading1"},"Contact "),r.a.createElement("h1",{className:"heading2"},"Me ")),r.a.createElement("div",{className:"formDiv"},r.a.createElement("form",{ref:e,onSubmit:function(t){t.preventDefault(),P.a.sendForm("service_lyq6his","template_1y1k15c",e.current,"tkMhX9KynhJSwV4yg").then(function(e){console.log(e.text)},function(e){console.log(e.text)})}},r.a.createElement("li",null,r.a.createElement("label",{className:"labelClass"},"Name")),r.a.createElement("li",null,r.a.createElement("input",{className:"inputclass",type:"text",name:"user_name"})),r.a.createElement("li",null,r.a.createElement("label",{className:"labelClass"},"Email")),r.a.createElement("li",null,r.a.createElement("input",{className:"inputclass",type:"email",name:"user_email"})),r.a.createElement("li",null,r.a.createElement("label",{className:"labelClass"},"Message")),r.a.createElement("li",null,r.a.createElement("textarea",{className:"inputclass2",name:"message"})),r.a.createElement("li",null,r.a.createElement("input",{className:"submitButton",type:"submit",value:"Send"})),r.a.createElement("li",{className:"or"},r.a.createElement("h5",null,"-OR-")),r.a.createElement("li",{className:"icon-block"},r.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-github-square"})),r.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-google-plus-square"})),r.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-instagram"})),r.a.createElement("a",{className:"icons",href:"https://www.linkedin.com/in/anuj-guha-47991a1ba/"},r.a.createElement("i",{className:"fa fa-twitter"}))))))});a(42);function G(){return r.a.createElement("section",{className:"skill-container"},r.a.createElement("div",{className:"Headingskill"},r.a.createElement("h1",{className:"head1skill"},"Key-"),r.a.createElement("h1",{className:"head2skill"},"Skills")),r.a.createElement("div",{className:"block"},r.a.createElement("ul",{className:"icons-skills"},r.a.createElement("li",null,r.a.createElement("img",{src:"/images/Mongo.png",alt:"mongoDB"}),r.a.createElement("h4",null,"MongDB")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/express.png",alt:"Express-logo"}),r.a.createElement("h4",null,"Express")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/angular.png",alt:"angular-logo"}),r.a.createElement("h4",null,"Angular")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/react.png",alt:"react-logo"}),r.a.createElement("h4",null,"React")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/nodejs.png",alt:"nodejs-logo"}),r.a.createElement("h4",null,"Nodejs")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/mysql.png",alt:"mysql-logo"}),r.a.createElement("h4",null,"MySQL")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/cpp.png",alt:"cpp-logo"}),r.a.createElement("h4",null,"C++")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/Python-PNG.png",alt:"Python-logo"}),r.a.createElement("h4",null,"Python")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/bootstrap.png",alt:"bootstrap-logo"}),r.a.createElement("h4",null,"Bootstrap")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/HTML.png",alt:"html-logo"}),r.a.createElement("h4",null,"HTML")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/CSS.png",alt:"CSS-logo"}),r.a.createElement("h4",null,"CSS")),r.a.createElement("li",null,r.a.createElement("img",{src:"/images/JS.png",alt:"JS-logo"}),r.a.createElement("h4",null,"JavaScript")))),r.a.createElement("div",{className:"seperator-skew9"},r.a.createElement("svg",{x:"0",y:"0",viewBox:"0 0 2560 150",preserveAspectRatio:"none",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("polygon",{className:"fill-white",points:"0 0 2560 150 0 150"}))))}a(43);var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",element:r.a.createElement(g,null)}),r.a.createElement(i.a,{path:"/projects",element:r.a.createElement(E,null)}),r.a.createElement(i.a,{path:"/courses",element:r.a.createElement(S,null)}),r.a.createElement(i.a,{path:"/About",element:r.a.createElement(C,null)}),r.a.createElement(i.a,{path:"/Contact",element:r.a.createElement(L,null)})),r.a.createElement(g,null),r.a.createElement(E,null),r.a.createElement(G,null),r.a.createElement(S,null),r.a.createElement(C,null),r.a.createElement(L,null))},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,46)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(o.a,null,r.a.createElement(A,null))),O()}],[[25,1,2]]]);
//# sourceMappingURL=main.d51b755b.chunk.js.map