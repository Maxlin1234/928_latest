import{_ as M}from"./Navbar.1bfc35d7.js";import{a as H,h as f,s as S,r as o,b,e,f as i,o as v}from"./entry.f72a5078.js";import"./nuxt-link.d18baf46.js";const w={id:"smooth-wrapper"},T={id:"smooth-content"},y={class:"main-bg"},B={__name:"index",setup(W){H({titleTemplate:"%s - Main",bodyAttrs:{class:"home-main-crev main-bg"}});function r(){if(window.innerWidth<991&&document.querySelector(".thecontainer").style.maxHeight&&location.reload(),window.innerWidth>991&&!document.querySelector(".thecontainer").style.maxHeight){gsap.registerPlugin(ScrollTrigger);let t=gsap.utils.toArray(".panel");gsap.to(t,{xPercent:-100*(t.length-1),ease:"none",scrollTrigger:{trigger:".thecontainer",pin:!0,scrub:1,end:()=>"+="+document.querySelector(".thecontainer").offsetWidth}})}}return f(()=>{if(gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollTrigger.normalizeScroll(!0),ScrollSmoother.create({smooth:2,effects:!0}),window.innerWidth>991){gsap.registerPlugin(ScrollTrigger);let t=gsap.utils.toArray(".panel");gsap.to(t,{xPercent:-100*(t.length-1),ease:"none",scrollTrigger:{trigger:".thecontainer",pin:!0,scrub:1,end:()=>{var n;return"+="+((n=document.querySelector(".thecontainer"))==null?void 0:n.offsetWidth)}}})}if(window.innerWidth>991){gsap.set(".footer-container",{yPercent:-50});const t=gsap.timeline({paused:!0});t.to(".footer-container",{yPercent:0,ease:"none"}),ScrollTrigger.create({trigger:"main",start:"bottom bottom",end:"+=50%",animation:t,scrub:!0})}window.addEventListener("resize",r)}),S(()=>{window.removeEventListener("resize",r)}),(t,n)=>{const a=M,s=o("HomeMainHeader"),c=o("HomeMainAbout"),m=o("HomeMainMarq"),l=o("HomeMainClients"),g=o("HomeMainServices"),d=o("HomeMainWorks"),u=o("HomeMainServicesTabs"),_=o("HomeMainTestimonials"),p=o("HomeMainBlog"),h=o("HomeMainFooter");return v(),b("div",w,[e(a,{mainBg:!0,noStatic:!0,lightMode:!0}),i("div",T,[i("main",y,[e(s),e(c),e(m),e(l,{lightMode:!0}),e(g,{lightMode:!0}),e(d),e(u,{lightMode:!0}),e(_,{lightMode:!0}),e(p)]),e(h,{lightMode:!0})])])}}};export{B as default};
