import{_ as f,a as h}from"./Menu.c1295cf5.js";import{_ as v}from"./nuxt-link.d18baf46.js";import{l as b}from"./loadBackgroudImages.6dc4ef71.js";import{c as y}from"./marketing-agency-customjs.bb00222e.js";import{s as w}from"./showcase-script.157f33fa.js";import{h as x,o as a,b as t,f as e,F as l,l as d,u as c,i as B,m as _,t as o,j as p,e as i,w as S,a as j}from"./entry.f72a5078.js";const u=[{id:1,background:"/dark/assets/imgs/works/full/1.jpg",year:"2023",type:"Branding",title:"Basket Lamp"},{id:2,background:"/dark/assets/imgs/works/full/2.jpg",year:"2023",type:"Branding",title:"Moon Light"},{id:3,background:"/dark/assets/imgs/works/full/3.jpg",year:"2023",type:"Branding",title:"Red Glasses"},{id:4,background:"/dark/assets/imgs/works/full/4.jpg",year:"2023",type:"Branding",title:"Waffile Maker"},{id:5,background:"/dark/assets/imgs/works/full/5.jpg",year:"2023",type:"Branding",title:"Headphone"}],N={class:"slideshow"},F={class:"slides slides--images"},$=["data-background"],L={class:"slides slides--titles"},M={class:"slide__title text-center"},V={class:"sub-title mb-15"},C=e("br",null,null,-1),H=B('<nav class="slidenav"><div class="container"><button class="slidenav__item slidenav__item--prev cursor-pointer"><span><i class="fas fa-chevron-left"></i></span><span><span>Prev</span></span></button><button class="slidenav__item slidenav__item--next cursor-pointer"><span><span>Next</span></span><span><i class="fas fa-chevron-right"></i></span></button></div></nav>',1),T={__name:"FrameSlider",setup(m){return x(()=>{b(),y(),w.demo()}),(g,k)=>{const r=v;return a(),t("div",N,[e("div",F,[(a(!0),t(l,null,d(c(u),(s,n)=>(a(),t("div",{class:_(`slide ${n===0?"slide--current":""}`),key:s.id},[e("div",{class:"slide__img bg-img","data-background":s.background},null,8,$)],2))),128))]),e("div",L,[(a(!0),t(l,null,d(c(u),(s,n)=>(a(),t("div",{class:_(`slide ${n===0?"slide--current":""}`),key:s.id},[e("h1",M,[e("span",V,"© "+o(s.year)+" "+o(s.type),1),p(),C,e("span",null,[i(r,{to:"/dark/project-details1"},{default:S(()=>[p(o(s.title),1)]),_:2},1024)])])],2))),128))]),H])}}},R={__name:"index",setup(m){return j({titleTemplate:"%s - Frame Slider"}),(g,k)=>{const r=f,s=h,n=T;return a(),t("div",null,[i(r,{"light-mode":!0}),i(s,{"light-mode":!0}),e("main",null,[i(n)])])}}};export{R as default};
