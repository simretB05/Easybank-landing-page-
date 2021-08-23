
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
 dropDown.classList.toggle("change")
 bars.classList.remove("show")
  close.classList.add("show") 
 
})
close.addEventListener("click", function () {
   
    dropDown.classList.toggle("change")
    bars.classList.remove("close")
    close.classList.add("img") 
})

// const dropDown= document.querySelector(".sb1")
// const bars= document.querySelector(".bars")


// bars.addEventListener("click", function(){
//     dropDown.classList.toggle("change")
// console.log(bars);
// })

// const dropDown= document.querySelector(".sb1")
// const bars= document.querySelector(".bars")
// const closeDown= document.querySelector(".close")
// const close= document.querySelector(".close")

// bars.addEventListener("click",function(){
//     if(document.querySelector(".bars")){
//     dropDown.classList.toggle("change")
//     }
// console.log(bars);
// })

// close.addEventListener("click",function(){
//     if(document.querySelector(".close")){
// closeDown.classList.toggle("unchange")
//     }

// console.log(close);
// })