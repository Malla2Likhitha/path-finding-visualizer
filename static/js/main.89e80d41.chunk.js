(this["webpackJsonppathfinding-visualizer"]=this["webpackJsonppathfinding-visualizer"]||[]).push([[0],{10:function(e,r,n){"use strict";n.r(r);var t=n(2),o=n(4),c=n.n(o),i=n(1),a=n(0);var u=function(e){return Object(a.jsx)("div",{className:"square",onMouseOver:function(r){!e.noDisturb&&!e.checkClick&&!e.isWall&&(r.target.style.backgroundColor="#77ACF1")},onMouseOut:function(r){!e.noDisturb&&!e.checkClick&&!e.isWall&&(r.target.style.backgroundColor="#FAF1E6")},style:{backgroundColor:e.squareColour},onClick:function(){return!e.noDisturb&&(!e.isSourceSet||!e.isSinkSet)&&e.handleSquareClick(e.id)},onMouseDown:function(){return e.isSourceSet&&e.isSinkSet&&e.setReadyForWall(!0)&&e.createWall(e.id)},onMouseEnter:function(){return e.createWall(e.id)},onMouseUp:function(){return e.createWall(e.id)&&e.setReadyForWall(!1)}})};var s=function(e){var r=e.colour;return Object(a.jsx)("div",{className:"button",onClick:function(){return e.canClick&&e.handleButtonClick(e.colour)},style:{backgroundColor:r},children:e.name})};var l=function(e,r,n,t,o,c,i,a,u,s,l){if(o&&c){s(!0);for(var f,d,h,v,k=[],b=0;b<n;b++)for(var j=0;j<t;j++)e[b][j].checkSource?(e[b][j].distance=0,k.push(e[b][j]),f=b,d=j):e[b][j].checkSink&&(h=b,v=j);for(var C=[0,-1,0,1],x=[1,0,-1,0],m=function(){var r=k.shift();r.checkSource||setTimeout((function(){return a(r.rowIndex,r.colIndex)}),0);for(var o=function(o){var c=r.rowIndex+C[o],a=r.colIndex+x[o];if(c<n&&c>=0&&a<t&&a>=0&&!e[c][a].isWall&&e[c][a].distance>1+e[r.rowIndex][r.colIndex].distance){if(e[c][a].parent.rowIndex=r.rowIndex,e[c][a].parent.colIndex=r.colIndex,e[c][a].distance=1+e[r.rowIndex][r.colIndex].distance,e[c][a].checkSink)return e[c][a].isVisited=!0,"break";setTimeout((function(){return i(e[c][a].rowIndex,e[c][a].colIndex)}),0),k.push(e[c][a])}},c=0;c<4;c++){if("break"===o(c))break}if(e[h][v].isVisited)return"break"};0!==k.length;){if("break"===m())break}for(var S=function(){var e=k.shift();setTimeout((function(){return a(e.rowIndex,e.colIndex)}),0)};0!==k.length;)S();for(var p=e[h][v],O=function(){var r=p.parent.rowIndex,n=p.parent.colIndex;if(r===f&&n===d)return"break";setTimeout((function(){return u(r,n)}),0),p=e[r][n]};null!=p.parent.rowIndex;){if("break"===O())break}setTimeout((function(){return l(!0)}),0)}};var f=function(e,r,n,t,o,c,a,u,s,l,f){if(o&&c){var d,h,v,k;l(!0);for(var b=0;b<n;b++)for(var j=0;j<t;j++)e[b][j].checkSource?(e[b][j].distance=0,d=b,h=j):e[b][j].checkSink&&(v=b,k=j);for(var C=[d,h],x=[v,k],m=[0,1,0,-1],S=[1,0,-1,0],p=[],O=[],I=[],g=0;g<n;g++){for(var w=[],W=[],F=[],q=0;q<t;q++)w.push(1/0),F.push(1/0),W.push([g,q]);p.push(w),O.push(F),I.push(W)}p[C[0]][C[1]]=T(C[0],C[1]),O[C[0]][C[1]]=0;var D=[];D.push(C);for(var M=function(){for(var r=D.length,o=Object(i.a)(D[0],2),c=o[0],l=o[1],b=p[c][l],j=0,g=1;g<r;g++){var w=Object(i.a)(D[g],2),W=w[0],F=w[1];if(b>p[W][F])b=p[W][F],j=g;else if(b===p[W][F]){var q=Object(i.a)(D[j],2);T(q[0],q[1])>T(W,F)&&(j=g)}}var M=D[0];D[0]=D[j],D[j]=M;var A=D.shift();if(d===A[0]&&h===A[1]||v===A[0]&&k===A[1]||setTimeout((function(){return u(A[0],A[1])}),0),A[0]===x[0]&&A[1]===x[1]){var y=function(){A=I[A[0]][A[1]];var e=[];for(e.push(A);;){var r=A;if(e.push(r),A===C){for(var n=function(r){d===e[r][0]&&h===e[r][1]||v===e[r][0]&&k===e[r][1]||setTimeout((function(){return s(e[r][0],e[r][1])}),0)},t=0;t<e.length;t++)n(t);return setTimeout((function(){return f(!0)}),0),{v:{v:void 0}}}A=I[A[0]][A[1]]}}();if("object"===typeof y)return y.v}for(var B=function(r){var o=[A[0]+m[r],A[1]+S[r]];if(o[0]>=0&&o[0]<n&&o[1]>=0&&o[1]<t&&!e[o[0]][o[1]].isWall&&!e[o[0]][o[1]].isVisited&&p[o[0]][o[1]]>1+p[A[0]][A[1]]){D.push(o),I[o[0]][o[1]]=A,O[o[0]][o[1]]=O[A[0]][A[1]]+1;var c=O[o[0]][o[1]];p[o[0]][o[1]]=T(o[0],o[1])+c,d===o[0]&&h===o[1]||v===o[0]&&k===o[1]||setTimeout((function(){return a(o[0],o[1])}),0)}},E=0;E<4;E++)B(E)};D.length>0;){var A=M();if("object"===typeof A)return A.v}setTimeout((function(){return f(!0)}),0)}function T(e,r){return Math.abs(e-x[0])+Math.abs(r-x[1])}};var d=function(e,r,n,t,o,c,a,u,s,l,f){if(o&&c){var d,h,v,k;l(!0);for(var b=0;b<n;b++)for(var j=0;j<t;j++)e[b][j].checkSource?(e[b][j].distance=0,d=b,h=j):e[b][j].checkSink&&(v=b,k=j);for(var C=[d,h],x=[v,k],m=[0,1,0,-1],S=[1,0,-1,0],p=[],O=[],I=0;I<n;I++){for(var g=[],w=[],W=0;W<t;W++)g.push(1/0),w.push([I,W]);p.push(g),O.push(w)}p[C[0]][C[1]]=0;var F=[];F.push(C);for(var q=function(){for(var r=F.length,o=Object(i.a)(F[0],2),c=M(o[0],o[1],x[0],x[1]),l=0,b=1;b<r;b++){var j=Object(i.a)(F[b],2),I=j[0],g=j[1];c>M(I,g,x[0],x[1])&&(c=M(I,g,x[0],x[1]),l=b)}var w=F[0];F[0]=F[l],F[l]=w;var W=F.shift();if(d===W[0]&&h===W[1]||v===W[0]&&k===W[1]||setTimeout((function(){return u(W[0],W[1])}),0),W[0]===x[0]&&W[1]===x[1]){W=O[W[0]][W[1]];for(var q=function(){var e=W;if(d===e[0]&&h===e[1]||v===e[0]&&k===e[1]||setTimeout((function(){return s(e[0],e[1])}),0),W===C)return setTimeout((function(){return f(!0)}),0),"break";W=O[W[0]][W[1]]};;){if("break"===q())break}return{v:void 0}}for(var D=function(r){var o=[W[0]+m[r],W[1]+S[r]];o[0]>=0&&o[0]<n&&o[1]>=0&&o[1]<t&&!e[o[0]][o[1]].isWall&&!e[o[0]][o[1]].isVisited&&!e[o[0]][o[1]].isExplored&&p[o[0]][o[1]]>1+p[W[0]][W[1]]&&(F.push(o),O[o[0]][o[1]]=W,p[o[0]][o[1]]=1+p[W[0]][W[1]],d===o[0]&&h===o[1]||v===o[0]&&k===o[1]||setTimeout((function(){return a(o[0],o[1])}),0))},A=0;A<4;A++)D(A)};F.length>0;){var D=q();if("object"===typeof D)return D.v}setTimeout((function(){return f(!0)}),0)}function M(e,r,n,t){return Math.abs(e-n)+Math.abs(r-t)}};var h=function(){for(var e=Object(t.useState)(0),r=Object(i.a)(e,2),n=(r[0],r[1]),o=Object(t.useState)(!1),c=Object(i.a)(o,2),h=c[0],v=c[1],k=Object(t.useState)(!1),b=Object(i.a)(k,2),j=b[0],C=b[1],x=Object(t.useState)(!1),m=Object(i.a)(x,2),S=m[0],p=m[1],O=Object(t.useState)(!1),I=Object(i.a)(O,2),g=I[0],w=I[1],W=Object(t.useState)(!1),F=Object(i.a)(W,2),q=F[0],D=F[1],M=[],A=17,T=52,y=0;y<A;y++){for(var B=[],E=0;E<T;E++){var V={rowIndex:y,colIndex:E,checkClick:!1,checkSource:!1,checkSink:!1,isWall:!1,isVisited:!1,parent:{rowIndex:null,colIndex:null},distance:1/0,squareColour:"#FAF1E6"};0!==y&&0!==E&&16!==y&&51!==E||(V.isWall=!0,V.squareColour="#125D98",V.checkClick=!0),B.push(V)}M.push(B)}var N=Object(t.useState)(M),R=Object(i.a)(N,2),z=R[0],P=R[1],G=function(e){P(e),n(Math.random())};function J(e){for(var r=e.rowIndex,t=e.colIndex,o=z,c=1;c<16;c++)for(var i=1;i<51;i++)c!==r||i!==t?!1===o[c][i].checkSource&&!1===o[c][i].checkSink&&!1===o[c][i].isWall&&(o[c][i].squareColour="#FAF1E6",o[c][i].checkClick=!1):o[c][i].checkSource||o[c][i].checkSink||(o[r][t].checkClick=!0,o[r][t].squareColour="blue");G(o),n(Math.random())}function U(e){if(!g){e="#91BD3A"===e?"green":"red";for(var r=z,t=0;t<A;t++)for(var o=0;o<T;o++)"blue"===r[t][o].squareColour&&("green"===e&&!h||"red"===e&&!j)&&(r[t][o].squareColour=e,r[t][o].checkSource="green"===e,r[t][o].checkSink="red"===e,"green"===e?(r[t][o].isVisited=!0,v(!0)):C(!0));G(r),n(Math.random())}}function H(e){if(g||!S)return!1;var r=e.rowIndex,t=e.colIndex,o=z;return o[r][t].checkSource||o[r][t].checkSink||"#FAF1E6"!==o[r][t].squareColour||(o[r][t].squareColour="#125D98",o[r][t].isWall=!0,G(o),n(Math.random())),!0}function K(e,r){var t=z;t[e][r].isVisited=!0,t[e][r].squareColour="#C68B59",G(t),n(Math.random())}function L(e,r){var t=z;t[e][r].squareColour="#C84B31",G(t),n(Math.random())}function Q(e,r){var t=z;t[e][r].squareColour="yellow",G(t),n(Math.random())}return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"heading",children:Object(a.jsx)("h1",{children:"Pathfinding Algorithms Visualizer"})}),Object(a.jsx)("div",{className:"grid",children:z.map((function(e,r){return Object(a.jsx)("div",{className:"row",children:e.map((function(e,n){return Object(a.jsx)(u,{id:{rowIndex:r,colIndex:n},squareColour:z[r][n].squareColour,checkClick:z[r][n].checkClick,handleSquareClick:J,isWall:z[r][n].isWall,readyForWall:S,createWall:H,setReadyForWall:p,isSourceSet:h,isSinkSet:j,noDisturb:g},[r,n])}))},r)}))}),Object(a.jsxs)("div",{className:"button-group",children:[Object(a.jsx)(s,{name:"Set Start Point",colour:"#91BD3A",handleButtonClick:U,canClick:!g}),Object(a.jsx)(s,{name:"Set End Point",colour:"#FB3640",handleButtonClick:U,canClick:!g}),Object(a.jsx)(s,{name:"Dijkstra Algorithm",colour:"#FECD1A",handleButtonClick:function(){return l(z,G,A,T,h,j,K,L,Q,w,D)},canClick:!g}),Object(a.jsx)(s,{name:"Greedy Best First Search Algorithm",colour:"#FECD1A",handleButtonClick:function(){return d(z,G,A,T,h,j,K,L,Q,w,D)},canClick:!g}),Object(a.jsx)(s,{name:"A* Algorithm",colour:"#FECD1A",handleButtonClick:function(){return f(z,G,A,T,h,j,K,L,Q,w,D)},canClick:!g}),Object(a.jsx)(s,{name:"Reset Grid",colour:"#D1D9D9",handleButtonClick:function(){g&&!q||(w(!1),D(!1),p(!1),v(!1),C(!1),G(M))},canClick:!g||q})]})]})};var v=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(h,{})})};c.a.render(Object(a.jsx)(v,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.89e80d41.chunk.js.map