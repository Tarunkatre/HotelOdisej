function init() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

    document.addEventListener("wheel", function (dets) {
        if (dets.offsetY > 600) {
            if (dets.deltaY > 0) {
                gsap.to("#nav", {
                    top: "-100px",
                    delay: .2,
                    duration: .3,
                    ease: Power0.easeNone,
                })
            }
        }
        if (dets.deltaY < 0) {
            gsap.to("#nav", {
                backgroundColor: "#fff",
                top: "0px",
                duration: .3,
                ease: Power0.easeNone,
            })
        }

    })

}
init();
gsap.from("#page1 img", {
    scale: 0.5,
    borderRadius: "50px",
    delay: 1,
    duration: 1,
    ease: "easeIn",
})
gsap.to("#nav svg", {
    opacity: 1,
    duration: 1,
    scale: 0.2,

})
gsap.to("#nav svg", {
    scale: 0.1,
    top: "-190px",
    scrollTrigger: {
        trigger: "#page1 img",
        scroller: "#main",
        start: "top 25%",
        end: "top 23%",
        scrub: 1,
    }
})
gsap.to("#page1", {
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 40%",
        end: "top 0%",
        scrub: 2,
    }
})
gsap.to("#nav", {
    opacity: 1,
    delay: 1.4,
    top: 0,
    duration: 1.5,
    ease: "ease-out",
})
var a = document.querySelectorAll("#text2 h2")
a.forEach(function (elem) {
    var text = elem.textContent
    var splitText = text.split("")
    var tag = "";
    splitText.forEach(function (e) {
        tag = tag + `<span>${e}</span>`
    })
    elem.innerHTML = tag
})

gsap.to("#page2 #text2 h2 span", {
    color: "#E3E3C4",
    stagger: 1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 30%",
        end: "top 0% ",
        scrub: 2,
    }
})
gsap.to("#page3 #text2 h2 span", {
    color: "#454d35",
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 0%",
        end: "top 0% ",
        scrub: 2,
    }
})
gsap.to("#page6 #text2 h2 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page6",
        scroller: "#main",
        start: "top 50%",
        end: "top 20% ",
        scrub: 2,
    }
})
gsap.to("#page7 #text2 h2 span", {
    color: "#434B34",
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        start: "top 0%",
        end: "top -40% ",
        scrub: 2,
    }
})
gsap.to("#page9 #text2 h2 span", {
    color: "#E3E3C4",
    stagger: 0.1,
    scrollTrigger: {
        trigger: "#page9",
        scroller: "#main",
        start: "top 40%",
        end: "top -10% ",
        scrub: 2,
    }
})
gsap.to("#svg1,#svg2", {
    right: "5vw",
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        scrub: 3,
    }
})
gsap.to("#svg3,#svg4", {
    left: "20vw",
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
        trigger: "#top6",
        scroller: "#main",
        scrub: 3,
    }
})

gsap.to("#svg5,#svg6", {
    right: "50px",
    stagger: 0.05,
    duration: 1,
    scrollTrigger: {
        trigger: "#page7",
        scroller: "#main",
        scrub: 5,
    }
})
gsap.to("#svg7,#svg8", {
    left: "-40vw",
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
        trigger: "#page9",
        scroller: "#main",
        scrub: 3,
    }
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

gsap.to("#left7", {
    transform: "translateX(-50%)",
    duration: 1,
    scrollTrigger: {
        trigger: "#center7",
        scroller: "#main",
        scrub: 1
    }
})
gsap.to("#right7", {
    transform: "translateX(50%)",
    duration: 1,
    scrollTrigger: {
        trigger: "#center7",
        scroller: "#main",
        scrub: 1
    }
})
gsap.to("#mid7", {
    opacity: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#center7",
        scroller: "#main",
        scrub: 1,
        start: "top 50%",
        end: "top 50%"
    }
})
function imagescroller(page, pageimg) {
    gsap.from(pageimg, {
        opacity: 0.2,
        duration: 1,
        ease: "easeIn",
        y: "10vh",
        scrollTrigger: {
            scroller: "#main",
            trigger: pageimg,
            start: "top 60%",
            end: "top 50%",
            scrub: 3,
        }
    })
}
function select(d) {
    var page = document.querySelector(`#page${d}`)
    var pageimg = document.querySelectorAll(`#page${d} img`)
    imagescroller(page, pageimg);
}

select(3)
select(6)
select(9)
select(10)