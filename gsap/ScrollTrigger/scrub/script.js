gsap.from("article",{
    scrollTrigger: {
      trigger: ".cards",
      markers:true,
      scrub:1
    },
    stagger: { amount: 0.5},
    scale: 0, duration: 1 
  });
  
