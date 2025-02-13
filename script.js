document.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let scrollY = window.scrollY;
    let triggerHeight = window.innerHeight * 0.5;

    if (scrollY > triggerHeight) {
        header.classList.add("scrolled")
    }

    else {
        header.classList.remove("scrolled")
    }
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".bottom-container", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".bottom-container",
            start: "top 60%",
            toggleActions: "play reverse play reverse",
        }
    });
});