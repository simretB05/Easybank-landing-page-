/**
 * Setting up stagger animation for article card
 */
const setStaggerAnimation = () => {
    TweenMax.staggerFromTo('.article',
        1,
        { opacity: 0, top: -50 },
        { opacity: 1, top: 0 },
        0.2)
}

setStaggerAnimation()