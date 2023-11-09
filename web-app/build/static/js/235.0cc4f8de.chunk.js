"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[235],{46697:(e,r,n)=>{n.r(r),n.d(r,{default:()=>v});n(72791);var t=n(93044),o=n(94294),a=n(4708),i=n(2927),s=n(85523),l=n(79174),c=n(50533),p=n(35527),u=n(64554),m=n(61889),d=n(30403),h=n(20890),g=n(62373),x=n(44507),Z=n(80184);function y(e){return(0,Z.jsxs)(h.Z,{variant:"body2",color:"text.secondary",align:"center",...e,children:["Copyright \xa9 ",(0,Z.jsx)(c.Z,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}const b=(0,g.Z)();function v(){return(0,Z.jsx)(x.Z,{theme:b,children:(0,Z.jsxs)(m.ZP,{container:!0,component:"main",sx:{height:"100vh"},children:[(0,Z.jsx)(a.ZP,{}),(0,Z.jsx)(m.ZP,{item:!0,xs:!1,sm:4,md:7,sx:{backgroundImage:"url(https://source.unsplash.com/random?wallpapers)",backgroundRepeat:"no-repeat",backgroundColor:e=>"light"===e.palette.mode?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"}}),(0,Z.jsx)(m.ZP,{item:!0,xs:12,sm:8,md:5,component:p.Z,elevation:6,square:!0,children:(0,Z.jsxs)(u.Z,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,Z.jsx)(t.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,Z.jsx)(d.Z,{})}),(0,Z.jsx)(h.Z,{component:"h1",variant:"h5",children:"Sign in"}),(0,Z.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:e=>{e.preventDefault();const r=new FormData(e.currentTarget);console.log({email:r.get("email"),password:r.get("password")})},sx:{mt:1},children:[(0,Z.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),(0,Z.jsx)(i.Z,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),(0,Z.jsx)(s.Z,{control:(0,Z.jsx)(l.Z,{value:"remember",color:"primary"}),label:"Remember me"}),(0,Z.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),(0,Z.jsxs)(m.ZP,{container:!0,children:[(0,Z.jsx)(m.ZP,{item:!0,xs:!0,children:(0,Z.jsx)(c.Z,{href:"#",variant:"body2",children:"Forgot password?"})}),(0,Z.jsx)(m.ZP,{item:!0,children:(0,Z.jsx)(c.Z,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]}),(0,Z.jsx)(y,{sx:{mt:5}})]})]})})]})})}},50533:(e,r,n)=>{n.d(r,{Z:()=>k});var t=n(63366),o=n(87462),a=n(72791),i=n(63733),s=n(94419),l=n(14036),c=n(66934),p=n(31402),u=n(23031),m=n(42071),d=n(20890),h=n(75878),g=n(21217);function x(e){return(0,g.Z)("MuiLink",e)}const Z=(0,h.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var y=n(18529),b=n(12065);const v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},f=e=>{let{theme:r,ownerState:n}=e;const t=(e=>v[e]||e)(n.color),o=(0,y.DW)(r,"palette.".concat(t),!1)||n.color,a=(0,y.DW)(r,"palette.".concat(t,"Channel"));return"vars"in r&&a?"rgba(".concat(a," / 0.4)"):(0,b.Fq)(o,.4)};var w=n(80184);const j=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],S=(0,c.ZP)(d.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,r["underline".concat((0,l.Z)(n.underline))],"button"===n.component&&r.button]}})((e=>{let{theme:r,ownerState:n}=e;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==n.color&&{textDecorationColor:f({theme:r,ownerState:n})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(Z.focusVisible)]:{outline:"auto"}})})),k=a.forwardRef((function(e,r){const n=(0,p.Z)({props:e,name:"MuiLink"}),{className:c,color:d="primary",component:h="a",onBlur:g,onFocus:Z,TypographyClasses:y,underline:b="always",variant:f="inherit",sx:k}=n,W=(0,t.Z)(n,j),{isFocusVisibleRef:B,onBlur:C,onFocus:P,ref:D}=(0,u.Z)(),[M,R]=a.useState(!1),F=(0,m.Z)(r,D),A=(0,o.Z)({},n,{color:d,component:h,focusVisible:M,underline:b,variant:f}),N=(e=>{const{classes:r,component:n,focusVisible:t,underline:o}=e,a={root:["root","underline".concat((0,l.Z)(o)),"button"===n&&"button",t&&"focusVisible"]};return(0,s.Z)(a,x,r)})(A);return(0,w.jsx)(S,(0,o.Z)({color:d,className:(0,i.Z)(N.root,c),classes:y,component:h,onBlur:e=>{C(e),!1===B.current&&R(!1),g&&g(e)},onFocus:e=>{P(e),!0===B.current&&R(!0),Z&&Z(e)},ref:F,ownerState:A,variant:f,sx:[...Object.keys(v).includes(d)?[]:[{color:d}],...Array.isArray(k)?k:[k]]},W))}))},20890:(e,r,n)=>{n.d(r,{Z:()=>v});var t=n(63366),o=n(87462),a=n(72791),i=n(63733),s=n(78519),l=n(94419),c=n(66934),p=n(31402),u=n(14036),m=n(75878),d=n(21217);function h(e){return(0,d.Z)("MuiTypography",e)}(0,m.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=n(80184);const x=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],Z=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:n}=e;return[r.root,n.variant&&r[n.variant],"inherit"!==n.align&&r["align".concat((0,u.Z)(n.align))],n.noWrap&&r.noWrap,n.gutterBottom&&r.gutterBottom,n.paragraph&&r.paragraph]}})((e=>{let{theme:r,ownerState:n}=e;return(0,o.Z)({margin:0},"inherit"===n.variant&&{font:"inherit"},"inherit"!==n.variant&&r.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},v=a.forwardRef((function(e,r){const n=(0,p.Z)({props:e,name:"MuiTypography"}),a=(e=>b[e]||e)(n.color),c=(0,s.Z)((0,o.Z)({},n,{color:a})),{align:m="inherit",className:d,component:v,gutterBottom:f=!1,noWrap:w=!1,paragraph:j=!1,variant:S="body1",variantMapping:k=y}=c,W=(0,t.Z)(c,x),B=(0,o.Z)({},c,{align:m,color:a,className:d,component:v,gutterBottom:f,noWrap:w,paragraph:j,variant:S,variantMapping:k}),C=v||(j?"p":k[S]||y[S])||"span",P=(e=>{const{align:r,gutterBottom:n,noWrap:t,paragraph:o,variant:a,classes:i}=e,s={root:["root",a,"inherit"!==e.align&&"align".concat((0,u.Z)(r)),n&&"gutterBottom",t&&"noWrap",o&&"paragraph"]};return(0,l.Z)(s,h,i)})(B);return(0,g.jsx)(Z,(0,o.Z)({as:C,ref:r,ownerState:B,className:(0,i.Z)(P.root,d)},W))}))},93457:(e,r,n)=>{n.d(r,{Z:()=>t});const t=(0,n(44046).ZP)()}}]);
//# sourceMappingURL=235.0cc4f8de.chunk.js.map