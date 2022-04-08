"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[163],{1132:function(n,e,t){t.d(e,{Z:function(){return a}});var r,o=t(168),i=t(2499).Z.h1(r||(r=(0,o.Z)(["\n  padding: 30px 0;\n  line-height: 58px;\n  letter-spacing: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 56px;\n  color: #2a2a2a;\n"]))),c=t(184);function a(n){var e=n.text;return(0,c.jsx)(i,{children:e})}},1508:function(n,e,t){t.d(e,{wr:function(){return l},Ai:function(){return d},Y5:function(){return x},xc:function(){return g},Hx:function(){return w}});var r=t(5861),o=t(7757),i=t.n(o),c=t(4569),a=t.n(c),u="https://api.themoviedb.org/3",s="8f3b565dfa705a44083795264ed307ec";function p(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(i().mark((function n(){var e,t,r,o=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:"",t=o.length>1&&void 0!==o[1]?o[1]:{},n.prev=2,n.next=5,a().get(e,t);case 5:return r=n.sent,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0.message),Promise.reject(new Error("Not found"));case 13:case"end":return n.stop()}}),n,null,[[2,9]])}))),f.apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("".concat(u,"/trending/movie/day?api_key=").concat(s));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("".concat(u,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("".concat(u,"/movie/").concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},5487:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r=t(885),o=t(2791);var i,c,a,u,s=t(3504),p=t(1508),f=t(8479),l=t(1132),h=t(9983),d=t(6856),v=t(168),x=t(2499),m=x.Z.form(i||(i=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=x.Z.input(c||(c=(0,v.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=x.Z.button(a||(a=(0,v.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),w=x.Z.span(u||(u=(0,v.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),b=t(184);function Z(n){var e=n.onSubmit,t=(0,o.useState)(""),i=(0,r.Z)(t,2),c=i[0],a=i[1];return(0,b.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(c),a("")},children:[(0,b.jsx)(g,{type:"text",name:"search",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",value:c,onChange:function(n){var e=n.currentTarget.value.toLowerCase().trim();a(e)}}),(0,b.jsxs)(y,{type:"submit","aria-label":"Search movies",children:[(0,b.jsx)(h.Pd.Provider,{value:{size:"2.5em"},children:(0,b.jsx)(d.vU7,{})}),(0,b.jsx)(w,{children:"Search"})]})]})}function k(){var n=(0,o.useState)(""),e=(0,r.Z)(n,2),t=e[0],i=e[1],c=(0,o.useState)([]),a=(0,r.Z)(c,2),u=a[0],h=a[1],d=function(n){var e=(0,o.useRef)();return(0,o.useEffect)((function(){e.current=n})),e.current}(t);(0,o.useEffect)((function(){t&&(0,p.Ai)(t).then((function(n){var e,r=n.data,o=r.results,i=r.total_results;if(0===i)return function(n){(0,f.ZP)('Sorry, there are no movies matching your query: "'.concat(n,'". Please try to search something else.'),{icon:"\ud83e\udd37\u200d\u2642\ufe0f"})}(t),void v();e=i,(0,f.ZP)("Hooray! We found ".concat(e," movies for you."),{icon:"\ud83e\udd1f"}),h(o)})).catch((function(n){return function(n){(0,f.ZP)("You caught the following error: ".concat(n.message,"."),{icon:"\ud83d\udc37"})}(n)}))}),[t]);var v=function(){h([])};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.Z,{text:"Movies"}),(0,b.jsx)(Z,{onSubmit:function(n){""!==n?d!==n?(i(n),v()):function(n){(0,f.ZP)('Bro, you already found all the movies on the query "'.concat(n,'".'),{icon:"\ud83d\ude45\u200d\u2642\ufe0f"})}(n):(0,f.ZP)("No, no, no! God, no! To search for movies you need to specify what you are looking for.",{icon:"\ud83e\udd26\u200d\u2642\ufe0f"})}}),(0,b.jsx)("ul",{children:u.length>0&&u.map((function(n){var e=n.id,t=n.title;return(0,b.jsx)("li",{id:e,children:(0,b.jsx)(s.rU,{to:"/movies/".concat(e),children:t})},e)}))})]})}}}]);
//# sourceMappingURL=movies-view.659575f9.chunk.js.map