(this["webpackJsonpcalums-portfolio-resume"]=this["webpackJsonpcalums-portfolio-resume"]||[]).push([[0],{22:function(e,s,t){},25:function(e,s,t){},36:function(e,s,t){"use strict";t.r(s);var c=t(2),a=t(15),n=t.n(a),i=(t(22),t(6)),r=t(7),l=t(9),j=t(8),d=t(13),o=t(16),h=t.n(o),b=(t(25),t(17)),m=t(5),u=t.n(m),O=t(1),x=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.github,s=this.props.data.name,t=this.props.data.description;return Object(O.jsxs)("header",{id:"home",children:[Object(O.jsx)(b.a,{type:"circle",bg:!0}),Object(O.jsxs)("nav",{id:"nav-wrap",children:[Object(O.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(O.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(O.jsxs)("ul",{id:"nav",className:"nav",children:[Object(O.jsx)("li",{className:"current",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(O.jsx)("div",{className:"row banner",children:Object(O.jsxs)("div",{className:"banner-text",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsx)("h1",{className:"responsive-headline",children:s})}),Object(O.jsx)(u.a,{bottom:!0,duration:1200,children:Object(O.jsxs)("h3",{children:[t,"."]})}),Object(O.jsx)("hr",{}),Object(O.jsx)(u.a,{bottom:!0,duration:2e3,children:Object(O.jsx)("ul",{className:"social",children:Object(O.jsxs)("a",{href:e,className:"button btn github-btn",children:[Object(O.jsx)("i",{className:"fa fa-github"}),"Github"]})})})]})}),Object(O.jsx)("p",{className:"scrolldown",children:Object(O.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(O.jsx)("i",{className:"icon-down-circle"})})})]})}}]),t}(c.Component),p=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:e.url,children:Object(O.jsx)("i",{className:e.className})})},e.name)}));return Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(u.a,{bottom:!0,children:Object(O.jsxs)("div",{className:"twelve columns",children:[Object(O.jsx)("ul",{className:"social-links",children:e}),Object(O.jsx)("ul",{className:"copyright",children:Object(O.jsxs)("li",{children:["\xa9 Copyright ",(new Date).getFullYear()," Calum Bradley"]})})]})}),Object(O.jsx)("div",{id:"go-top",children:Object(O.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(O.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(c.Component),v=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,c=(this.props.data.address.city,this.props.data.address.state),a=this.props.data.email,n=this.props.data.resumedownload;return Object(O.jsx)("section",{id:"about",children:Object(O.jsx)(u.a,{duration:1e3,children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"three columns",children:Object(O.jsx)("img",{className:"profile-pic",src:s,alt:"Nordic Giant Profile Pic"})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("h2",{children:"About Me"}),Object(O.jsx)("p",{children:t}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"columns contact-details",children:[Object(O.jsx)("h2",{children:"Contact Details"}),Object(O.jsxs)("p",{className:"address",children:[Object(O.jsxs)("span",{children:[e,","]}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[c,",",Object(O.jsx)("br",{}),"United Kingdom"]}),Object(O.jsx)("br",{}),Object(O.jsx)("span",{children:a})]})]}),Object(O.jsx)("div",{className:"columns download",children:Object(O.jsx)("p",{children:Object(O.jsxs)("a",{href:n,className:"button",children:[Object(O.jsx)("i",{className:"fa fa-download"}),"Download Resume"]})})})]})]})]})})})}}]),t}(c.Component),f=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"getRandomColor",value:function(){for(var e="#",s=0;s<6;s++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){var e=this;if(!this.props.data)return null;var s=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.school}),Object(O.jsxs)("p",{className:"info",children:[e.degree," ",Object(O.jsx)("span",{children:"\u2022"}),Object(O.jsx)("em",{className:"date",children:e.graduated})]}),Object(O.jsx)("p",{children:e.description})]},e.school)})),c=this.props.data.work.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:e.company}),Object(O.jsxs)("p",{className:"info",children:[e.title,Object(O.jsx)("span",{children:"\u2022"})," ",Object(O.jsx)("em",{className:"date",children:e.years})]}),Object(O.jsx)("p",{children:e.description})]},e.company)})),a=this.props.data.skills.map((function(s){var t=e.getRandomColor(),c="bar-expand "+s.name.toLowerCase(),a=s.level;return Object(O.jsxs)("li",{children:[Object(O.jsx)("span",{style:{width:a,backgroundColor:t},className:c}),Object(O.jsx)("em",{children:s.name})]},s.name)}));return Object(O.jsxs)("section",{id:"resume",children:[Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row work",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Work"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:c})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row education",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Education"})})}),Object(O.jsx)("div",{className:"nine columns main-col",children:Object(O.jsx)("div",{className:"row item",children:Object(O.jsx)("div",{className:"twelve columns",children:t})})})]})}),Object(O.jsx)(u.a,{left:!0,duration:1300,children:Object(O.jsxs)("div",{className:"row skill",children:[Object(O.jsx)("div",{className:"three columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Skills"})})}),Object(O.jsxs)("div",{className:"nine columns main-col",children:[Object(O.jsx)("p",{children:s}),Object(O.jsx)("div",{className:"bars",children:Object(O.jsx)("ul",{className:"skills",children:a})})]})]})})]})}}]),t}(c.Component),N=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(){return Object(i.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,s=this.props.data.address.city,t=this.props.data.address.state,c=this.props.data.contactmessage;return Object(O.jsxs)("section",{id:"contact",children:[Object(O.jsx)(m.Fade,{bottom:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"row section-head",children:[Object(O.jsx)("div",{className:"two columns header-col",children:Object(O.jsx)("h1",{children:Object(O.jsx)("span",{children:"Get In Touch."})})}),Object(O.jsx)("div",{className:"ten columns",children:Object(O.jsx)("p",{className:"lead",children:c})})]})}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)(m.Slide,{left:!0,duration:1e3,children:Object(O.jsxs)("div",{className:"eight columns",children:[Object(O.jsx)("form",{id:"contactForm",name:"contactForm",method:"post",children:Object(O.jsxs)("fieldset",{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(O.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(O.jsx)("span",{className:"required",children:"*"})]}),Object(O.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{className:"submit",children:"Submit"}),Object(O.jsx)("span",{id:"image-loader",children:Object(O.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(O.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(O.jsxs)("div",{id:"message-success",children:[Object(O.jsx)("i",{className:"fa fa-check"}),"Your message has been sent, thank you!",Object(O.jsx)("br",{})]})]})}),Object(O.jsx)(m.Slide,{right:!0,duration:1e3,children:Object(O.jsx)("aside",{className:"four columns footer-widgets",children:Object(O.jsxs)("div",{className:"widget widget_contact",children:[Object(O.jsx)("h4",{children:"Address"}),Object(O.jsxs)("p",{className:"address",children:[e,Object(O.jsx)("br",{}),s,",",Object(O.jsx)("br",{}),t,",",Object(O.jsx)("br",{}),"United Kingdom"]})]})})})]})]})}}]),t}(c.Component),g=function(e){Object(l.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(i.a)(this,t),(c=s.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(t,[{key:"getResumeData",value:function(){h.a.ajax({url:"./resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,s,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{data:this.state.resumeData.main}),Object(O.jsx)(v,{data:this.state.resumeData.main}),Object(O.jsx)(f,{data:this.state.resumeData.resume}),Object(O.jsx)(N,{data:this.state.resumeData.main}),Object(O.jsx)(p,{data:this.state.resumeData.main})]})}}]),t}(c.Component),w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(s){var t=s.getCLS,c=s.getFID,a=s.getFCP,n=s.getLCP,i=s.getTTFB;t(e),c(e),a(e),n(e),i(e)}))};n.a.render(Object(O.jsx)(g,{}),document.getElementById("root")),w()}},[[36,1,2]]]);
//# sourceMappingURL=main.fbe9d5c4.chunk.js.map