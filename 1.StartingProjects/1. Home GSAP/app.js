import {gsap} from "gsap";

//plocka elementer där du vill animera
const navLinks = document.querySelectorAll('nav a')
const imgNav = document.querySelectorAll('nav img')
const title = document.querySelector('h1')
const verticalLine = document.querySelector('.middle-line')
const grapesLogo = document.querySelector('.home-content img')
const homeBtn = document.querySelector('.home-content button')

//reveal animation, when the windows has fully finish loading then start the animation
window.addEventListener('load', reveralAnim)

function reveralAnim() {
    const TLFADE = gsap.timeline()

    TLFADE.from(title, {autoAlpha: 0, y: -50, delay: 0.2})
        .to(verticalLine, {height: 200}, '-=0.2')
        .from(grapesLogo, {autoAlpha: 0, y: -50,}, '-=0.2')
        .from(homeBtn, {autoAlpha: 0, y: -50,}, '-=0.2')
        .from(navLinks, {autoAlpha:0 , y:-50, duration: 0.4, stagger: 0.1}, '-=0.2')
        .from(imgNav, {autoAlpha: 0, y:-50})
}