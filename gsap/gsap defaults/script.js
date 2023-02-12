let tl=gsap.timeline({
  defaults:{
    duration:1,
    ease:Power1
  }
});
tl.timeScale(1)  //for maintain the speed
tl.to(".box1",{
    opacity:0,
    scale:0,
    duration:2
})
tl.to(".box2",{
  x:-200,

})
tl.to(".box3",{
   x:-200,
   
   rotate:360,
   
})
.set(".box1",{
  x:140
})
.to(".box1",{
 
  scale:1,
  opacity:1
})

