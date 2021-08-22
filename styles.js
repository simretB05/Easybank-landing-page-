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


// const dropDown= document.querySelector(".sb1")
// const bars= document.querySelector(".bars")


// bars.addEventListener("click", function(){
//     dropDown.classList.toggle("change")
// console.log(bars);
// })

const dropDown= document.querySelector(".sb1")
const bars= document.querySelector(".bars")
const closeDown= document.querySelector(".close")
const close= document.querySelector(".close")

bars.addEventListener("click",function(){
    if(document.querySelector(".bars")){
    dropDown.classList.toggle("change")
    }

console.log(bars);
})

close.addEventListener("click",function(){
    if(document.querySelector(".close")){
closeDown.classList.toggle("unchange")
    }

console.log(close);
})