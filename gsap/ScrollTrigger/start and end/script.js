gsap.from("article",{
    scrollTrigger: {
      trigger: ".cards",
      markers:true,
      start:"top top",
      end:"+=100",
    },
    stagger: { amount: 0.5},
    scale: 0, duration: 1 
  });
  
