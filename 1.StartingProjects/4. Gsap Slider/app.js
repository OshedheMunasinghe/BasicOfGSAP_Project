import {gsap} from "gsap";

const btnRight = document.querySelector('.btn-next')
const btnLeft = document.querySelector('.btn-prev')
const container = document.querySelector('.container')
const slides = Array.from(document.querySelectorAll('.slide'))
const indexIndicator = document.querySelector('.counter span:nth-child(1)')
let index = 0

function vibrateAnimation(){
    gsap.to(container, {
        keyframes: [
            {duration: 0.1, x: -4},
            {duration: 0.1, x: 4},
            {duration: 0.1, x: -4},
            {duration: 0.1, x: -0}
        ]
    })
}
function animRight() {
    const TLRIGHT = gsap.timeline()
    TLRIGHT
        .set(indexIndicator, {
            innerText: index + 1
        })
        .to(slides[index], {duration: 0.6, x: 0})
}

function animLeft() {
    const TLLEFT = gsap.timeline()
    TLLEFT
        .set(indexIndicator, {
            innerText: index
        })
        .to(slides[index], {duration: 0.6, x: "-100%"})
}

btnRight.addEventListener('click', () => {
    handleDirection('next')
})

btnLeft.addEventListener('click', () => {
    handleDirection('prev')
})

function handleDirection(direction) {
    if (direction === "next") {
        if (index === slides.length - 1) {
          vibrateAnimation()
            return;
        }
        index++
        animRight()
    }//end if next
    else if (direction === 'prev') {
        //when user has clicked the limit of picture on right button
        if (index === 0) {
           vibrateAnimation()
            return;
        }
        animLeft()
        index--
    }


}