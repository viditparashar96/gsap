let tl=gsap.timeline({
  defaults:{
    duration:1,
    rotation:180,
    yoyo:true,
    repeat:-1,
    
   
  }
});
tl.timeScale(1)  //for maintain the speed
tl.to(".box1",{
  ease:"elastic.out"
})
tl.to(".box2",{
  ease:"none"

})
tl.to(".box3",{
   
  ease:Power2,
   
   
})
tl.to(".box4",{
   
  ease:Power2.out,
   
   
})


