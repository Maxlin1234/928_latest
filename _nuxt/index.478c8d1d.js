import{_ as k}from"./Navbar.1bfc35d7.js";import{_ as b}from"./Header.49cc2382.js";import{_ as D}from"./nuxt-link.d18baf46.js";import{i as v}from"./initIsotope.c6ab8537.js";import{h as x,o as i,b as a,f as e,F as g,l as _,u as h,m as p,t as o,e as s,w as l,j as d,a as C,r as j}from"./entry.f72a5078.js";const T=[{id:1,title:"All",filter:"*",count:"08"},{id:2,title:"Branding",filter:".brand",count:"03"},{id:3,title:"Mobile App",filter:".app",count:"02"},{id:4,title:"Creative",filter:".web",count:"03"}],A=[{id:1,filter:"web",image:"/dark/assets/imgs/works/grid/1.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"1"},{id:2,filter:"app",image:"/dark/assets/imgs/works/grid/10.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"},{id:3,filter:"brand",image:"/dark/assets/imgs/works/grid/3.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"6",height:"1"},{id:4,filter:"web",image:"/dark/assets/imgs/works/grid/4.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"},{id:5,filter:"brand",image:"/dark/assets/imgs/works/grid/5.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"6",height:"1"},{id:6,filter:"app",image:"/dark/assets/imgs/works/grid/6.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"6",height:"2"},{id:7,filter:"web",image:"/dark/assets/imgs/works/grid/7.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"},{id:8,filter:"brand",image:"/dark/assets/imgs/works/grid/8.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"}],m={filters:T,gallery:A},M={class:"portfolio section-padding pb-100"},R={class:"container-xxl"},$={class:"row"},B={class:"filtering col-12 mb-80 text-center"},F={class:"filter"},N=e("span",{class:"text"},"Filter By :",-1),P=["data-filter","data-count"],S={class:"gallery metro text-center"},V={class:"row"},H={class:"item-img o-hidden"},L={class:"inner wow"},W=["src"],z={class:"info"},E={class:"sub-title tag"},I=e("br",null,null,-1),O={__name:"Metro",setup(u){return x(()=>{setTimeout(()=>{v()},100)}),(c,f)=>{const r=D;return i(),a("section",M,[e("div",R,[e("div",$,[e("div",B,[e("div",F,[N,(i(!0),a(g,null,_(h(m).filters,(t,n)=>(i(),a("span",{"data-filter":t.filter,class:p(n===0?"active":""),"data-count":t.count,key:t.id},o(t.title),11,P))),128))])])]),e("div",S,[e("div",V,[(i(!0),a(g,null,_(h(m).gallery,t=>(i(),a("div",{class:p(`col-lg-${t.width} col-md-6 items ${t.filter} info-overlay height-${t.height} mb-30`),key:t.id},[e("div",H,[s(r,{to:"/dark/project-details1",class:"imago wow"},{default:l(()=>[e("div",L,[e("img",{src:t.image,alt:"image"},null,8,W)])]),_:2},1024),e("div",z,[e("h6",null,[s(r,{to:"/dark/project-details1"},{default:l(()=>[d(o(t.title),1)]),_:2},1024)]),e("span",E,[s(r,{to:"/dark/project-details1"},{default:l(()=>[d("© "+o(t.year)+" ",1),I,d(" "+o(t.type),1)]),_:2},1024)])])])],2))),128))])])])])}}},q={class:"main-bg"},X={__name:"index",setup(u){const c={subTitle:"Our Works",title:"Work Metro."};return C({titleTemplate:"%s - Portfolio Metro",bodyAttrs:{class:"main-bg"}}),(f,r)=>{const t=k,n=b,w=O,y=j("StartupFooter");return i(),a("div",null,[s(t,{lightMode:!0}),e("main",q,[s(n,{data:c}),s(w)]),s(y,{subBg:!0,lightMode:!0})])}}};export{X as default};
