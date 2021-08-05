import {gsap} from "gsap";

window.addEventListener('load', animation)

function animation() {
    const TL = gsap.timeline({repeat: -1})

    TL
        .from('.vertical-slider p ', {y: 100, autoAlpha: 0, duration: 0.75, stagger: 0.75}) //när varje emoji dyker upp
        .to('.vertical-slider p ', {y: -100, autoAlpha: 0, duration: 0.75, stagger: 0.75}, 0.75) // när varje emoji fadear iväg

}