"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[973],{48966:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});t(72791);var o=t(18162),r=t(57621),n=t(39504),i=t(42169),s=t(20890),l=t(66647),c=t(72363),p=t(94294),d=t(11087),u=t(80184);const v=e=>{let{name:a,description:t,navigationURL:o}=e;return(0,u.jsxs)(r.Z,{sx:{maxWidth:345},children:[(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{component:"img",height:"140",image:"https://source.unsplash.com/random?wallpapers",alt:"green iguana"}),(0,u.jsxs)(n.Z,{children:[(0,u.jsx)(s.Z,{gutterBottom:!0,variant:"h5",component:"div",children:a}),(0,u.jsx)(s.Z,{variant:"body2",color:"text.secondary",children:t})]})]}),(0,u.jsx)(c.Z,{children:(0,u.jsx)(p.Z,{size:"small",color:"primary",children:(0,u.jsx)(d.rU,{to:o,children:"Check"})})})]})},m=()=>(0,u.jsx)("div",{className:"home-cards flex flex-wrap",children:o.Z.map((e=>(0,u.jsx)(v,{name:e.name,navigationURL:e.path,description:e.description},e.path)))})},66647:(e,a,t)=>{t.d(a,{Z:()=>b});var o=t(87462),r=t(63366),n=t(72791),i=t(63733),s=t(94419),l=t(31402),c=t(66934),p=t(75878),d=t(21217);function u(e){return(0,d.Z)("MuiCardActionArea",e)}const v=(0,p.Z)("MuiCardActionArea",["root","focusVisible","focusHighlight"]);var m=t(23701),g=t(80184);const h=["children","className","focusVisibleClassName"],Z=(0,c.ZP)(m.Z,{name:"MuiCardActionArea",slot:"Root",overridesResolver:(e,a)=>a.root})((e=>{let{theme:a}=e;return{display:"block",textAlign:"inherit",borderRadius:"inherit",width:"100%",["&:hover .".concat(v.focusHighlight)]:{opacity:(a.vars||a).palette.action.hoverOpacity,"@media (hover: none)":{opacity:0}},["&.".concat(v.focusVisible," .").concat(v.focusHighlight)]:{opacity:(a.vars||a).palette.action.focusOpacity}}})),f=(0,c.ZP)("span",{name:"MuiCardActionArea",slot:"FocusHighlight",overridesResolver:(e,a)=>a.focusHighlight})((e=>{let{theme:a}=e;return{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:a.transitions.create("opacity",{duration:a.transitions.duration.short})}})),b=n.forwardRef((function(e,a){const t=(0,l.Z)({props:e,name:"MuiCardActionArea"}),{children:n,className:c,focusVisibleClassName:p}=t,d=(0,r.Z)(t,h),v=t,m=(e=>{const{classes:a}=e;return(0,s.Z)({root:["root"],focusHighlight:["focusHighlight"]},u,a)})(v);return(0,g.jsxs)(Z,(0,o.Z)({className:(0,i.Z)(m.root,c),focusVisibleClassName:(0,i.Z)(p,m.focusVisible),ref:a,ownerState:v},d,{children:[n,(0,g.jsx)(f,{className:m.focusHighlight,ownerState:v})]}))}))},72363:(e,a,t)=>{t.d(a,{Z:()=>h});var o=t(63366),r=t(87462),n=t(72791),i=t(63733),s=t(94419),l=t(66934),c=t(31402),p=t(75878),d=t(21217);function u(e){return(0,d.Z)("MuiCardActions",e)}(0,p.Z)("MuiCardActions",["root","spacing"]);var v=t(80184);const m=["disableSpacing","className"],g=(0,l.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,!t.disableSpacing&&a.spacing]}})((e=>{let{ownerState:a}=e;return(0,r.Z)({display:"flex",alignItems:"center",padding:8},!a.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),h=n.forwardRef((function(e,a){const t=(0,c.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:n=!1,className:l}=t,p=(0,o.Z)(t,m),d=(0,r.Z)({},t,{disableSpacing:n}),h=(e=>{const{classes:a,disableSpacing:t}=e,o={root:["root",!t&&"spacing"]};return(0,s.Z)(o,u,a)})(d);return(0,v.jsx)(g,(0,r.Z)({className:(0,i.Z)(h.root,l),ownerState:d,ref:a},p))}))},42169:(e,a,t)=>{t.d(a,{Z:()=>f});var o=t(63366),r=t(87462),n=t(72791),i=t(63733),s=t(94419),l=t(31402),c=t(66934),p=t(75878),d=t(21217);function u(e){return(0,d.Z)("MuiCardMedia",e)}(0,p.Z)("MuiCardMedia",["root","media","img"]);var v=t(80184);const m=["children","className","component","image","src","style"],g=(0,c.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e,{isMediaComponent:o,isImageComponent:r}=t;return[a.root,o&&a.media,r&&a.img]}})((e=>{let{ownerState:a}=e;return(0,r.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},a.isMediaComponent&&{width:"100%"},a.isImageComponent&&{objectFit:"cover"})})),h=["video","audio","picture","iframe","img"],Z=["picture","img"],f=n.forwardRef((function(e,a){const t=(0,l.Z)({props:e,name:"MuiCardMedia"}),{children:n,className:c,component:p="div",image:d,src:f,style:b}=t,y=(0,o.Z)(t,m),x=-1!==h.indexOf(p),w=!x&&d?(0,r.Z)({backgroundImage:'url("'.concat(d,'")')},b):b,M=(0,r.Z)({},t,{component:p,isMediaComponent:x,isImageComponent:-1!==Z.indexOf(p)}),C=(e=>{const{classes:a,isMediaComponent:t,isImageComponent:o}=e,r={root:["root",t&&"media",o&&"img"]};return(0,s.Z)(r,u,a)})(M);return(0,v.jsx)(g,(0,r.Z)({className:(0,i.Z)(C.root,c),as:p,role:!x&&d?"img":void 0,ref:a,style:w,ownerState:M,src:x?d||f:void 0},y,{children:n}))}))},35527:(e,a,t)=>{t.d(a,{Z:()=>f});var o=t(63366),r=t(87462),n=t(72791),i=t(63733),s=t(94419),l=t(12065),c=t(66934);const p=e=>{let a;return a=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(a/100).toFixed(2)};var d=t(31402),u=t(75878),v=t(21217);function m(e){return(0,v.Z)("MuiPaper",e)}(0,u.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=t(80184);const h=["className","component","elevation","square","variant"],Z=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,a[t.variant],!t.square&&a.rounded,"elevation"===t.variant&&a["elevation".concat(t.elevation)]]}})((e=>{let{theme:a,ownerState:t}=e;var o;return(0,r.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!t.square&&{borderRadius:a.shape.borderRadius},"outlined"===t.variant&&{border:"1px solid ".concat((a.vars||a).palette.divider)},"elevation"===t.variant&&(0,r.Z)({boxShadow:(a.vars||a).shadows[t.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",p(t.elevation)),", ").concat((0,l.Fq)("#fff",p(t.elevation)),")")},a.vars&&{backgroundImage:null==(o=a.vars.overlays)?void 0:o[t.elevation]}))})),f=n.forwardRef((function(e,a){const t=(0,d.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:c=1,square:p=!1,variant:u="elevation"}=t,v=(0,o.Z)(t,h),f=(0,r.Z)({},t,{component:l,elevation:c,square:p,variant:u}),b=(e=>{const{square:a,elevation:t,variant:o,classes:r}=e,n={root:["root",o,!a&&"rounded","elevation"===o&&"elevation".concat(t)]};return(0,s.Z)(n,m,r)})(f);return(0,g.jsx)(Z,(0,r.Z)({as:l,ownerState:f,className:(0,i.Z)(b.root,n),ref:a},v))}))},20890:(e,a,t)=>{t.d(a,{Z:()=>y});var o=t(63366),r=t(87462),n=t(72791),i=t(63733),s=t(78519),l=t(94419),c=t(66934),p=t(31402),d=t(14036),u=t(75878),v=t(21217);function m(e){return(0,v.Z)("MuiTypography",e)}(0,u.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=t(80184);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:t}=e;return[a.root,t.variant&&a[t.variant],"inherit"!==t.align&&a["align".concat((0,d.Z)(t.align))],t.noWrap&&a.noWrap,t.gutterBottom&&a.gutterBottom,t.paragraph&&a.paragraph]}})((e=>{let{theme:a,ownerState:t}=e;return(0,r.Z)({margin:0},"inherit"===t.variant&&{font:"inherit"},"inherit"!==t.variant&&a.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=n.forwardRef((function(e,a){const t=(0,p.Z)({props:e,name:"MuiTypography"}),n=(e=>b[e]||e)(t.color),c=(0,s.Z)((0,r.Z)({},t,{color:n})),{align:u="inherit",className:v,component:y,gutterBottom:x=!1,noWrap:w=!1,paragraph:M=!1,variant:C="body1",variantMapping:R=f}=c,S=(0,o.Z)(c,h),N=(0,r.Z)({},c,{align:u,color:n,className:v,component:y,gutterBottom:x,noWrap:w,paragraph:M,variant:C,variantMapping:R}),j=y||(M?"p":R[C]||f[C])||"span",k=(e=>{const{align:a,gutterBottom:t,noWrap:o,paragraph:r,variant:n,classes:i}=e,s={root:["root",n,"inherit"!==e.align&&"align".concat((0,d.Z)(a)),t&&"gutterBottom",o&&"noWrap",r&&"paragraph"]};return(0,l.Z)(s,m,i)})(N);return(0,g.jsx)(Z,(0,r.Z)({as:j,ref:a,ownerState:N,className:(0,i.Z)(k.root,v)},S))}))}}]);
//# sourceMappingURL=973.9b327201.chunk.js.map