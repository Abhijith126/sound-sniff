import{C as O,j as o,l as b,B as te,m as N,D as W,i as R,f as w,r as c,k,E as oe,a as M,d as S,T as y,F as $,G as se,H as ae,o as P,A as T,I as Q,J as re,K as ne,w as E,P as le,S as ie,L as ce,M as de,v as pe,x as ue,N as xe,O as be,Q as ge,R as fe,U as me}from"./index-CfqMM1e6.js";import{L as X,A as Y,C as he,a as ye}from"./Artists-ClvGlJW1.js";const ve=O(o.jsx("path",{d:"M17 12h-5v5h5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1zm3 18H5V8h14z"})),Ce=O(o.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"})),je=O(o.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),Te=b(te)(N(({theme:e})=>({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`,...e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},borderRadius:2,"&:hover, &:focus":{...e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}},"&:active":{boxShadow:e.shadows[0],...e.palette.mode==="light"?{backgroundColor:W(e.palette.grey[200],.12)}:{backgroundColor:W(e.palette.grey[600],.12)}}}))),Re=b(je)({width:24,height:16});function we(e){const{slots:t={},slotProps:s={},...r}=e,n=e;return o.jsx("li",{children:o.jsx(Te,{focusRipple:!0,...r,ownerState:n,children:o.jsx(Re,{as:t.CollapsedIcon,ownerState:n,...s.collapsedIcon})})})}function ke(e){return w("MuiBreadcrumbs",e)}const Me=R("MuiBreadcrumbs",["root","ol","li","separator"]),Se=e=>{const{classes:t}=e;return S({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ke,t)},Be=b(y,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,t)=>[{[`& .${Me.li}`]:t.li},t.root]})({}),$e=b("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,t)=>t.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ze=b("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,t)=>t.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function He(e,t,s,r){return e.reduce((n,a,l)=>(l<e.length-1?n=n.concat(a,o.jsx(ze,{"aria-hidden":!0,className:t,ownerState:r,children:s},`separator-${l}`)):n.push(a),n),[])}const Ie=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiBreadcrumbs"}),{children:n,className:a,component:l="nav",slots:i={},slotProps:d={},expandText:u="Show path",itemsAfterCollapse:p=1,itemsBeforeCollapse:h=1,maxItems:v=8,separator:x="/",...B}=r,[z,C]=c.useState(!1),g={...r,component:l,expanded:z,expandText:u,itemsAfterCollapse:p,itemsBeforeCollapse:h,maxItems:v,separator:x},j=Se(g),H=oe({elementType:i.CollapsedIcon,externalSlotProps:d.collapsedIcon,ownerState:g}),I=c.useRef(null),A=f=>{const D=()=>{C(!0);const _=I.current.querySelector("a[href],button,[tabindex]");_&&_.focus()};return h+p>=f.length?f:[...f.slice(0,h),o.jsx(we,{"aria-label":u,slots:{CollapsedIcon:i.CollapsedIcon},slotProps:{collapsedIcon:H},onClick:D},"ellipsis"),...f.slice(f.length-p,f.length)]},L=c.Children.toArray(n).filter(f=>c.isValidElement(f)).map((f,D)=>o.jsx("li",{className:j.li,children:f},`child-${D}`));return o.jsx(Be,{ref:s,component:l,color:"textSecondary",className:M(j.root,a),ownerState:g,...B,children:o.jsx($e,{className:j.ol,ref:I,ownerState:g,children:He(z||v&&L.length<=v?L:A(L),j.separator,x,g)})})}),Z=c.createContext();function Ae(e){return w("MuiTable",e)}R("MuiTable",["root","stickyHeader"]);const Pe=e=>{const{classes:t,stickyHeader:s}=e;return S({root:["root",s&&"stickyHeader"]},Ae,t)},Ne=b("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.stickyHeader&&t.stickyHeader]}})(N(({theme:e})=>({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...e.typography.body2,padding:e.spacing(2),color:(e.vars||e).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:({ownerState:t})=>t.stickyHeader,style:{borderCollapse:"separate"}}]}))),V="table",Ue=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiTable"}),{className:n,component:a=V,padding:l="normal",size:i="medium",stickyHeader:d=!1,...u}=r,p={...r,component:a,padding:l,size:i,stickyHeader:d},h=Pe(p),v=c.useMemo(()=>({padding:l,size:i,stickyHeader:d}),[l,i,d]);return o.jsx(Z.Provider,{value:v,children:o.jsx(Ne,{as:a,role:a===V?null:"table",ref:s,className:M(h.root,n),ownerState:p,...u})})}),U=c.createContext();function Le(e){return w("MuiTableBody",e)}R("MuiTableBody",["root"]);const De=e=>{const{classes:t}=e;return S({root:["root"]},Le,t)},Oe=b("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),Ee={variant:"body"},F="tbody",_e=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiTableBody"}),{className:n,component:a=F,...l}=r,i={...r,component:a},d=De(i);return o.jsx(U.Provider,{value:Ee,children:o.jsx(Oe,{className:M(d.root,n),as:a,ref:s,role:a===F?null:"rowgroup",ownerState:i,...l})})});function We(e){return w("MuiTableCell",e)}const Ve=R("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),Fe=e=>{const{classes:t,variant:s,align:r,padding:n,size:a,stickyHeader:l}=e,i={root:["root",s,l&&"stickyHeader",r!=="inherit"&&`align${$(r)}`,n!=="normal"&&`padding${$(n)}`,`size${$(a)}`]};return S(i,We,t)},Je=b("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`size${$(s.size)}`],s.padding!=="normal"&&t[`padding${$(s.padding)}`],s.align!=="inherit"&&t[`align${$(s.align)}`],s.stickyHeader&&t.stickyHeader]}})(N(({theme:e})=>({...e.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:e.vars?`1px solid ${e.vars.palette.TableCell.border}`:`1px solid
    ${e.palette.mode==="light"?se(P(e.palette.divider,1),.88):ae(P(e.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(e.vars||e).palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(e.vars||e).palette.text.primary}},{props:{variant:"footer"},style:{color:(e.vars||e).palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${Ve.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:({ownerState:t})=>t.stickyHeader,style:{position:"sticky",top:0,zIndex:2,backgroundColor:(e.vars||e).palette.background.default}}]}))),m=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiTableCell"}),{align:n="inherit",className:a,component:l,padding:i,scope:d,size:u,sortDirection:p,variant:h,...v}=r,x=c.useContext(Z),B=c.useContext(U),z=B&&B.variant==="head";let C;l?C=l:C=z?"th":"td";let g=d;C==="td"?g=void 0:!g&&z&&(g="col");const j=h||B&&B.variant,H={...r,align:n,component:C,padding:i||(x&&x.padding?x.padding:"normal"),size:u||(x&&x.size?x.size:"medium"),sortDirection:p,stickyHeader:j==="head"&&x&&x.stickyHeader,variant:j},I=Fe(H);let A=null;return p&&(A=p==="asc"?"ascending":"descending"),o.jsx(Je,{as:C,ref:s,className:M(I.root,a),"aria-sort":A,scope:g,ownerState:H,...v})});function qe(e){return w("MuiTableContainer",e)}R("MuiTableContainer",["root"]);const Ge=e=>{const{classes:t}=e;return S({root:["root"]},qe,t)},Ke=b("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),Qe=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiTableContainer"}),{className:n,component:a="div",...l}=r,i={...r,component:a},d=Ge(i);return o.jsx(Ke,{ref:s,as:a,className:M(d.root,n),ownerState:i,...l})});function Xe(e){return w("MuiTableHead",e)}R("MuiTableHead",["root"]);const Ye=e=>{const{classes:t}=e;return S({root:["root"]},Xe,t)},Ze=b("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),et={variant:"head"},J="thead",tt=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiTableHead"}),{className:n,component:a=J,...l}=r,i={...r,component:a},d=Ye(i);return o.jsx(U.Provider,{value:et,children:o.jsx(Ze,{as:a,className:M(d.root,n),ref:s,role:a===J?null:"rowgroup",ownerState:i,...l})})});function ot(e){return w("MuiTableRow",e)}const q=R("MuiTableRow",["root","selected","hover","head","footer"]),st=e=>{const{classes:t,selected:s,hover:r,head:n,footer:a}=e;return S({root:["root",s&&"selected",r&&"hover",n&&"head",a&&"footer"]},ot,t)},at=b("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.head&&t.head,s.footer&&t.footer]}})(N(({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${q.hover}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${q.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:P(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:P(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),G="tr",K=c.forwardRef(function(t,s){const r=k({props:t,name:"MuiTableRow"}),{className:n,component:a=G,hover:l=!1,selected:i=!1,...d}=r,u=c.useContext(U),p={...r,component:a,hover:l,selected:i,head:u&&u.variant==="head",footer:u&&u.variant==="footer"},h=st(p);return o.jsx(at,{as:a,ref:s,className:M(h.root,n),role:a===G?null:"row",ownerState:p,...d})}),rt=({date:e})=>o.jsxs(T,{display:"flex",alignItems:"center",gap:1,color:"text.secondary",children:[o.jsx(Q,{title:"Release Date",children:o.jsx(ve,{fontSize:"small",sx:{verticalAlign:"middle"}})}),o.jsx(y,{"data-testid":"release-date",variant:"body2",children:re(e).format(ne)})]}),ee=e=>{const t=Math.floor(e/6e4),s=Math.floor(e%6e4/1e3);return{minutes:t,seconds:s}},nt=e=>{const{minutes:t,seconds:s}=ee(e);return`${t}:${s}`},lt=e=>{const t=(e==null?void 0:e.items.reduce((n,a)=>n+a.duration_ms,0))??0,{minutes:s,seconds:r}=ee(t);return`${s} min ${r} sec`},it=({release:e})=>{const{t}=E("releaseInfo"),{tracks:s,name:r}=e;if(!(s!=null&&s.items))return null;const n={color:"text.primary",fontWeight:"medium"};return o.jsx(Qe,{component:le,sx:{bgcolor:"background.paper",color:"text.primary"},"data-testid":"tracks",children:o.jsxs(Ue,{sx:{minWidth:650},children:[o.jsx(tt,{children:o.jsxs(K,{children:[o.jsxs(m,{sx:n,children:[t("tracksList.no")," "]}),o.jsx(m,{sx:n,children:t("tracksList.name")}),o.jsx(m,{sx:n,children:t("tracksList.artists")}),o.jsx(m,{sx:n,children:t("tracksList.album")}),o.jsx(m,{sx:n,children:t("tracksList.duration")})]})}),o.jsx(_e,{children:s.items.map((a,l)=>o.jsxs(K,{sx:{bgcolor:l%2===0?"background.default":"background.paper","&:hover":{bgcolor:"action.hover"}},"data-testid":"tracks-row",children:[o.jsx(m,{children:l+1}),o.jsx(m,{children:o.jsx(X,{href:a.external_urls.spotify,target:"_blank",rel:"noopener noreferrer",underline:"hover","data-testid":"track-name",children:o.jsx(y,{variant:"body2",children:a.name})})}),o.jsx(m,{"data-testid":"track-artists",children:o.jsx(Y,{artists:a.artists,separator:", "})}),o.jsx(m,{"data-testid":"track-album",children:o.jsx(y,{variant:"body2",children:r})}),o.jsx(m,{children:o.jsx(y,{variant:"body2","data-testid":"track-duration",children:nt(a.duration_ms)})})]},a.id))})]})})},ct=()=>o.jsxs(ie,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"48px",height:"48px",children:[o.jsx("path",{fill:"#8bc34a",d:"M24.001,4c-11.077,0-20,8.923-20,20s8.923,20,20,20c11.076,0,20-8.923,20-20S35.077,4,24.001,4z"}),o.jsx("path",{fill:"#fff",d:"M31.747,33.915c-0.292,0-0.585-0.145-0.877-0.292c-2.777-1.607-6.139-2.484-9.792-2.484c-2.047,0-4.093,0.291-5.993,0.73c-0.292,0-0.731,0.146-0.877,0.146c-0.731,0-1.169-0.586-1.169-1.17c0-0.73,0.438-1.17,1.023-1.314c2.338-0.586,4.677-0.877,7.161-0.877c4.093,0,7.893,1.021,11.108,2.924c0.438,0.291,0.731,0.584,0.731,1.314C32.916,33.478,32.331,33.915,31.747,33.915z M33.793,28.945c-0.438,0-0.73-0.144-1.023-0.291c-3.068-1.9-7.308-3.071-12.13-3.071c-2.339,0-4.531,0.293-6.139,0.733c-0.439,0.144-0.585,0.144-0.877,0.144c-0.877,0-1.462-0.73-1.462-1.461c0-0.877,0.439-1.316,1.169-1.607c2.192-0.584,4.385-1.023,7.454-1.023c4.97,0,9.793,1.17,13.593,3.507c0.584,0.291,0.877,0.877,0.877,1.461C35.255,28.215,34.67,28.945,33.793,28.945z M36.132,23.101c-0.438,0-0.585-0.146-1.023-0.291c-3.508-2.047-8.769-3.217-13.885-3.217c-2.631,0-5.262,0.293-7.6,0.877c-0.293,0-0.585,0.146-1.023,0.146c-1.023,0.146-1.754-0.73-1.754-1.754c0-1.023,0.585-1.607,1.315-1.754c2.777-0.877,5.7-1.17,9.062-1.17c5.554,0,11.4,1.17,15.785,3.654c0.584,0.293,1.022,0.877,1.022,1.754C37.886,22.369,37.154,23.101,36.132,23.101z"})]}),dt=c.memo(({release:e})=>{var p;const{t}=E("releaseInfo"),{name:s,images:r,artists:n,tracks:a,release_date:l,external_urls:i}=e,d=((p=r[0])==null?void 0:p.url)??"/placeholder.jpg",u=(a==null?void 0:a.items.length)??0;return o.jsxs(T,{display:"flex",alignItems:"center",flexDirection:{md:"row",xs:"column"},gap:3,mb:4,"data-testid":"release-card",children:[o.jsx(he,{sx:{maxWidth:300,bgcolor:"background.paper"},children:o.jsx(ye,{component:"img",image:d,alt:s,sx:{width:{xs:"100%",md:300},height:"auto",objectFit:"cover"}})}),o.jsxs(T,{pl:3,children:[o.jsxs(T,{sx:{pl:1,gap:1,display:"flex",flexDirection:"column"},children:[o.jsx(y,{variant:"h5",gutterBottom:!0,"data-testid":"release-name",children:s}),o.jsxs(T,{sx:{display:"flex",alignItems:"center",gap:1},children:[o.jsxs(y,{variant:"body2",color:"text.secondary",children:[u," ",t("card.tracks")," •"]}),o.jsx(T,{px:1,py:.5,borderRadius:"30px",bgcolor:"background.paper",display:"inline-block",children:o.jsx(y,{variant:"body2",color:"primary",sx:{fontSize:"10px"},"data-testid":"toatal-duration",children:lt(a)})})]}),o.jsx(Y,{artists:n}),o.jsx(rt,{date:l})]}),o.jsx(Q,{title:"Opens Spotify in a new tab",children:o.jsx(ce,{variant:"contained",color:"primary",startIcon:o.jsx(ct,{}),onClick:()=>window.open(i.spotify,"_blank"),sx:{textTransform:"none",borderRadius:"50px",mt:2},"data-testid":"spotifyButton",children:t("card.spotifyButton")})})]})]})}),pt=(e,t)=>[o.jsxs(X,{component:me,underline:"hover",sx:{display:"flex",alignItems:"center"},color:"inherit",to:"/",children:[o.jsx(Ce,{sx:{mr:.5},fontSize:"inherit"}),t("breadcrumb.home")]}),o.jsx(y,{fontSize:"inherit",color:"primary",children:e},"2")],bt=()=>{const{t:e}=E("releaseInfo"),{id:t}=de(),s=pe(),{release:r,loading:n,error:a}=ue(i=>i.releaseInfo);if(c.useEffect(()=>(s(xe(t)),()=>{s(be())}),[s,t]),n)return o.jsx(ge,{});if(!r||a)return o.jsx(fe,{});const{name:l}=r;return o.jsxs(T,{p:3,sx:{bgcolor:"background.default",color:"text.primary"},children:[o.jsx(Ie,{separator:"›","aria-label":"breadcrumb",sx:{mb:2,fontSize:"14px"},children:pt(l,e)}),o.jsx(dt,{release:r}),o.jsx(it,{release:r})]})};export{bt as default};
