
gsap.fromTo('.cookie-container',{scale:0.2},{scale:1,duration:1.5,ease: "back.out(1.7)"});

gsap.fromTo('.headline',{y:-100,opacity:0},{y:0,opacity:1,duration:1});

gsap.fromTo('.text',{y:200,opacity:0},{y:0,duration:2,opacity:1,ease: "expo.out",delay:0.2});

gsap.fromTo('.close',{scale:0.2,opacity:0},{scale:1,opacity:100,duration:1.4,ease: "power2.out",delay:1});

gsap.fromTo('.cookie',{x:-100,rotation:-90},{x:0,rotation:0,duration:1.5,ease:"power2.out"});

gsap.to('#crumbs',{y:-50,ease:'power2.out',repeat:3,yoyo:true},'>')

const OKbutton = document.querySelector(".close");
OKbutton.addEventListener('click',()=>{
    let sounds = new Audio("/assets/bubbles.mp3");
    sounds.play();
    gsap.to(".cookie-container",{opacity:0,scale:0.95});
})