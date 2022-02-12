"use strict";(self.webpackChunkProject_Management=self.webpackChunkProject_Management||[]).push([[890,756],{8756:function(e,s,n){n.r(s),n.d(s,{default:function(){return w}});var t=n(1413),i=n(885),a=n(1918),r=n(3400),l=n(5021),c=n(6575),o=n(7064),d=n(9900),x=n(6809),h=n(4058),u=n(1286),j=n(346),m=n(1889),k=n(9955),Z=n(890),f=n(792),p=n(8870),T=n(2426),g=n.n(T),P=n(2791),v=n(4569),C=n.n(v),N=(n(5314),n(184)),b=P.lazy((function(){return Promise.all([n.e(534),n.e(965),n.e(266),n.e(950),n.e(443),n.e(805),n.e(817)]).then(n.bind(n,1817))}));function w(e){var s=P.useState(e.userInfo?e.userInfo:null),n=(0,i.Z)(s,1)[0],T=P.useState("allTask"),v=(0,i.Z)(T,2),w=v[0],D=v[1],S=P.useState(!0),y=(0,i.Z)(S,2),L=y[0],M=y[1],Y=P.useState(!1),A=(0,i.Z)(Y,2),_=A[0],E=A[1],z=P.useState([]),B=(0,i.Z)(z,2),I=B[0],W=B[1],R=P.useState(!1),F=(0,i.Z)(R,2),H=F[0],O=F[1],q=P.useState(e.project?e.project:null),G=(0,i.Z)(q,1)[0],J=P.useState(!1),K=(0,i.Z)(J,2),Q=K[0],U=K[1],V=P.useState(""),X=(0,i.Z)(V,2),$=X[0],ee=X[1],se=function(){return O(!1)},ne=function(e,s){ee(s||""),U(e),O(!0)},te=function(e){D(e)};P.useEffect((function(){e.setDataToHome(ne)}),[]),P.useEffect((function(){var e="";"allTask"===w?(e=G?"/task/getAllTask/"+G.id:"/task/getAllTask/null",C().get(e).then((function(e){W(e.data)}))):w&&(e=G?"/task/getTaskListByCategory/"+w+"/"+G.id:"/task/getTaskListByCategory/"+w+"/null",C().get(e).then((function(e){W(e.data)})))}),[w,L]);return(0,N.jsxs)(m.ZP,{className:"todoList",item:!0,xs:12,children:[(0,N.jsxs)(m.ZP,{className:"taskCategory",item:!0,container:!0,xs:12,children:[(0,N.jsx)(m.ZP,{className:"allTask"===w||"isPersonal"===w?"activeTaskList":"",onClick:function(){return te(_?"isPersonal":"allTask")},item:!0,xs:2,children:G?(0,N.jsx)("h2",{children:"All task"}):(0,N.jsxs)("h2",{children:[_?"Personal":"All task"," ",(0,N.jsx)(k.Z,{checked:!_,onClick:function(e){e.preventDefault(),e.stopPropagation(),_?_&&D("allTask"):D("isPersonal"),E(!_)},size:"small"})]})}),(0,N.jsx)(m.ZP,{className:"todo"===w?"activeTaskList":"",onClick:function(){return te("todo")},item:!0,xs:2,children:(0,N.jsx)("h2",{children:"ToDo"})}),(0,N.jsx)(m.ZP,{className:"inprogress"===w?"activeTaskList":"",onClick:function(){return te("inprogress")},item:!0,xs:2,children:(0,N.jsx)("h2",{children:"In Progress"})}),(0,N.jsx)(m.ZP,{className:"review"===w?"activeTaskList":"",onClick:function(){return te("review")},item:!0,xs:2,children:(0,N.jsx)("h2",{children:"Review"})}),(0,N.jsx)(m.ZP,{className:"completed"===w?"activeTaskList":"",onClick:function(){return te("completed")},item:!0,xs:2,children:(0,N.jsx)("h2",{children:"Completed"})}),(0,N.jsx)(m.ZP,{className:"pending"===w?"activeTaskList":"",onClick:function(){return te("pending")},item:!0,xs:2,children:(0,N.jsx)("h2",{children:"Pending"})})]}),(0,N.jsx)(m.ZP,{className:"taskList",item:!0,xs:12,children:I.length?I.map((function(e){return(0,N.jsx)(l.ZP,{secondaryAction:(0,N.jsxs)("div",{children:[(0,N.jsx)(x.Z,{title:"Next Transission",placement:"top",children:(0,N.jsx)("span",{children:(0,N.jsx)(r.Z,{sx:{mr:"-5px"},edge:"end",onClick:function(){return s=e._id,void(window.confirm("Do you realy want to change transission of this task?")&&C().put("/task/nextTransission/"+s).then((function(){M(!L)})));var s},disabled:"completed"===e.transission,label:"changeTransission","aria-label":"Transission",children:(0,N.jsx)(h.Z,{})})})}),(0,N.jsx)(x.Z,{title:"Delete Task",placement:"top",children:(0,N.jsx)("span",{children:(0,N.jsx)(r.Z,{sx:{mr:1},edge:"end",onClick:function(){return s=e._id,void(window.confirm("Do you realy want to delete this task?")&&C().delete("/task/deleteTask/"+s).then((function(){M(!L)})));var s},disabled:!(e.isPersonal||n&&("admin"===n.role||"manager"===n.role)),label:"changeTransission","aria-label":"Transission",children:(0,N.jsx)(j.Z,{})})})})]}),children:(0,N.jsx)(x.Z,{title:"Edit Task",placement:"top",children:(0,N.jsxs)(c.Z,{className:"itemButton",onClick:function(){return ne(!0,e._id)},sx:{pl:1,mr:"0"},children:[(0,N.jsx)(o.Z,{sx:{minWidth:"40px"},children:(0,N.jsx)(u.Z,{})}),(0,N.jsx)(d.Z,{children:(0,N.jsxs)(m.ZP,{container:!0,spacing:1,children:[(0,N.jsx)(m.ZP,{item:!0,xs:2,children:(0,N.jsx)(Z.Z,{variant:"inherit",noWrap:!0,children:e.title})}),(0,N.jsx)(m.ZP,{item:!0,xs:4,children:e.project?(0,N.jsxs)(Z.Z,{variant:"inherit",noWrap:!0,children:[(0,N.jsx)("b",{children:"Project: "}),e.project.title]}):(0,N.jsx)(Z.Z,{variant:"inherit",children:(0,N.jsx)("b",{children:"Own task"})})}),(0,N.jsxs)(m.ZP,{className:"taskDate",item:!0,xs:3,children:[(0,N.jsx)("b",{children:"Start:"})," ",g()(e.startDate).format("MMM-DD-YYYY")," ",(0,N.jsx)("b",{children:"End:"})," ",g()(e.endDate).format("MMM-DD-YYYY")]}),(0,N.jsxs)(m.ZP,{sx:{textAlign:"right"},item:!0,xs:3,children:[g()(e.endDate).isBefore(g()(),"date")?(0,N.jsx)(d.Z,{className:"taskState",children:(0,N.jsx)(a.Z,{sx:{textTransform:"uppercase"},className:"pending",label:"Pending",size:"small"})}):"",(0,N.jsx)(d.Z,{className:"taskState",children:(0,N.jsx)(a.Z,{sx:{textTransform:"uppercase"},className:e.transission,label:e.transission,size:"small"})})]})]})})]})})},e._id)})):(0,N.jsx)(m.ZP,{className:"noFound",item:!0,xs:12,children:"There is no task for now, please create new task."})}),(0,N.jsx)(f.Z,{open:H,onClose:se,children:(0,N.jsx)(p.Z,{children:(0,N.jsx)(b,(0,t.Z)({isEditTask:Q,editTaskPageInfo:$,reRenderTask:D,handleClose:se,project:G},e))})})]})}},5314:function(){}}]);
//# sourceMappingURL=890.95f44ec2.chunk.js.map