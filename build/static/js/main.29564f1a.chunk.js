(this.webpackJsonpjmldigital=this.webpackJsonpjmldigital||[]).push([[0],{223:function(e,c,s){},225:function(e,c,s){"use strict";s.r(c);var a=s(1),t=s.n(a),i=s(100),l=s.n(i),r=s(4),n=s(5),j=s(11),d=s(12),o=s(0),h=function(e){Object(j.a)(s,e);var c=Object(d.a)(s);function s(){return Object(r.a)(this,s),c.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),Object(o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Righteous&display=swap",rel:"stylesheet"}),Object(o.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(o.jsx)("title",{children:"JML Digital"}),Object(o.jsx)("meta",{name:"description",content:"JML Digital is a full service marketing company."})]})})}}]),s}(t.a.Component),b=s(34),m=s(101),O=s(18),x=s(41),v=s(227),p=s(15),u=s(29),g=function(e){return Object(o.jsx)("div",{id:"error",children:e.children})};var N=function(e){var c=e.label,s=e.name,a=Object(u.a)(e,["label","name"]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:s,children:c}),Object(o.jsx)(O.b,Object(p.a)({id:s,name:s},a)),Object(o.jsx)(O.a,{name:s,component:g})]})};var f=function(e){var c=e.label,s=e.name,a=Object(u.a)(e,["label","name"]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:s,children:c}),Object(o.jsx)(O.b,Object(p.a)({as:"textarea",id:s,name:s},a)),Object(o.jsx)(O.a,{name:s,component:g})]})};var w=function(e){var c=e.label,s=e.name,a=e.options,i=Object(u.a)(e,["label","name","options"]);return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:c}),Object(o.jsx)(O.b,Object(p.a)(Object(p.a)({name:s},i),{},{children:function(e){var c=e.field;return a.map((function(e){return Object(o.jsx)(t.a.Fragment,{children:Object(o.jsxs)(v.a.td,{whileHover:{scale:1.1},children:[Object(o.jsx)("input",Object(p.a)(Object(p.a)({type:"checkbox",className:"check",id:e.value},c),{},{value:e.value,checked:c.value.includes(e.value)})),"\xa0",Object(o.jsx)("label",{htmlFor:e.value,id:"clabel",children:e.key}),"\xa0 \xa0 \xa0"]})},e.key)}))}})),Object(o.jsx)(O.a,{name:s,component:g})]})};var y=function(e){var c=e.control,s=Object(u.a)(e,["control"]);switch(c){case"input":return Object(o.jsx)(N,Object(p.a)({},s));case"textarea":return Object(o.jsx)(f,Object(p.a)({},s));case"checkbox":return Object(o.jsx)(w,Object(p.a)({},s));default:return null}},k=s(228),S={visible:{opacity:1},hidden:{opacity:0}},H=function(e){var c=e.showSuccess;e.setShowSuccess;return Object(o.jsx)(k.a,{exitBeforeEnter:!0,children:c&&Object(o.jsx)(v.a.div,{className:"backdrop",variants:S,initial:"hidden",animate:"visible",children:Object(o.jsxs)(v.a.div,{className:"thanks",children:[Object(o.jsx)("h3",{children:"Thank you!"}),Object(o.jsx)("h1",{children:"I will contact you as soon as possible."})]})})})},M=[{key:"Web",value:"  Web"},{key:"Video",value:"  Video"},{key:"Graphic",value:"  Graphic"},{key:"Other",value:"  Other"}],E={name:"",email:"",checkboxOption:[],message:""},B=x.b({name:x.c().min(3,"Too Short").required("Required!"),email:x.c().email("Must be a valid email").required("Required!"),checkboxOption:x.a().required("Required!"),message:x.c()});var D=function(e,c){Object(m.send)("service_ovdhe76","template_uqaw5uo",e,"user_xBYjkxSEAay5PtGDOkoCE").then((function(e){console.log("SUCCESS!",e.status,e.text)})).catch((function(e){console.log("FAILED...",e)})),c.resetForm()},C=function(){var e=Object(a.useState)(!1),c=Object(b.a)(e,2),s=c[0],t=c[1];return Object(a.useEffect)((function(){setTimeout((function(){t(!1)}),3e3)})),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"third",children:[Object(o.jsx)("h3",{children:"Contact"}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("i",{className:"material-icons",children:"phone_iphone"}),"(719) 761-5250 \xa0"]}),Object(o.jsxs)("h4",{children:[Object(o.jsx)("i",{className:"material-icons",children:"mail"}),"Jordan.Lugenbeel \xa0",Object(o.jsx)("br",{}),"@gmail.com \xa0"]})]}),Object(o.jsx)("div",{className:"twothird",children:Object(o.jsx)(O.d,{initialValues:E,validationSchema:B,onSubmit:D,validateOnMount:!0,children:function(e){return Object(o.jsxs)(O.c,{children:[Object(o.jsx)(y,{control:"input",type:"text",name:"name",id:"input",placeholder:"Your Name"}),Object(o.jsx)("br",{}),Object(o.jsx)(y,{control:"input",type:"text",name:"email",id:"input",placeholder:"Your Email"}),Object(o.jsx)("br",{}),Object(o.jsx)(y,{control:"checkbox",name:"checkboxOption",id:"checkbox",options:M}),Object(o.jsx)("br",{}),Object(o.jsx)(y,{control:"textarea",name:"message",id:"inputarea",placeholder:"Your Message"}),Object(o.jsx)("br",{}),Object(o.jsx)(v.a.button,{whileHover:{scale:1.1},type:"submit",className:"form-submit-button",disabled:!e.isValid||e.isSubmitting,onClick:function(){t(!0)},children:"Submit"}),Object(o.jsx)(v.a.button,{whileHover:{scale:1.1},type:"reset",className:"form-reset-button",children:"Reset"}),Object(o.jsx)(H,{showSuccess:s,setshowSuccess:t})]})}})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("img",{src:"images/JMLHex3.png",alt:"JML Digital"}),Object(o.jsx)("div",{className:"smtopbot",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("i",{className:"material-icons",children:"copyright"}),"Jordan Michael Lugenbeel 2021"]})}),Object(o.jsx)("img",{src:"images/JMLHex4.png",alt:"JML Digital"}),Object(o.jsx)("div",{className:"space"})]})},L=s(60),T=s.n(L),J=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(v.a.div,{className:"banner",transition:{duration:2},animate:{opacity:1,y:0},initial:{opacity:0,y:-100},children:Object(o.jsx)("img",{src:"images/JMLBanner.png",alt:"Welcome to JML Digital"})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsxs)("h1",{children:["VIDEO",Object(o.jsx)("br",{}),"PRODUCTION"]})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsxs)("h1",{children:["GRAPHIC",Object(o.jsx)("br",{}),"DESIGN"]})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsxs)("h1",{children:["WEB",Object(o.jsx)("br",{}),"DEVELOPMENT"]})}),Object(o.jsx)("img",{src:"images/JMLHex1.png",alt:"Welcome to JML Digital"}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("h2",{children:"WEB DEVELOPMENT"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padleft",children:Object(o.jsx)("a",{href:"https://camilleabrown.org/",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"images/CamilleSite.png",alt:"Camille A. Brown Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{className:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padcenter",children:Object(o.jsx)("a",{href:"http://rennieharrisinc.com/",rel:"noreferrer",target:"_blank",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"images/RennieSite.png",alt:"Rennie Harris Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{className:"material-icons md-48",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padright",children:Object(o.jsx)("a",{href:"https://www.everybodymove.world/",rel:"noreferrer",target:"_blank",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"images/EBMSite.png",alt:"Every Body Move Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{className:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"smspace"}),Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"/websites",target:"_blank",children:"See All Sites"})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("h2",{children:"VIDEO PRODUCTION"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padleft",children:Object(o.jsx)("div",{className:"youtube-video-container",children:Object(o.jsx)(T.a,{url:"https://www.youtube.com/watch?v=H3ITO6SkMdw",className:"react-player",width:"100%",height:"100%"})})})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padcenter",children:Object(o.jsx)("div",{className:"youtube-video-container",children:Object(o.jsx)(T.a,{url:"https://www.youtube.com/watch?v=P-vyovD1Nu8",className:"react-player",width:"100%",height:"100%"})})})}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padright",children:Object(o.jsx)("div",{className:"youtube-video-container",children:Object(o.jsx)(T.a,{url:"https://www.youtube.com/watch?v=odTVXunPnGU",className:"react-player",width:"100%",height:"100%",allowFullScreen:!0})})})}),Object(o.jsx)("div",{className:"smspace"}),Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"https://www.youtube.com/channel/UCaDK3YCbfM8KahzxzxsH6HQ",rel:"noreferrer",target:"_blank",children:"Watch More Videos"})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("h2",{children:"GRAPHIC DESIGN"}),Object(o.jsx)("div",{className:"sixth",children:Object(o.jsx)("div",{className:"padleft",children:Object(o.jsx)("img",{src:"images/ColumbineAnimal.png",alt:"Columbine Animal Hospital Advertisement"})})}),Object(o.jsx)("div",{className:"sixth",children:Object(o.jsx)("div",{className:"padcenter",children:Object(o.jsx)("img",{src:"images/nobicycleparking.png",alt:"No Bicycle Parking Coffee Table Book"})})}),Object(o.jsx)("div",{className:"sixth",children:Object(o.jsx)("div",{className:"padcenter",children:Object(o.jsx)("img",{src:"images/20thSealGlow.png",alt:"Rennie Harris Puremovement Logo"})})}),Object(o.jsx)("div",{className:"sixth",children:Object(o.jsx)("div",{className:"padcenter",children:Object(o.jsx)("img",{src:"images/TonyaLogoR.png",alt:"Elan Bird Logo"})})}),Object(o.jsx)("div",{className:"sixth",children:Object(o.jsx)("div",{className:"padcenter",children:Object(o.jsx)("img",{src:"images/RHPMStylesheet.png",alt:"Rennie Harris Puremovement Brand Stylesheets"})})}),Object(o.jsx)("div",{className:"sixth",children:Object(o.jsx)("div",{className:"padright",children:Object(o.jsx)("img",{src:"images/Mr.TolPostcard.png",alt:"Camille A. Brown Mr. Tol E. RancE Postard"})})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("img",{src:"images/JMLHex2.png",alt:"JML Digital"}),Object(o.jsx)("div",{className:"space"})]})},R=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("a",{href:"/",children:Object(o.jsx)(v.a.div,{className:"banner",transition:{duration:1},animate:{opacity:1,y:0},initial:{opacity:0,y:-100},whileHover:{scale:1.1},children:Object(o.jsx)("img",{src:"/images/JMLTopSidePages.png",alt:"Welcome to JML Digital's Websites"})})}),Object(o.jsx)("h1",{children:"Web Development"}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padd-left-twenty",children:Object(o.jsx)("a",{href:"https://rennieharrisinc.com/",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"/images/RennieSite.png",alt:"Rennie Harris Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{className:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"twothird",children:Object(o.jsxs)("div",{className:"padd-fifty",children:[Object(o.jsx)("h2",{children:"Rennie Harris"}),Object(o.jsxs)("p",{children:["Dr. Rennie Harris is the world leading hip-hop choreographer. He teaches around the world at universities and festivals and holds his own festival called illadelph Legends festival. He has choreographed for companies such as Alvin Ailey.",Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"https://rennieharrisinc.com/",target:"_blank",rel:"noreferrer",children:"rennieharrisinc.com"})})]})]})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padd-left-twenty",children:Object(o.jsx)("a",{href:"https://camilleabrown.org",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},class:"imgcontainer",children:[Object(o.jsx)("img",{src:"/images/CamilleSite.png",alt:"Camille A. Brown Site",class:"image"}),Object(o.jsx)("div",{class:"middle",children:Object(o.jsx)("i",{class:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"twothird",children:Object(o.jsxs)("div",{className:"padd-fifty",children:[Object(o.jsx)("h2",{children:"Camille A. Brown"}),Object(o.jsx)("p",{children:"Camille A. Brown is one of the leading choreographers in New York. She has received many awards and was nominated for a Tony Award. She has a dance company and has choreographed for productions such as Ma Rainy which is available on Netflix and Jesus Christ Superstar that aired live on NBC. She has a TED talk video that has over 10 million view."}),Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"https://camilleabrown.org",target:"_blank",rel:"noreferrer",children:"camilleabrown.org"})})]})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{class:"padd-left-twenty",children:Object(o.jsx)("a",{href:"http://buildmomentumllc.com/",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"/images/Momentum.png",alt:"Momentum Development Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{class:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"twothird",children:Object(o.jsxs)("div",{className:"padd-fifty",children:[Object(o.jsx)("h2",{children:"Momentum Development"}),Object(o.jsxs)("p",{children:["Momentum Development is a development and construction company based out of Pennsylvania. They handle development project from design all the way through construction. From smaller house all the way up to multiunit developments.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"http://buildmomentumllc.com/",target:"_blank",rel:"noreferrer",children:"buildmomentumllc.com"})})]})]})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padd-left-twenty",children:Object(o.jsx)("a",{href:"https://everybodymove.world",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"/images/EBMSite.png",alt:"Every Body Move Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{className:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"twothird",children:Object(o.jsxs)("div",{className:"padd-fifty",children:[Object(o.jsx)("h2",{children:"Every Body Move"}),Object(o.jsxs)("p",{children:["Every Body Move is a community outreach program conceived by Camille A. Brown. The aim of the program is to \u201cinspire and incite ambitious collective action fueled by the art of social dance.\u201d",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"https://everybodymove.world/",target:"_blank",rel:"noreferrer",children:"everybodymove.world"})})]})]})}),Object(o.jsx)("div",{class:"space"}),Object(o.jsx)("div",{className:"third",children:Object(o.jsx)("div",{className:"padd-left-twenty",children:Object(o.jsx)("a",{href:"http://tuckerbuildersllc.com/",target:"_blank",rel:"noreferrer",children:Object(o.jsxs)(v.a.div,{whileHover:{scale:1.1},className:"imgcontainer",children:[Object(o.jsx)("img",{src:"/images/Tucker.png",alt:"Tucker Builders Site",className:"image"}),Object(o.jsx)("div",{className:"middle",children:Object(o.jsx)("i",{className:"material-icons",children:"link"})})]})})})}),Object(o.jsx)("div",{className:"twothird",children:Object(o.jsxs)("div",{className:"padd-fifty",children:[Object(o.jsx)("h2",{children:"Tucker Builders"}),Object(o.jsxs)("p",{children:["Tucker Builders is a family owned construction company based out of Philadelphia. They provide services such as total home remodels, additions, HVAC, hardscaping and more.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)(v.a.h5,{whileHover:{scale:1.1},children:Object(o.jsx)("a",{href:"http://tuckerbuildersllc.com/",target:"_blank",rel:"noreferrer",children:"tuckerbuildersllc.com"})})]})]})}),Object(o.jsx)("div",{className:"space"}),Object(o.jsx)("img",{src:"/images/JMLHex2.png",alt:"Welcome to JML Digital"}),Object(o.jsx)("div",{className:"space"})]})},A=(s(223),s(107)),_=s(7),P=function(){return Object(o.jsx)(A.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(h,{}),Object(o.jsxs)(_.c,{children:[Object(o.jsx)(_.a,{path:"/",exact:!0,component:J}),Object(o.jsx)(_.a,{path:"/websites",component:R})]}),Object(o.jsx)(C,{})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(o.jsx)(P,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[225,1,2]]]);
//# sourceMappingURL=main.29564f1a.chunk.js.map