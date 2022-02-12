(self.webpackChunkProject_Management=self.webpackChunkProject_Management||[]).push([[115],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},1115:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return y}});var r=t(1413),i=t(885),o=t(2791),s=t(7621),a=t(8870),l=t(9504),u=t(890),d=t(8550),c=t(9188),f=t(4925),p=t(7078),m=t(3466),v=t(3400),Z=t(7071),h=t(2363),x=t(6151),g=t(3767),w=t(3504),b=t(2570),j=t.n(b),P=t(4569),E=t.n(P),S=t(3746),C=t(165),M=t(184);function y(e){var n=new o.useState({isEmail:!1,isStrongPassword:!1,isAttempted:!1,isValidCred:!0}),t=(0,i.Z)(n,2),b=t[0],P=t[1],y=new o.useState(!1),z=(0,i.Z)(y,2),_=z[0],A=z[1],I=function(e){var n=(0,r.Z)({},b);switch(e.target.name){case"email":n.isEmail=j().isEmail(e.target.value);break;case"password":n.isStrongPassword=j().isStrongPassword(e.target.value)}P((0,r.Z)({},n))};return(0,M.jsx)(s.Z,{className:"formModel",sx:{"& .MuiTextField-root":{align:"left",mx:1,mb:1.5,minWidth:360}},children:(0,M.jsxs)(a.Z,{component:"form",autoComplete:"off",onSubmit:function(e){if(e.preventDefault(),b.isEmail,b.isStrongPassword){var n=e.target,t={email:n.email.value,password:n.password.value};E().post("/user/login",t).then((function(e){window.history.pushState({},"","/"),window.location.reload()})).catch((function(){P((0,r.Z)((0,r.Z)({},b),{},{isValidCred:!1}))}))}else{var i=(0,r.Z)({},b);i.isAttempted=!0,P(i)}},children:[(0,M.jsxs)(l.Z,{children:[(0,M.jsx)(u.Z,{sx:{mx:1,mb:2},gutterBottom:!0,variant:"h5",component:"div",children:"Log in"}),(0,M.jsx)("div",{children:(0,M.jsx)(d.Z,{id:"email",name:"email",size:"small",label:"Email",variant:"standard",helperText:"example@email.com",error:b.isAttempted&&!b.isEmail,onChange:I})}),(0,M.jsxs)(c.Z,{sx:{mx:1,mb:1.5,minWidth:360},variant:"standard",children:[(0,M.jsx)(f.Z,{htmlFor:"password",error:b.isAttempted&&!b.isStrongPassword,children:"Password"}),(0,M.jsx)(p.Z,{type:_?"text":"password",id:"password",name:"password",label:"Password",variant:"standard",error:b.isAttempted&&!b.isStrongPassword,endAdornment:(0,M.jsx)(m.Z,{position:"end",children:(0,M.jsx)(v.Z,{"aria-label":"toggle password visibility",onClick:function(){return A(!_)},onMouseDown:function(e){e.preventDefault()},children:_?(0,M.jsx)(C.Z,{}):(0,M.jsx)(S.Z,{})})}),onChange:I}),(0,M.jsx)(Z.Z,{error:b.isAttempted&&!b.isStrongPassword,children:"min 1 special, upper & lower case & 8 char's."})]})]}),b.isValidCred?"":(0,M.jsx)(Z.Z,{sx:{mx:3},className:"loginError",error:!b.isValidCred,children:"We couldn't find an account with this email address and password"}),(0,M.jsx)(h.Z,{sx:{mx:2},children:(0,M.jsx)(g.Z,{direction:"row",spacing:2,children:(0,M.jsx)(x.Z,{type:"submit",variant:"contained",children:"Log In"})})}),(0,M.jsxs)("div",{className:"otherAction",children:[(0,M.jsx)(w.rU,{to:"/forgotPassword",children:"Forgot Password?"}),"\xa0or\xa0",(0,M.jsx)(w.rU,{to:"/signup",children:"Sign up"})]})]})})}E().defaults.withCredentials=!0},3746:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),o=t(184),s=(0,i.default)((0,o.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");n.Z=s},165:function(e,n,t){"use strict";var r=t(5318);n.Z=void 0;var i=r(t(5649)),o=t(184),s=(0,i.default)((0,o.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");n.Z=s},5649:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4421)},8870:function(e,n,t){"use strict";var r=t(3814),i=t(7125),o=(0,t(6396).Z)(),s=(0,r.Z)({defaultTheme:o,defaultClassName:"MuiBox-root",generateClassName:i.Z.generate});n.Z=s},3466:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var r=t(4942),i=t(3366),o=t(7462),s=t(2791),a=t(8182),l=t(767),u=t(4036),d=t(890),c=t(3840),f=t(2930),p=t(7630),m=t(5159);function v(e){return(0,m.Z)("MuiInputAdornment",e)}var Z=(0,t(208).Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),h=t(3736),x=t(184),g=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["position".concat((0,u.Z)(t.position))],!0===t.disablePointerEvents&&n.disablePointerEvents,n[t.variant]]}})((function(e){var n=e.theme,t=e.ownerState;return(0,o.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:n.palette.action.active},"filled"===t.variant&&(0,r.Z)({},"&.".concat(Z.positionStart,"&:not(.").concat(Z.hiddenLabel,")"),{marginTop:16}),"start"===t.position&&{marginRight:8},"end"===t.position&&{marginLeft:8},!0===t.disablePointerEvents&&{pointerEvents:"none"})})),b=s.forwardRef((function(e,n){var t=(0,h.Z)({props:e,name:"MuiInputAdornment"}),r=t.children,p=t.className,m=t.component,Z=void 0===m?"div":m,b=t.disablePointerEvents,j=void 0!==b&&b,P=t.disableTypography,E=void 0!==P&&P,S=t.position,C=t.variant,M=(0,i.Z)(t,g),y=(0,f.Z)()||{},z=C;C&&y.variant,y&&!z&&(z=y.variant);var _=(0,o.Z)({},t,{hiddenLabel:y.hiddenLabel,size:y.size,disablePointerEvents:j,position:S,variant:z}),A=function(e){var n=e.classes,t=e.disablePointerEvents,r=e.hiddenLabel,i=e.position,o=e.size,s=e.variant,a={root:["root",t&&"disablePointerEvents",i&&"position".concat((0,u.Z)(i)),s,r&&"hiddenLabel",o&&"size".concat((0,u.Z)(o))]};return(0,l.Z)(a,v,n)}(_);return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(w,(0,o.Z)({as:Z,ownerState:_,className:(0,a.Z)(A.root,p),ref:n},M,{children:"string"!==typeof r||E?(0,x.jsxs)(s.Fragment,{children:["start"===S?(0,x.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,r]}):(0,x.jsx)(d.Z,{color:"text.secondary",children:r})}))})}))},4421:function(e,n,t){"use strict";t.r(n),t.d(n,{capitalize:function(){return r.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return o.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return a},isMuiElement:function(){return l.Z},ownerDocument:function(){return u.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return c},setRef:function(){return f},unstable_ClassNameGenerator:function(){return w.Z},unstable_useEnhancedEffect:function(){return p.Z},unstable_useId:function(){return m.Z},unsupportedProp:function(){return v},useControlled:function(){return Z.Z},useEventCallback:function(){return h.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return g.Z}});var r=t(4036),i=t(8949).Z,o=t(4223),s=t(3199);var a=function(e,n){return function(){return null}},l=t(9103),u=t(8301),d=t(7602);t(7462);var c=function(e,n){return function(){return null}},f=t(2971).Z,p=t(162),m=t(7384);var v=function(e,n,t,r,i){return null},Z=t(8744),h=t(9683),x=t(2071),g=t(3031),w=t(7125)},7384:function(e,n,t){"use strict";var r=t(6248);n.Z=r.Z}}]);
//# sourceMappingURL=115.81b99630.chunk.js.map