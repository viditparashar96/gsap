
gsap.set("#kala-banda-border",{
    scale:.5
})
gsap.set("#cart-border",{
    x:1500
})
gsap.set("#backtext h1",{
    opacity:0
})
// tl.to("#kala-banda-border",{
   
//     scrollTrigger:{
//         trigger:"main2",
//         markers:true,
//         scrub:1,
//         // end:"50%"
//     },
//     delay:2,
//     x:200,
//     scale:1

// })

gsap.to("#kala-banda-border",{
    scrollTrigger:{
        trigger:"#kala-banda-border",
        markers:true
    },
   scale:1,
   delay:1,
   ease:Power1,
})

gsap.to("#kala-banda-border",{
   x:180,
  
   ease:Power1,
   y:140,
   duration:1,
  
})
gsap.to("#backtext h1",{
    scrollTrigger:{
        trigger:"#backtext",
        markers:true
    },
    opacity:1,
    stagger:1
},)
gsap.to("#cart-border",{
    scrollTrigger:{
        trigger:"#cart-border"
    },
  x:900,
  delay:1,
  duration:2,
  ease:Power1.out
  
},)



