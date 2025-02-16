function setFullHeight() {
    const height = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.setProperty('--real-height', `${height}px`);
}

window.addEventListener('resize', setFullHeight);
window.addEventListener('orientationchange', setFullHeight);
window.addEventListener('load', setFullHeight);
setFullHeight();

document.addEventListener("scroll", function() {
    let header = document.querySelector(".header");
    let scrollY = window.scrollY;
    let triggerHeight = window.innerHeight * 0.5;

    if (scrollY > triggerHeight) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
        iniciarAnimacionesGSAP();
    }, 50);
});

function iniciarAnimacionesGSAP() {
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

    gsap.utils.toArray([".cheap-img", ".destornillador"]).forEach(element => {
        gsap.to(element, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: 10,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play reverse play reverse",
            }
        });
    });

    gsap.utils.toArray([".cellphone1", ".broken-phone"]).forEach(element => {
        gsap.to(element, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotate: -15,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                toggleActions: "play reverse play reverse",
            }
        });
    });

    gsap.utils.toArray([".phones-title", ".service-title"]).forEach(element => {
        gsap.to(element, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play reverse play reverse",
            }
        });
    });

    gsap.utils.toArray([".phones-paragraph", ".service-paragraph"]).forEach(element => {
        gsap.to(element, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: element,
                start: "top 75%",
                toggleActions: "play reverse play reverse",
            }
        });
    });
}

function configurarVideoObserver(videoClass) {
    let video = document.querySelector(videoClass);

    if (!video) return; // Evita errores si no existe el video

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                video.play();
            } else {
                video.pause();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(video);
}

document.addEventListener("DOMContentLoaded", function () {
    configurarVideoObserver(".video1");
    configurarVideoObserver(".video2");
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-container");
    const lightbox = document.querySelector(".lightbox");
    const lightboxImg = document.querySelector("#lightbox-img");

    images.forEach(container => {
        let before = container.querySelector(".before");
        let after = container.querySelector(".after");
        let isBeforeVisible = true;

        setInterval(() => {
            isBeforeVisible = !isBeforeVisible;
            before.style.opacity = isBeforeVisible ? "1" : "0";
            after.style.opacity = isBeforeVisible ? "0" : "1";
        }, 3000);
    });

    images.forEach(container => {
        container.addEventListener("click", () => {
            let before = container.querySelector(".before");
            let after = container.querySelector(".after");

            let computedBeforeOpacity = window.getComputedStyle(before).opacity;
            let imgSrc = computedBeforeOpacity === "1" ? before.src : after.src;

            lightboxImg.src = imgSrc;
            lightbox.classList.add("active");
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});