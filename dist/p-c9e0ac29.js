import{r,h as s,c as e,g as i}from"./p-1e4a48b9.js";import{u as n}from"./p-78249524.js";const a=r=>null!=r,t=class{constructor(s){r(this,s),this.icons="mat"}render(){const{type:r,name:i,color:n,size:t,angle:o}=this,l={type:r,name:i,color:n,size:t,angle:o},u=`uni-icon-${this.icons}`,c=function(r){return"string"==typeof r}(this.value)?JSON.parse(this.value):this.value,d=(r=>a(r)&&Array.isArray(r))(c)?c.filter((r=>!!(null==r?void 0:r.name))):[];return s(e,{class:"uni-breadcrumbs"},d.map(((r,e)=>d.length-1!==e?a(r.name)?s("div",{class:"uni-breadcrumbs"},a(r.path)?s("uni-router-link-wrap",{params:r.params,noParams:r.noParams,reload:r.reload,class:"uni-breadcrumbs-link"},s("a",{href:r.path},r.name)):r.name,d[e+1].name?this.name?s(u,Object.assign({},l)):s("span",{class:"uni-breadcrumbs-divider"}," / "):""):"":r.name)),s("slot",null))}componentDidLoad(){n("uni-breadcrumbs","point")}get el(){return i(this)}};t.style=".uni-breadcrumbs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.uni-breadcrumbs-divider{padding:0 5px}.uni-breadcrumbs-home{cursor:pointer}.uni-breadcrumbs-link{display:-ms-flexbox;display:flex;cursor:pointer;text-decoration:underline}";export{t as U}