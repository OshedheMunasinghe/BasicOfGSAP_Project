const topRocket = document.querySelector(".top-rocket");
const midRocket = document.querySelector(".mid-rocket");
const rocket = document.querySelector(".bot-rocket");
const supply = document.querySelector(".supply");
const allBlocs = document.querySelectorAll(".bloc");

const allOffsets = [105, 206, 848];

gsap.utils.toArray([".bloc2", ".bloc3", ".bloc4"]).forEach((bloc, index) => {

  gsap.to(bloc, {
    y: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".container-scroll",
      // refais la vidéo en Français pour ça 
      // utilise des pourcentages
      start: "top bottom-=370px",
      end: `+=${allOffsets[index]}`,
    //   markers: true,
      scrub: true,
    }
  })
});

allBlocs.forEach((bloc, index) => {
// pourquoi utiliser set ici ?
    if(index === 3){
        ScrollTrigger.create({ 
                trigger: bloc,
                start: 'top+=150 center',
                onEnter: () => {
                    bloc.classList.add('active')
                },
                onLeaveBack: () => {
                    bloc.classList.remove('active')
                },
                // markers: true
            })
    
            return;
        }

    

        ScrollTrigger.create({ 
            trigger: bloc,
            // utilise pourcentage
            start: 'top center+=100',
            onEnter: () => {
                bloc.classList.add('active')
            },
            onLeaveBack: () => {
                bloc.classList.remove('active')
            },
            // markers: true
        })

 

})