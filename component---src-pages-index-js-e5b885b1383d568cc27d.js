"use strict";(self.webpackChunkv=self.webpackChunkv||[]).push([[293],{9943:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(6540),l=a(9689),r=a(7581),i=a(1626),o=a(7383),d=a(8344),s=a(4333);const{colors:m,fontSizes:c,fonts:p}=i.w4,f=(0,r.default)(i.wn).withConfig({displayName:"Personal__StyledContainer",componentId:"sc-7860w1-0"})(["text-align:center;max-width:900px;margin:0 auto 100px;"]),u=(0,r.default)(i.DZ).withConfig({displayName:"Personal__StyledHeading",componentId:"sc-7860w1-1"})(["display:block;color:",";font-size:",";font-family:",";font-weight:normal;margin-bottom:30px;&:before{bottom:0;font-size:",";}&:after{display:none;}"],m.green,c.md,p.SFMono,c.sm),g=r.default.div.withConfig({displayName:"Personal__Grid",componentId:"sc-7860w1-2"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;",";",";",";> div:nth-child(5){grid-column-end:span 2;}"],i.$_.desktop`grid-template-columns: repeat(3, 1fr);`,i.$_.tablet`grid-template-columns: repeat(2, 1fr);`,i.$_.phablet`grid-template-columns: 1fr;`),h=r.default.div.withConfig({displayName:"Personal__AdventureItem",componentId:"sc-7860w1-3"})(["display:flex;flex-direction:column;width:100%;border:1px solid ",";border-radius:5px;overflow:hidden;img{flex:3;width:100%;height:auto;transition:",";&:hover{transform:scale(1.3);}}p{flex:1;padding:15px;text-align:left;}"],m.green,i.w4.transition);var w=e=>{let{adventures:t}=e;const a=(0,n.useRef)(null);return(0,n.useEffect)((()=>o.A.reveal(a.current,(0,d.srConfig)())),[]),n.createElement(f,{id:"personal",ref:a},n.createElement(u,null,"My Adventures"),n.createElement(g,null,t.map(((e,t)=>n.createElement(h,{key:t},e.image&&e.image.childImageSharp&&e.image.childImageSharp.fluid?n.createElement(s.A,{fluid:e.image.childImageSharp.fluid,alt:e.title}):n.createElement("p",null,"No Image Available"),n.createElement("p",null,e.description))))))};const v=(0,r.default)(i.gZ).withConfig({displayName:"pages__StyledMainContainer",componentId:"sc-1wordim-0"})(["counter-reset:section;"]);var E=e=>{let{location:t,data:a}=e;return n.createElement(l.PE,{location:t},n.createElement(v,{className:"fillHeight"},n.createElement(l.lq,{data:a.hero.edges}),n.createElement(l.Im,{data:a.about.edges}),n.createElement(l.XP,{data:a.jobs.edges}),n.createElement(l.Hi,{data:a.featured.edges}),n.createElement(l.Mo,{data:a.extras.edges}),n.createElement(w,{adventures:a.personal.edges[0].node.frontmatter.adventures}),n.createElement(l.Bv,{data:a.contact.edges})))}}}]);
//# sourceMappingURL=component---src-pages-index-js-e5b885b1383d568cc27d.js.map