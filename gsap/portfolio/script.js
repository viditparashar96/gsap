var main =document.querySelector("#main");
var cursor =document.querySelector(".cursor");

main.addEventListener("mousemove",function(delt){
    cursor.style.left=delt.x+"px";
    cursor.style.top=delt.y+"px";
})

gsap.set("#midnavleft h2",{
        x:150,
        opacity:0
})
gsap.set("#midnavright span",{
        y:-160,
        // opacity:0
        
})

gsap.to("#midnavleft h2",{
        scrollTrigger:{
            trigger:"#midnav",
            // top:"20%",
            end:"-350%",
            scrub:1,
            // markers:true

        },
        x:0,
        opacity:1,
        duration:2,
        ease:Power1

})
gsap.to("#midnavright span",{
        scrollTrigger:{
            trigger:"#midnav",
            // top:"20%",
            end:"-370%",
            scrub:1,
            // markers:true

        },
        y:0,
        delay:2,
        opacity:1,
        // duration:2,
        ease:Power1

})

gsap.to("#cancha svg ",{
    scrollTrigger:{
        trigger:"#midsec",
        // top:"20%",
        
        scrub:1,
        // markers:true

    },
    rotate:360
})
gsap.to("#laptop svg ",{
    scrollTrigger:{
        trigger:"#laptop",
        // top:"20%",
        
        scrub:1,
        // markers:true

    },
    rotate:360
})
gsap.to("#office svg ",{
    scrollTrigger:{
        trigger:"#office",
        // top:"20%",
        
        scrub:1,
        // markers:true

    },
    rotate:360
})
gsap.to("#ladki svg ",{
    scrollTrigger:{
        trigger:"#ladki",
        // top:"20%",
        
        scrub:1,
        // markers:true

    },
    rotate:360
})