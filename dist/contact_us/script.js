gsap.to('.overlay .minov',{
    x:`100%`,
    stagger:0.1,
    delay:0.5
})














let cursor = document.querySelector("#cursor")
cursor.style.opacity = 0
document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        opacity: 1,
        x: `${dets.clientX - 7.5}px`,
        y: `${dets.clientY - 7.5}px`
    })
})
// -----------------------------------

// size of cursor increse while hovering on element
let scale2 = document.querySelectorAll(".cur-scale")
scale2.forEach((scaleIncrease) => {
    scaleIncrease.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 6
        })
    })

    scaleIncrease.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1
        })
    })

})

