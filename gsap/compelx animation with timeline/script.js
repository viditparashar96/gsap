let tl=gsap.timeline();
tl.timeScale(0.5)  //for maintain the speed
tl.to(".box1",{
    opacity:0,
    scale:0,
    duration:2,
    ease:Power1
})
tl.to(".box2",{
  x:-200,
  duration:1,
  ease:Power1
})
tl.to(".box3",{
   x:-200,
   duration:1,
   rotate:360,
   ease:Power1.in
})
