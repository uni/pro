import{r as t}from"./p-c785943c.js";import{u as s}from"./p-78249524.js";const i=class{constructor(s){t(this,s),this.inactive=!1,this.activate=!1,this.behavior="auto",this.timeout=100}componentDidRender(){const{behavior:t}=this;this.inactive&&!this.activate||(setTimeout((()=>{const s=document.querySelector(this.selector);if(this.offsetY){const i=(null==s?void 0:s.getBoundingClientRect().top)+window.scrollY+this.offsetY;window.scrollTo({top:i,behavior:t})}else s.scrollIntoView({behavior:t})}),this.timeout),setTimeout((()=>this.activate=!1)))}componentDidLoad(){s("uni-selection","apply")}};export{i as U}