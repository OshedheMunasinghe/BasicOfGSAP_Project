ScrollTrigger.create({
    trigger: ".event1",
    pin: ".event1 .pinSection",
    markers: true,
    start: "top top",
    end: "bottom top",
  });

  ScrollTrigger.create({
    trigger: ".event1",
    pin: ".event2 .pinSection",
    markers: true,
    start: "top top",
    end: "bottom top-=100%",
  });

