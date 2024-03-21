let currentIndex = 0
let maxIndex = -1
let state = 0

function next() {
    if (maxIndex === -1) init();

    if (currentIndex >= maxIndex) {
        document.getElementsByClassName('reviews-cards')[0].style.setProperty('transform', `translateX(${0}px)`)
        currentIndex = 0
        state = 0
    } else {
        currentIndex++
        state = state - 720
        document.getElementsByClassName('reviews-cards')[0].style.setProperty('transform', `translateX(${state}px)`)
    }
}

function prev() {
    if (maxIndex === -1) init();

    if (0 >= currentIndex) {
        document.getElementsByClassName('reviews-cards')[0].style.setProperty('transform', `translateX(-${1440}px)`)
        currentIndex = maxIndex
        state = -1440
    } else {
        currentIndex--
        state = state + 720
        document.getElementsByClassName('reviews-cards')[0].style.setProperty('transform', `translateX(${state}px)`)
    }
}

function init() {
    maxIndex = document.getElementsByClassName('reviews-card').length / 2
}