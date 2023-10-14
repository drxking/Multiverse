// copypaste stuffs
width = document.querySelector('body').offsetWidth

function combine(main) {
    gsap.registerPlugin(ScrollTrigger);
    if (width > 550) {


        const locoScroll = new LocomotiveScroll({
            el: document.querySelector(main),
            smooth: true,
            multiplier: 1.7,
            lerp: 0.05,
            reloadOnContextChange: true,


        });
        // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
        locoScroll.on("scroll", ScrollTrigger.update);

        // tell ScrollTrigger to use these proxy methods for the main element since Locomotive Scroll is hijacking things
        ScrollTrigger.scrollerProxy(main, {
            scrollTop(value) {
                return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
            },
            // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector(main).style.transform ? "transform" : "fixed"
        });



        // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
        ScrollTrigger.refresh();
    }
}

combine("#main")
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


// --------------------------------------------

let pp = document.querySelector(".pp")
let puckets = document.querySelectorAll(".pucket")
puckets.forEach((pucket) => {
    let p1 = pucket.childNodes[1]
    let p2 = pucket.childNodes[3]

    pucket.addEventListener("mouseenter", () => {
        gsap.to(pucket, {
            backgroundColor: `#000`,
            color: `#F0F0F0`,
            border: `1px solid #000`
        })
        gsap.to(p1, {
            y: `-160%`
        })
        gsap.to(p2, {
            y: `-160%`
        })

    })
    pucket.addEventListener("mouseleave", () => {
        gsap.to(pucket, {
            backgroundColor: `#F0F0F0`,
            color: `#000`,
            border: `1px solid gray`,
        })

        gsap.to(p1, {
            y: `0%`
        })
        gsap.to(p2, {
            y: `0%`
        })
    })
})



if (width > 550) {
    gsap.to(".text", {
        x: `-80%`,
        backgroundColor: `#bcd65b`,
        scrollTrigger: {
            trigger: '#slide',
            scroller: '#main',
            start: `top 0%`,
            end: `500% bottom`,
            scrub: true,
            pin: true,
        }
    })
}










let stat = "off"
document.getElementById("menubtn").addEventListener("click", () => {
    if (stat == "off") {
        gsap.to("#menu", {
            right: 0,
            duration: 0.2,
            ease: Expo.easeInOut
        })
        gsap.from("#menu ul li a", {
            bottom: `-100%`,
            stagger: 0.15
        })
        stat = "on"
    }
})
document.getElementById("close").addEventListener("click", () => {
    ww = document.getElementById("menu").offsetWidth
    console.log(ww)
    if (stat == "on") {
        gsap.to("#menu", {
            right: `-${ww}px`,
            duration: 0.2,
            ease: Expo.easeInOut
        })
        stat = "off"
    }
})






let count = 0;
const timer = setInterval(function () {
    count++;
    document.getElementById("load").innerHTML = `${count}`
    if (count === 100) {
        clearInterval(timer);
    }
}, 10);




// Loading screen animation

let loadingscrn = document.querySelector(".loadingscreen")

gsap.to(loadingscrn,{
    y:`-100%`,
    delay:1.3,
    duration:1,
    ease:Expo.easeInOut
})


