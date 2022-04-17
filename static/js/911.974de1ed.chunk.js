"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[911,749,447],{1132:function(n,e,t){t.d(e,{Z:function(){return o}});var r,i=t(168),a=t(2499).Z.h1(r||(r=(0,i.Z)(["\n  padding: 30px 0;\n  line-height: 58px;\n  letter-spacing: 10px;\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 56px;\n  color: #2a2a2a;\n"]))),s=t(184);function o(n){var e=n.text;return(0,s.jsx)(a,{children:e})}},749:function(n,e,t){t.r(e),t.d(e,{default:function(){return E}});var r,i,a,s,o,p,x,c,l,d,f,u,g=t(885),h=t(2791),m=t(6871),Z=t(1233),v=t(1132),j=t(2375),b=t(168),w=t(2499),_=w.Z.div(r||(r=(0,b.Z)(["\n  display: flex;\n"]))),k=w.Z.img(i||(i=(0,b.Z)(["\n  width: 300px;\n  padding: 20px;\n"]))),z=w.Z.div(a||(a=(0,b.Z)(["\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n"]))),D=w.Z.p(s||(s=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n"]))),y=w.Z.p(o||(o=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n"]))),W=w.Z.p(p||(p=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n"]))),B=w.Z.span(x||(x=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n  font-weight: 600;\n"]))),C=w.Z.p(c||(c=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-bottom: 5px;\n"]))),F=w.Z.ul(l||(l=(0,b.Z)(["\n  margin-bottom: 5px;\n"]))),L=w.Z.li(d||(d=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-left: 15px;\n"]))),M=w.Z.p(f||(f=(0,b.Z)(["\n  font-size: 18px;\n  margin-top: 30px;\n"]))),O=w.Z.a(u||(u=(0,b.Z)(["\n  font-size: 20px;\n  letter-spacing: 1px;\n  margin-top: 30px;\n  color: #0077ee;\n\n  &:hover {\n    color: #1e90ff;\n  }\n"]))),R=t(1160),S=t(184);function G(n){var e=n.movieData,t=e.poster_path,r=e.genres,i=e.homepage,a=e.overview,s=e.release_date,o=e.status,p=e.title,x=e.vote_average,c=new Date(s);return(0,S.jsxs)(_,{children:[(0,S.jsx)(k,{src:t?"https://image.tmdb.org/t/p/w300".concat(t):R,alt:p}),(0,S.jsxs)(z,{children:[(0,S.jsxs)(D,{children:["Status: ",o]}),(0,S.jsxs)(y,{children:["Release date:"," ",0!==s?c.toLocaleDateString():"unknown"]}),(0,S.jsxs)(W,{children:["IMDb Rating:"," ",(0,S.jsx)(B,{children:0!==x?x:"unrated"})]}),r.length>0&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(C,{children:"Genres: "}),(0,S.jsx)(F,{children:r.map((function(n){var e=n.id,t=n.name;return(0,S.jsx)(L,{children:t},e)}))})]}),a?(0,S.jsx)(M,{children:a}):(0,S.jsx)(M,{children:"Overview is absent."}),(0,S.jsx)(M,{children:a}),i&&(0,S.jsx)(O,{href:i,target:"_blank",children:i})]})]})}var I=t(4447);function E(){var n,e,t=(0,m.UO)().movieId,r=(0,h.useState)({}),i=(0,g.Z)(r,2),a=i[0],s=i[1],o=(0,m.TH)();(0,h.useEffect)((function(){(0,Z.Y5)(t).then((function(n){return s(n.data)}))}),[t]);var p=null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",x=a.title,c=0===Object.keys(a).length;return(0,S.jsx)(S.Fragment,{children:!c&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(v.Z,{text:x}),(0,S.jsx)(j.Z,{to:p,text:"Go Back"}),(0,S.jsxs)(I.MovieDetailsWrapper,{children:[(0,S.jsx)(G,{movieData:a}),(0,S.jsx)(I.Line,{}),(0,S.jsxs)(I.BtnWrapper,{children:[(0,S.jsx)(j.Z,{to:"cast",text:"Cast",state:{from:p}}),(0,S.jsx)(j.Z,{to:"reviews",text:"Reviews",state:{from:p}})]}),(0,S.jsx)(m.j3,{})]})]})})}},4447:function(n,e,t){t.r(e),t.d(e,{MovieDetailsWrapper:function(){return p},Line:function(){return x},BtnWrapper:function(){return c}});var r,i,a,s=t(168),o=t(2499),p=o.Z.div(r||(r=(0,s.Z)(["\n  margin-top: 20px;\n  color: #ffffff;\n  background-color: #333333;\n  box-shadow: 0px 1px 3px 0px rgba(237, 70, 47, 0.2),\n    0px 1px 1px 0px rgba(237, 70, 47, 0.14),\n    0px 2px 1px -1px rgba(237, 70, 47, 0.12);\n"]))),x=o.Z.hr(i||(i=(0,s.Z)(["\n  width: 96%;\n  margin: 0 auto;\n  border: 1px solid #ed462f;\n"]))),c=o.Z.div(a||(a=(0,s.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  padding: 20px;\n  margin: 0 auto;\n  width: 300px;\n"])))},5911:function(n,e,t){t.r(e),t.d(e,{default:function(){return r.default}});var r=t(749)},1160:function(n,e,t){n.exports=t.p+"static/media/noPoster.8a5ba7e5187f7207c445.png"}}]);
//# sourceMappingURL=911.974de1ed.chunk.js.map