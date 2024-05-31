/*! For license information please see 8128.6fe1de9a.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["8128"],{5164:function(e,l,n){"use strict";n.r(l);var a=n("58865");n("33948"),n("31672"),n("59461"),n("2490"),n("57640"),n("9924");var t=n("85893"),d=n("67294"),i=n("71893"),o=n("50533"),u=n("16356"),s=n("16393"),r=n("89583"),c=n("94718"),f=n("86893"),m=n("63750"),p=n("27233"),v=n("97367"),h=n("55693"),g=n("79352"),x=n("52861"),j=n("42154"),b=n("32392"),y=n("44025"),C=n("61261"),E=n("90650"),S=n("72132"),k=n("75912"),w=n("98888"),G=n("57024"),L=n("7104");function I(){let e=(0,a._)(["\n    padding-top: 10px;\n    display: grid;\n    overflow-y: scroll;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 30px;\n    ","\n"]);return I=function(){return e},e}function A(){let e=(0,a._)(["\n    width: 30px;\n    height: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    border-radius: 50%;\n    color: white;\n    font-size: 26px;\n    border: none;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n"]);return A=function(){return e},e}function N(){let e=(0,a._)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    margin: 5px !important;\n"]);return N=function(){return e},e}function R(){let e=(0,a._)(["\n    width: 30px;\n    height: 30px;\n    background-color: #fff;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid red;\n    border-radius: 0.5rem;\n    color: red;\n    padding: 5px !important;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n\n"]);return R=function(){return e},e}function B(){let e=(0,a._)(["\n    width: 30px;\n    height: 30px;\n    background-color: #fff;\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid ",";\n    border-radius: 0.5rem;\n    color: ",";\n    padding: 5px !important;\n\n    &:hover {\n        transform: scale(1.1);\n    }\n\n"]);return B=function(){return e},e}function H(){let e=(0,a._)(["\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    font-size: 30px;\n    font-weight: bold;\n    color: ",";\n\n"]);return H=function(){return e},e}function T(){let e=(0,a._)(["\n    display: flex;\n    gap: 20px;\n    flex-direction: column;\n    height: 100%;\n    min-height: 500px;\n    border-radius: 10px;\n    padding: 1rem;\n\n    .MuiDataGrid-columnHeaderTitleContainer {\n        justify-content: center;\n    }\n"]);return T=function(){return e},e}let U=i.default.div(I(),(0,G.extrasmall)({gridTemplateColumns:"1fr",gap:"15px"})),_=(0,i.default)(E.motion.button)(A(),s.mainColor),F={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"576px",display:"flex",flexDirection:"column",gap:"20px",bgcolor:"background.paper",boxShadow:24,borderRadius:3,p:4," @media only screen and  (max-width: 576px)":{width:"95vw !important",height:"95vh !important"}},W=i.default.div(N()),D=i.default.button(R()),O=i.default.button(B(),s.mainColor,s.mainColor),z=i.default.div(H(),s.mainColor),M=i.default.div(T());l.default=()=>{let e=(0,o.useSelector)(e=>{var l;return null==e?void 0:null===(l=e.dekanGroups)||void 0===l?void 0:l.dekanGroups}),l=(0,o.useSelector)(e=>{var l;return null==e?void 0:null===(l=e.dekanGroups)||void 0===l?void 0:l.dekanGroupsLoadingStatus}),[n,a]=(0,d.useState)([]),[i,E]=(0,d.useState)([]),[G,I]=(0,d.useState)(!1),[A,N]=(0,d.useState)(!1),[R,B]=(0,d.useState)({id:"",name:"",language:"",type:"",form:"",faculty:""}),H=e=>{B(l=>({...l,[e.target.name]:e.target.value}))},{headers:T}=(0,s.getHeaders)(),K=l=>{p.default.get(s.BASE_URL+"/dekan/getFacultiesShortnamesWithDekanId",{headers:T}).then(e=>{var l,n;a(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.shortNames),E(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.educationTypes)}).catch(e=>{}),B(n=>({...n,id:l,name:e.find(e=>e.id===l).name,level:e.find(e=>e.id===l).level,type:e.find(e=>e.id===l).type,language:e.find(e=>e.id===l).language,form:e.find(e=>e.id===l).form,faculty:e.find(e=>e.id===l).faculty})),I(!0)},Z=()=>{I(!1),N(!1)},P=()=>{p.default.get(s.BASE_URL+"/dekan/getFacultiesShortnamesWithDekanId",{headers:T}).then(e=>{var l,n;a(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.shortNames),E(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.educationTypes)}).catch(e=>{}),B(e=>({...e,name:"",level:"",type:"",language:"",form:"",faculty:""})),N(!0)},V=(e,l)=>{p.default.get(s.BASE_URL+"/group/changeActiveOfGroup/".concat(e),{headers:T}).then(e=>{var l;S.toast.error(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.message,{position:"top-right",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}),J((0,k.fetchDekanGroups)(Q))}).catch(e=>{var l,n;S.toast.error(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.message,{position:"top-right",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})})},q=[{field:"count",headerName:"\u2116",width:40,align:"center",justifyContent:"center",editable:!1},{field:"name",headerName:"Name",type:"string",width:150,align:"center",justifyContent:"center",editable:!1},{field:"level",headerName:"Level",type:"number",width:100,align:"center",justifyContent:"center",editable:!1},{field:"language",headerName:"Language",type:"string",width:150,align:"center",justifyContent:"center",editable:!1},{field:"type",headerName:"Type",type:"string",width:150,align:"center",justifyContent:"center",editable:!1},{field:"form",headerName:"Form",type:"string",width:200,align:"center",justifyContent:"center",editable:!1},{field:"action",headerName:"Action",type:"string",width:100,editable:!1,renderCell:e=>(0,t.jsxs)(W,{children:[(0,t.jsx)(O,{onClick:()=>{var l;return K(null==e?void 0:null===(l=e.row)||void 0===l?void 0:l.id)},children:(0,t.jsx)(f.FiEdit,{})}),(0,t.jsx)(D,{onClick:()=>{var l,n;return V(null==e?void 0:null===(l=e.row)||void 0===l?void 0:l.id,null==e?void 0:null===(n=e.row)||void 0===n?void 0:n.name)},children:(0,t.jsx)(m.BsTrash,{})})]})}],J=(0,o.useDispatch)(),{request:Q}=(0,w.useHttp)();return(0,d.useEffect)(()=>{J((0,k.fetchDekanGroups)(Q))},[]),(0,t.jsxs)(M,{children:[(0,t.jsxs)(z,{children:["Groups ",(0,t.jsx)(c.default,{variant:"contained",onClick:()=>P(),children:" Add New Group"})]}),(0,t.jsx)(L.Card,{children:(0,t.jsx)(L.CardContent,{children:"done"===l&&(0,t.jsx)(u.DataGrid,{style:{width:"500px!important",minHeight:"300px!important"},columns:q,rows:null==e?void 0:e.map((e,l)=>({...e,count:l+1})),components:{Toolbar:u.GridToolbar},autoHeight:!0,pageSize:20,initialState:{...null==e?void 0:e.initialState,columns:{columnVisibilityModel:{id:!1,login:!1,card:!1,rfid:!1,email:!1,passport:!1,action:!1}}}})})}),(0,t.jsx)(v.default,{open:G,onClose:Z,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:(0,t.jsxs)(h.default,{sx:F,children:[(0,t.jsx)(_,{onClick:Z,children:(0,t.jsx)(g.RiCloseLine,{})}),(0,t.jsx)("h3",{style:{color:"".concat(s.mainColor)},children:null==R?void 0:R.name}),(0,t.jsxs)(U,{children:[(0,t.jsx)(x.default,{id:"outlined-basic",label:"Group Name",variant:"outlined",value:null==R?void 0:R.name,name:"name",onChange:H}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Course"}),(0,t.jsxs)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.level,label:"Course",name:"level",onChange:H,children:[(0,t.jsx)(C.default,{value:1,children:"1"}),(0,t.jsx)(C.default,{value:2,children:"2"}),(0,t.jsx)(C.default,{value:3,children:"3"}),(0,t.jsx)(C.default,{value:4,children:"4"})]})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Education Language"}),(0,t.jsxs)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.language,label:"Education Language",name:"language",onChange:H,children:[(0,t.jsx)(C.default,{value:"UZBEK",children:"UZBEK"}),(0,t.jsx)(C.default,{value:"RUSSIAN",children:"RUSSIAN"}),(0,t.jsx)(C.default,{value:"ENGLISH",children:"ENGLISH"})]})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Education Type"}),(0,t.jsx)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.type,label:"Education Type",name:"type",onChange:H,disabled:(null==i?void 0:i.length)===1,children:null==i?void 0:i.map(e=>(0,t.jsx)(C.default,{value:e,children:e},e))})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Education Form"}),(0,t.jsxs)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.form,label:"Education Form",name:"form",onChange:H,children:[(0,t.jsx)(C.default,{value:"BACHELOR",children:"BACHELOR"}),(0,t.jsx)(C.default,{value:"MASTER",children:"MASTER"})]})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Faculty"}),(0,t.jsx)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.faculty,label:"Faculty",name:"faculty",onChange:H,children:null==n?void 0:n.map(e=>(0,t.jsx)(C.default,{value:e,children:e},e))})]})]}),(0,t.jsx)(h.default,{sx:{display:"flex",justifyContent:"end"},children:(0,t.jsx)(c.default,{size:"large",variant:"contained",endIcon:(0,t.jsx)(r.FaSave,{}),onClick:()=>{""!==R.name&&null!==R.name&&""!==R.type&&null!==R.type&&""!==R.form&&null!==R.form&&""!==R.language&&null!==R.language&&null!==R.faculty&&""!==R.faculty?p.default.put(s.BASE_URL+"/group/updateGroups",R,{headers:T}).then(e=>{var l,n;(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.success)&&S.toast.success(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message),B({id:"",name:"",language:"",type:"",form:"",faculty:""}),Z(),J((0,k.fetchDekanGroups)(Q))}).catch(e=>{var l,n,a,t;!(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.success)&&S.toast.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message,{position:"top-right",autoClose:!1,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}):S.toast.warning("Empty any fields..")},children:"Update"})})]})}),(0,t.jsx)(v.default,{open:A,onClose:Z,"aria-labelledby":"keep-mounted-modal-title","aria-describedby":"keep-mounted-modal-description",children:(0,t.jsxs)(h.default,{sx:F,children:[(0,t.jsx)(_,{onClick:Z,children:(0,t.jsx)(g.RiCloseLine,{})}),(0,t.jsxs)("h3",{style:{color:"".concat(s.mainColor)},children:["Create ",null==R?void 0:R.name," group"]}),(0,t.jsxs)(U,{children:[(0,t.jsx)(x.default,{id:"outlined-basic",label:"Group Name",variant:"outlined",value:null==R?void 0:R.name,name:"name",onChange:H}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Course"}),(0,t.jsxs)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.level,label:"Course",name:"level",onChange:H,children:[(0,t.jsx)(C.default,{value:1,children:"1"}),(0,t.jsx)(C.default,{value:2,children:"2"}),(0,t.jsx)(C.default,{value:3,children:"3"}),(0,t.jsx)(C.default,{value:4,children:"4"})]})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Education Language"}),(0,t.jsxs)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.language,label:"Education Language",name:"language",onChange:H,children:[(0,t.jsx)(C.default,{value:"UZBEK",children:"UZBEK"}),(0,t.jsx)(C.default,{value:"RUSSIAN",children:"RUSSIAN"}),(0,t.jsx)(C.default,{value:"ENGLISH",children:"ENGLISH"})]})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Education Type"}),(0,t.jsx)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:(null==i?void 0:i.length)===1?i[0]:null==R?void 0:R.type,label:"Education Type",name:"type",onChange:H,disabled:(null==i?void 0:i.length)===1,children:null==i?void 0:i.map(e=>(0,t.jsx)(C.default,{value:e,children:e},e))})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Education Form"}),(0,t.jsxs)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.form,label:"Education Form",name:"form",onChange:H,children:[(0,t.jsx)(C.default,{value:"BACHELOR",children:"BACHELOR"}),(0,t.jsx)(C.default,{value:"MASTER",children:"MASTER"})]})]}),(0,t.jsxs)(j.default,{fullWidth:!0,children:[(0,t.jsx)(b.default,{id:"demo-simple-select-label",children:"Faculty"}),(0,t.jsx)(y.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:null==R?void 0:R.faculty,label:"Faculty",name:"faculty",onChange:H,children:null==n?void 0:n.map(e=>(0,t.jsx)(C.default,{value:e,children:e},e))})]})]}),(0,t.jsx)(h.default,{sx:{display:"flex",justifyContent:"end"},children:(0,t.jsx)(c.default,{size:"large",variant:"contained",endIcon:(0,t.jsx)(r.FaSave,{}),onClick:()=>{(null==i?void 0:i.length)!==1?""!==R.name&&null!==R.name&&""!==R.type&&null!==R.type&&""!==R.form&&null!==R.form&&""!==R.language&&null!==R.language&&null!==R.faculty&&""!==R.faculty?p.default.post(s.BASE_URL+"/group/createGroups",R,{headers:T}).then(e=>{var l,n;(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.success)&&S.toast.success(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message),B({id:"",name:"",language:"",type:"",form:"",faculty:""}),Z(),J((0,k.fetchDekanGroups)(Q))}).catch(e=>{var l,n,a,t;!(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.success)&&S.toast.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message)}):S.toast.warning("Empty any fields.."):""!==R.name&&null!==R.name&&""!==R.form&&null!==R.form&&""!==R.language&&null!==R.language&&null!==R.faculty&&""!==R.faculty?p.default.post(s.BASE_URL+"/group/createGroups",{...R,id:null,type:i[0]},{headers:T}).then(e=>{var l,n;(null==e?void 0:null===(l=e.data)||void 0===l?void 0:l.success)&&S.toast.success(null==e?void 0:null===(n=e.data)||void 0===n?void 0:n.message),Z(),B({id:"",name:"",language:"",type:"",form:"",faculty:""}),J((0,k.fetchDekanGroups)(Q))}).catch(e=>{var l,n,a,t;!(null==e?void 0:null===(n=e.response)||void 0===n?void 0:null===(l=n.data)||void 0===l?void 0:l.success)&&S.toast.error(null==e?void 0:null===(t=e.response)||void 0===t?void 0:null===(a=t.data)||void 0===a?void 0:a.message)}):S.toast.warning("Empty any fields..")},children:"Save"})})]})})]})}}}]);