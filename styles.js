
var staggerAnim
const articlesSection = document.querySelector('.articles')

/**
 * Setting up stagger animation for article card
 */
const setStaggerAnimation = () => {
    staggerAnim = TweenMax.staggerFromTo('.article',
        1,
        { opacity: 0, top: -50 },
        { opacity: 1, top: 0 },
        0.2)

    staggerAnim.pause()
}

/**
 * Setting up intersection observer for .articles section
 */
const setIntersectionObserver = () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            //  Play stagger animation when reaches .articles
            if (entry.intersectionRatio > 0) {
                staggerAnim.play()
            }
            //  Reset stagger animation when not .articles
            else {
                staggerAnim.reverse()
            }
        })
    })

    observer.observe(articlesSection)
}

setStaggerAnimation()
setIntersectionObserver()



const bars = document.querySelector(".bars")
const dropDown = document.querySelector(".sb1")
const close= document.querySelector(".close")


bars.addEventListener("click", function () {
    close.classList.add("show") 
 dropDown.classList.toggle("change")
 bars.classList.remove("show")
bars.classList.remove("close")

 
})
close.addEventListener("click", function () {
    bars.classList.add("show")
   
    dropDown.classList.toggle("change")
    close.classList.remove("close") 
   
})

