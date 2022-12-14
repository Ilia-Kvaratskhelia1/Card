const timeAn = gsap.timeline({default:{duration:0.75 ,ease:"power1.out"}})

timeAn.fromTo(".main-coctaile" , {scale:0} , {scale:1});
timeAn.fromTo(".main-text" , {opacity:0 , x:50} , {opacity:1 , x:0})
timeAn.fromTo("#svg4268" , {opacity:0 , x:-50} , {opacity:1 , x:0})

const btn = document.querySelector("button");

btn.addEventListener('click' , ()=>{
gsap.to(".main-coctaile" , {opacity:0 , y:100 , duration:0.75 , ease:'power1.out'});

})
