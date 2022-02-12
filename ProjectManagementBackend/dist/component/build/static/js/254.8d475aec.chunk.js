"use strict";(self.webpackChunkProject_Management=self.webpackChunkProject_Management||[]).push([[254],{6254:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});var t=a(1413),r=a(885),i=a(2791),n=a(7621),o=a(8870),l=a(9504),d=a(890),m=a(1889),u=a(8550),c=a(9188),h=a(4925),x=a(7078),p=a(3466),w=a(3400),Z=a(7071),g=a(2363),f=a(3767),v=a(6151),j=a(3504),P=a(2570),b=a.n(P),C=a(4569),S=a.n(C),M=a(3915),E=a(8156),A=a(9783),D=a(2426),k=a.n(D),F=a(3746),N=a(165),U=a(184);function q(e){var s=new i.useState({isUserName:!1,isDob:!1,isEmail:!1,isStrongPassword:!1,isAttempted:!1,isConfirmPassMatch:!1,isEmailExist:!1}),a=(0,r.Z)(s,2),P=a[0],C=a[1],D=new i.useState({username:"Must have min 3 character.",email:"example@email.com",password:"Min 1 special, upper & lower case & 8 char's.",confPass:"Entered password do not match."}),q=(0,r.Z)(D,2),T=q[0],y=q[1],z=new i.useState(null),Y=(0,r.Z)(z,2),W=Y[0],I=Y[1],L=new i.useState(k()((new Date).setFullYear((new Date).getFullYear()-18))),_=(0,r.Z)(L,2),B=_[0],G=_[1],H=new i.useState(null),J=(0,r.Z)(H,2),K=J[0],O=J[1],Q=new i.useState(null),R=(0,r.Z)(Q,2),V=R[0],X=R[1],$=new i.useState(!1),ee=(0,r.Z)($,2),se=ee[0],ae=ee[1],te=function(e){var s=(0,t.Z)({},P);switch(e.target.name){case"username":s.isUserName=b().isLength(e.target.value,{min:3});break;case"dob":s.isDob=!!e.target.value;break;case"email":s.isEmail=b().isEmail(e.target.value);break;case"password":s.isStrongPassword=b().isStrongPassword(e.target.value),s.isConfirmPassMatch=s.isStrongPassword&&V===e.target.value,O(e.target.value);break;case"confirmPass":s.isConfirmPassMatch=s.isStrongPassword&&e.target.value===K,X(e.target.value)}C((0,t.Z)({},s))};return(0,U.jsx)(n.Z,{className:"formModel",sx:{"& .MuiTextField-root":{align:"left",mx:1,mb:1.5,minWidth:360}},children:(0,U.jsxs)(o.Z,{component:"form",autoComplete:"off",onSubmit:function(e){e.preventDefault();var s=e.target;if(P.isUserName&&P.isEmail&&P.isStrongPassword&&P.isConfirmPassMatch&&B){var a={username:s.username.value,dob:k()(B),email:s.email.value,password:s.password.value};S().post("/user/signup",a).then((function(e){e.data.isCreated?W.click():(y((0,t.Z)((0,t.Z)({},T),{},{email:e.data.msg})),C((0,t.Z)((0,t.Z)({},P),{},{isEmailExist:!0,isAttempted:!0})))}))}else{var r=(0,t.Z)({},P);r.isAttempted=!0,C(r)}},children:[(0,U.jsxs)(l.Z,{children:[(0,U.jsx)(d.Z,{sx:{mx:1,mb:2},gutterBottom:!0,variant:"h5",component:"div",children:"Create new account"}),(0,U.jsxs)(m.ZP,{container:!0,sx:{"& .MuiTextField-root":{minWidth:100}},children:[(0,U.jsx)(m.ZP,{item:!0,xs:6,children:(0,U.jsx)(u.Z,{id:"username",name:"username",size:"small",label:"User Name",variant:"standard",helperText:T.username,error:P.isAttempted&&!P.isUserName,onChange:te,required:!0})}),(0,U.jsx)(m.ZP,{item:!0,xs:6,children:(0,U.jsx)(M.Z,{dateAdapter:A.Z,children:(0,U.jsx)(E.Z,{id:"dob",name:"dob",label:"Date of birth",value:B,maxDate:k()((new Date).setFullYear((new Date).getFullYear()-18)),onChange:function(e){G(e)},renderInput:function(e){return(0,U.jsx)(u.Z,(0,t.Z)({size:"small",variant:"standard"},e))},required:!0})})})]}),(0,U.jsx)("div",{children:(0,U.jsx)(u.Z,{id:"email",name:"email",size:"small",label:"Email",variant:"standard",helperText:T.email,error:P.isAttempted&&(!P.isEmail||P.isEmailExist),onChange:te,required:!0})}),(0,U.jsxs)(c.Z,{sx:{mx:1,mb:1.5,minWidth:360},variant:"standard",children:[(0,U.jsx)(h.Z,{htmlFor:"password",error:P.isAttempted&&!P.isStrongPassword,children:"Password"}),(0,U.jsx)(x.Z,{type:se?"text":"password",id:"password",name:"password",label:"Password",variant:"standard",error:P.isAttempted&&!P.isStrongPassword,endAdornment:(0,U.jsx)(p.Z,{position:"end",children:(0,U.jsx)(w.Z,{"aria-label":"toggle password visibility",onClick:function(){return ae(!se)},onMouseDown:function(e){e.preventDefault()},children:se?(0,U.jsx)(N.Z,{}):(0,U.jsx)(F.Z,{})})}),onChange:te,required:!0}),(0,U.jsx)(Z.Z,{error:P.isAttempted&&!P.isStrongPassword,children:T.password})]}),(0,U.jsx)("div",{children:(0,U.jsx)(u.Z,{type:"password",id:"confirmPass",name:"confirmPass",label:"Confirm Password",size:"small",variant:"standard",helperText:P.isAttempted&&!P.isConfirmPassMatch?T.confPass:"",error:P.isAttempted&&!P.isConfirmPassMatch,onChange:te,required:!0})})]}),(0,U.jsx)(g.Z,{sx:{mx:2,mb:2},children:(0,U.jsxs)(f.Z,{direction:"row",spacing:2,children:[(0,U.jsx)(v.Z,{type:"submit",variant:"contained",children:"Sign up"}),(0,U.jsx)(j.rU,{to:"/login",ref:function(e){return I(e)},children:(0,U.jsx)(v.Z,{variant:"text",children:"Log In"})})]})})]})})}S().defaults.withCredentials=!0}}]);
//# sourceMappingURL=254.8d475aec.chunk.js.map