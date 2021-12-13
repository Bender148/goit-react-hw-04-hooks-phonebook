(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={contacts:"ContactList_contacts__3wVD0",item:"ContactList_item__1am_H",btn:"ContactList_btn__3eEty",notification:"ContactList_notification__ymAJS"}},,,,,,function(t,e,n){t.exports={form:"ContactForm_form__3Xs-H",btn:"ContactForm_btn__2Gt5t"}},,,function(t,e,n){t.exports={container:"Section_container__2LbjM",title:"Section_title__1QryV"}},function(t,e,n){t.exports={title:"PageTitle_title__X4Ksc"}},function(t,e,n){t.exports={title:"Title_title__3OhQF"}},,function(t,e,n){t.exports={filter:"Filter_filter__2B0iA"}},,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(10),r=n.n(i),s=n(9),o=n(3),l=n(4),u=n(6),b=n(5),j=n(11),f=n.n(j),d=n(0),m=function(t){var e=t.children;return Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:f.a.container,children:e})})},h=n(12),p=n.n(h),O=function(t){var e=t.title;return Object(d.jsx)("h1",{className:p.a.title,children:e})};O.defaultProps={title:""};var x=O,v=n(13),_=n.n(v),C=function(t){var e=t.title;return e&&Object(d.jsx)("h2",{className:_.a.title,children:e})};C.defaultProps={title:""};var g=C,y=n(14),S=n(24),N=n(8),k=n.n(N),w=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(y.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=Object(S.a)(),a=t.state,c=a.name,i=a.number;if(c){var r={id:n,name:c,number:i};t.props.submitHandler(r),t.reset()}},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{className:k.a.form,onSubmit:this.handleSubmit,children:[Object(d.jsxs)("label",{children:["Name:",Object(d.jsx)("input",{type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange,required:!0})]}),Object(d.jsxs)("label",{children:["Number:",Object(d.jsx)("input",{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,required:!0})]}),Object(d.jsx)("button",{type:"submit",className:k.a.btn,children:"Add to contact"})]})}}]),n}(a.Component),L=w,D=n(15),A=n.n(D),F=function(t){var e=t.filterValue,n=t.filterUpdate;return Object(d.jsx)("div",{className:A.a.filter,children:Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,autoComplete:"off",required:!0})]})})};F.defaultProps={filterValue:""};var H=F,I=n(2),J=n.n(I),P=function(t){var e=t.filtered,n=t.onDeleteContact;return Object(d.jsx)("ul",{className:J.a.contacts,children:e.length?e.map((function(t){return Object(d.jsxs)("li",{className:J.a.item,children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:[t.name,":"]}),Object(d.jsx)("p",{children:t.number})]}),Object(d.jsx)("button",{className:J.a.btn,onClick:function(){n(t.id)},children:"Delete"})]},t.id)})):Object(d.jsx)("li",{className:J.a.notification,children:"No contact found"})})},U=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.submitHandler=function(e){var n=t.state.contacts,a=n.find((function(t){return t.name===e.name}));a?alert("".concat(a.name," is already in contacts.")):t.setState({contacts:[e].concat(Object(s.a)(n))})},t.filterUpdate=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:Object(s.a)(e)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){var n=e.name,a=e.number;return n.toLowerCase().includes(t.state.filter.toLocaleLowerCase())||a.includes(t.state.filter)}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{title:"Phone Book"}),Object(d.jsxs)(m,{children:[Object(d.jsx)(g,{title:"Add contacts"}),Object(d.jsx)(L,{submitHandler:this.submitHandler}),Object(d.jsx)(g,{title:"\u0421ontacts"}),Object(d.jsx)(H,{filterValue:this.state.filter,filterUpdate:this.filterUpdate}),Object(d.jsx)(P,{filtered:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(a.Component),V=U;n(21);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(V,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.edddd698.chunk.js.map