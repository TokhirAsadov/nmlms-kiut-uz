/*! For license information please see 4104.e405f331.js.LICENSE.txt */
(self.webpackChunkkiut_client=self.webpackChunkkiut_client||[]).push([["4104"],{80359:function(e,n,t){"use strict";t.r(n);var r=t("58865");t("33948"),t("57640"),t("9924"),t("88921"),t("96248"),t("13599"),t("27561"),t("11477"),t("64362"),t("15389"),t("90401"),t("3440"),t("45164"),t("66244"),t("91238"),t("89772"),t("54837"),t("88910"),t("87485"),t("56767"),t("76651"),t("61437"),t("35285"),t("63252"),t("39865"),t("17454"),t("43847");var l=t("85893"),a=t("67294"),i=t("71893"),d=t("30297"),o=t("94757"),s=t("92037"),c=t("42154"),u=t("881"),f=t("94718"),x=t("60155"),h=t("89589"),p=t("16393");function m(){let e=(0,r._)(["\n  width: 100%;\n  padding: 20px;\n"]);return m=function(){return e},e}let b=i.default.div(m());n.default=e=>{let{dateInfo:n,setAllData:t,setOpen:r}=e,[i,m]=(0,a.useState)("");return(0,l.jsx)(b,{children:(0,l.jsx)("form",{onSubmit:e=>{e.preventDefault();let l=n.map(e=>({...e,radioValue:i}));Array.from(new Set(l.map(JSON.stringify))).map(JSON.parse),t([]),r(!1)},children:(0,l.jsxs)(c.default,{variant:"standard",sx:{width:"100%"},children:[(0,l.jsx)(u.default,{id:"demo-form-control-label-placement",children:(0,l.jsx)(h.default,{variant:"h6",sx:{color:"".concat(p.mainColor)},children:"Select the day format"})}),(0,l.jsxs)(o.default,{value:i,onChange:e=>m(e.target.value),"aria-labelledby":"demo-form-control-label-placement",name:"position",defaultValue:"Orientation week",sx:{mt:1},children:[(0,l.jsx)(s.default,{value:"Orientation week",control:(0,l.jsx)(d.default,{required:!0}),label:"Orientation week"}),(0,l.jsx)(s.default,{value:"Theoretical education",control:(0,l.jsx)(d.default,{required:!0}),label:"Theoretical education"}),(0,l.jsx)(s.default,{value:"Final exams",control:(0,l.jsx)(d.default,{required:!0}),label:"Final exams"}),(0,l.jsx)(s.default,{value:"Vacation",control:(0,l.jsx)(d.default,{required:!0}),label:"Vacation"}),(0,l.jsx)(s.default,{value:"Theoretical/Practical education",control:(0,l.jsx)(d.default,{required:!0}),label:"Theoretical/Practical education"})]}),(0,l.jsx)(f.default,{type:"submit",sx:{margin:"10px auto",padding:"5px 50px"},variant:"contained",endIcon:(0,l.jsx)(x.IoSave,{}),children:"Save"})]})})})}},89800:function(e,n,t){"use strict";t.r(n);var r=t("58865");t("33948"),t("57658"),t("64211"),t("41874"),t("2490"),t("57640"),t("9924"),t("31672"),t("59461");var l=t("85893"),a=t("67294"),i=t("71893");t("85159");var d=t("30381"),o=t.n(d),s=t("57024"),c=t("16393"),u=t("97367"),f=t("55693"),x=t("79352"),h=t("80359"),p=t("94718"),m=t("60155"),b=t("32392"),j=t("61261"),g=t("42154"),v=t("44025");function w(){let e=(0,r._)(["\n  width: 100%;\n  padding-top: 20px;\n  display: flex;\n  justify-content: end;\n  ","\n"]);return w=function(){return e},e}function y(){let e=(0,r._)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #dcd7d7;\n  border-radius: 50%;\n  color: red;\n  font-size: 26px;\n  border: none;\n  cursor: pointer;\n  z-index: 1000;\n\n"]);return y=function(){return e},e}function k(){let e=(0,r._)(["\n  position: relative;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 400px;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  ","\n"]);return k=function(){return e},e}function F(){let e=(0,r._)(["\n  font-size: 12px;\n  font-weight: normal;\n"]);return F=function(){return e},e}function S(){let e=(0,r._)(["\n  font-size: 10px;\n  font-weight: bold;\n  color: black;\n  width: 35px;\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 1px solid black;\n  border-radius: 5px;\n  background-color: ",";\n"]);return S=function(){return e},e}function C(){let e=(0,r._)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]);return C=function(){return e},e}function _(){let e=(0,r._)(["\n  margin-top: 20px;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 20px;\n  align-items: center;\n  ","\n  ","\n  ","\n"]);return _=function(){return e},e}function D(){let e=(0,r._)(["\n  margin: 20px;\n  display: flex;\n  gap: 30px;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  color: black;\n  p{\n    font-size: 17px;\n  }\n  ","\n"]);return D=function(){return e},e}function I(){let e=(0,r._)(["\n  width: 100%;\n  overflow: scroll;\n"]);return I=function(){return e},e}function O(){let e=(0,r._)(["\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 5px;\n  \n  .selected{\n    background-color: rgba(0, 0, 0, 0.3);\n  }\n  td, th {\n    border: 1px solid black;\n    border-collapse: collapse;\n    text-align: center;\n    padding: 8px;\n    color: black;\n  }\n\n  th {\n    color: #FFFFFF;\n    background-color: ",";\n  }\n\n  .itemday {\n    cursor: pointer;\n\n    :hover {\n      background-color: rgba(0, 0, 0, 0.3);\n    }\n    \n   \n  }\n\n"]);return O=function(){return e},e}function T(){let e=(0,r._)(["\n  width: 100%;\n  background-color: #ffffff;\n  min-height: 300px;\n  border-radius: 5px;\n  padding: 20px 10px;\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\n"]);return T=function(){return e},e}function M(){let e=(0,r._)(["\n  padding: 1rem;\n  width: 100%;\n"]);return M=function(){return e},e}let V=i.default.div(w(),(0,s.extrasmall)({justifyContent:"center"})),q=i.default.button(y()),z=i.default.div(k(),(0,s.extrasmall)({width:"320px"})),A=i.default.h6(F()),E=i.default.div(S(),e=>e.bg||"#FFF"),J=i.default.div(C()),N=i.default.div(_(),(0,s.medium)({gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr "}),(0,s.small)({gridTemplateColumns:"1fr 1fr 1fr 1fr "}),(0,s.extrasmall)({gridTemplateColumns:"1fr 1fr  "})),P=i.default.div(D(),(0,s.extrasmall)({justifyContent:"center"})),Y=i.default.div(I()),L=i.default.table(O(),c.mainColor),W=i.default.div(T()),R=i.default.div(M());n.default=()=>{let[e,n]=(0,a.useState)(+o()(new Date).format("YYYY")),[t,r]=(0,a.useState)(!1),[i,d]=(0,a.useState)(!1),[s,w]=(0,a.useState)([]),y=e=>{w(()=>[e]),r(!0)},k=()=>{w([]),r(!1)},F=[],S=(0,a.useCallback)((e,n)=>{let t=new Date(e,n-1,1).getDay(),r=new Date(e,n,0).getDate(),l=["January","February","March","April","May","June","July","August","September","October","November","December"][n-1],a=[],i=[],d=0;for(let l=1;l<=r;l++){let r=new Date(e,n-1,l).getDay();1===r?a.push(l):5===r&&i.push(l),r===t&&1!==l&&d++}return d=28===r&&0===t?4:31===r&&t>=5&&(a.length<5||i.length<5)?6:5,{monthName:l,MonDay:a,FriDay:i,weeks:d}},[F]);for(let n=9;n<=12;n++)F.push(S(+e,n));for(let n=1;n<=8;n++)F.push(S(+e+1,n));let C=[];for(let e=1;e<=52;e++)C.push(e);let _=e=>{let n=[],t=[];for(let r of e)n.push(...r.MonDay),t.push(...r.FriDay);return 0!==n.length&&n[0]>t[0]&&t.shift(),n.length!==t.length&&n.pop(),{mondaydata:n,fridaydata:t}},D=e=>{d(!0)},I=e=>{d(!1),r(!0)},O=(0,a.useCallback)(e=>{!s.some(n=>(null==n?void 0:n.weeksOrder)===(null==e?void 0:e.weeksOrder)&&n.level===e.level)&&w(n=>[...n,e])},[s]),T=(0,a.useMemo)(()=>O,[O]);return(0,l.jsxs)(R,{children:[(0,l.jsxs)(W,{children:[(0,l.jsxs)(P,{children:[(0,l.jsxs)(g.default,{sx:{width:"150px"},children:[(0,l.jsx)(b.default,{id:"demo-simple-select-label",children:"Select year"}),(0,l.jsx)(v.default,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:e,label:"Select year",onChange:e=>{n(e.target.value)},children:[2022,2023,2024,2025,2026,2027,2028,2029,2030].map((e,n)=>(0,l.jsx)(j.default,{value:e,children:e},n))})]}),(0,l.jsxs)("p",{children:[(0,l.jsxs)("b",{children:[" ",+e,"/",+e+1]})," academic year"]})]}),(0,l.jsx)(Y,{children:(0,l.jsx)(L,{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{rowSpan:"4",children:"LEVEL"}),F.map((e,n)=>(0,l.jsx)("th",{colSpan:e.MonDay.length,children:e.monthName},n))]}),(0,l.jsx)("tr",{children:C.map((e,n)=>{let t=_(F).mondaydata[n];return(0,l.jsx)("td",{children:t||"-"},n)})}),(0,l.jsx)("tr",{children:C.map((e,n)=>{let t=_(F).fridaydata[n];return(0,l.jsx)("td",{children:t||"-"},n)})}),(0,l.jsx)("tr",{children:C.map((e,n)=>(0,l.jsx)("td",{style:{fontWeight:"bold"},children:e},n))}),[1,2,3,4].map((e,n)=>(0,l.jsxs)("tr",{children:[(0,l.jsxs)("th",{children:[1===e&&"I",2===e&&"II",3===e&&"III",4===e&&"IV"]}),C.map((n,t)=>{let r={weeksOrder:n,weekstart:_(F).mondaydata[t],weekend:_(F).fridaydata[t],level:e};return(0,l.jsx)("td",{className:"itemday ".concat(s.find(e=>e.weeksOrder===n&&e.level===r.level)?"selected":""),onClick:()=>y(r),onMouseDown:D,onMouseMove:()=>{i&&T(r)},onMouseUp:I,children:"-"},t)})]},n))]})})}),(0,l.jsx)(V,{children:(0,l.jsx)(p.default,{variant:"contained",endIcon:(0,l.jsx)(m.IoSave,{}),children:" Save table"})}),(0,l.jsxs)(N,{children:[(0,l.jsx)("h6",{children:"Abbreviations:"}),(0,l.jsxs)(J,{children:[(0,l.jsx)(E,{bg:"",children:"OW"}),(0,l.jsx)(A,{children:"Orientation week"})]}),(0,l.jsxs)(J,{children:[(0,l.jsx)(E,{bg:"#bbcbc7",children:"TE"}),(0,l.jsx)(A,{children:"Theoretical education"})]}),(0,l.jsxs)(J,{children:[(0,l.jsx)(E,{bg:c.mainColor,children:"F"}),(0,l.jsx)(A,{children:"Final exams"})]}),(0,l.jsxs)(J,{children:[(0,l.jsx)(E,{bg:"#b28a8a",children:"V"}),(0,l.jsx)(A,{children:"Vacation"})]}),(0,l.jsxs)(J,{children:[(0,l.jsx)(E,{bg:"#00ffd3",children:"TE/PE"}),(0,l.jsx)(A,{children:"Theoretical/Practical education"})]})]})]}),(0,l.jsx)(u.default,{open:t,onClose:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,l.jsxs)(f.default,{component:z,children:[(0,l.jsx)(q,{onClick:k,children:(0,l.jsx)(x.RiCloseLine,{})}),(0,l.jsx)(h.default,{setOpen:r,dateInfo:s,setAllData:w})]})})]})}},85159:function(e){}}]);