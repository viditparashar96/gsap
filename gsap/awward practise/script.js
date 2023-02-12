var tl=gsap.timeline({
    yoyo:true
});

gsap.set(".maintext h1",{
        y:-100,
        opacity:0
})
tl.to(".maintext h1",{
    y:0,
    opacity:1,
    ease:Power1,
    duration:1,
    // repeat:-1,
    stagger:.06
    
})
tl.to(".maintext h1",{
    x:"-110%",
    opacity:0,
    ease:Power1,
    duration:1,
    stagger:.02
},"a")
tl.to(".hero-text",{
    x:"-100%",
    stagger:0.1,
    duration:2,
    ease:Expo.easeInOut
},"a")
tl.to("#herobtm span",{
    x:"-110%",
    stagger:0.1,
    duration:3.6,
   
    ease:Expo.easeInOut,
    
},"a")

var fun=function back(){
    document.querySelector("#navbar").style.backgroundColor="white"
}
