gsap.set(".box2",{
    opacity:0,
})


gsap.to(".box2",{
    opacity:1,
    duration:2,
    y:200,
    repeat:-1,
    yoyo:true

})