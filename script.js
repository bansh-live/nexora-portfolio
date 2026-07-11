/*==========================================
BACK TO TOP
==========================================*/

const backTop = document.querySelector(".back-top");

if (backTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {
            backTop.classList.add("show");
        } else {
            backTop.classList.remove("show");
        }

    });

    backTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

/*==========================================
PRELOADER
==========================================*/

window.addEventListener("load", () => {

    const preloader = document.querySelector(".preloader");

    if (preloader) {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 1200);

    }

});

/*==========================================
SCROLL PROGRESS
==========================================*/

const progressBar = document.querySelector(".scroll-progress");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const pageHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const progress = (scrollTop / pageHeight) * 100;

        progressBar.style.width = progress + "%";

    });

}

/*==========================================
MOBILE MENU
==========================================*/

const menuButton = document.querySelector(".mobile-navigation-toggle");
const closeButton = document.querySelector(".close-navigation");
const mobileMenu = document.querySelector(".mobile-navigation");
const overlay = document.querySelector(".navigation-overlay");

function openMenu() {

    mobileMenu.classList.add("active");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeMenu() {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "";

}

if (menuButton && closeButton && mobileMenu && overlay) {

    menuButton.addEventListener("click", openMenu);

    closeButton.addEventListener("click", closeMenu);

    overlay.addEventListener("click", closeMenu);

}

/*==========================================
HEADER SCROLL
==========================================*/

const header = document.querySelector(".site-header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    });

}

/*==========================================
ACTIVE MENU
==========================================*/

const navigationLinks = document.querySelectorAll(".navigation-menu a");

if (navigationLinks.length) {

    navigationLinks.forEach(link => {

        link.addEventListener("click", function () {

            navigationLinks.forEach(item => {

                item.classList.remove("current-page");

            });

            this.classList.add("current-page");

        });

    });

}

/*==========================================
MOBILE ACTIVE LINK
==========================================*/

const mobileLinks = document.querySelectorAll(".mobile-navigation a");

if (mobileLinks.length) {

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (mobileMenu && overlay) {

                closeMenu();

            }

        });

    });

}

/*==========================================
HERO PARALLAX
==========================================*/

const heroImage = document.querySelector(".hero-image");

if (heroImage) {

    document.addEventListener("mousemove", (e) => {

        let x = (window.innerWidth / 2 - e.pageX) / 45;

        let y = (window.innerHeight / 2 - e.pageY) / 45;

        heroImage.style.transform =
            `translate(${x}px,${y}px)`;

    });

}

/*==========================================
REVEAL ANIMATION
==========================================*/

const revealItems = document.querySelectorAll(
    ".hero-content,.hero-visual"
);

if (revealItems.length) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-element");

            }

        });

    });

    revealItems.forEach(item => {

        observer.observe(item);

    });

}

/*==========================================
PORTFOLIO FILTER
==========================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-card");

if (filterButtons.length && portfolioItems.length) {

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active-filter");
            });

            button.classList.add("active-filter");

            const filter = button.dataset.filter;

            portfolioItems.forEach(item => {

                if (
                    filter === "all" ||
                    item.dataset.category === filter
                ) {

                    item.style.display = "block";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}

/*==========================================
COUNTER
==========================================*/

const counters = document.querySelectorAll(".counter");

if (counters.length) {

    const counterObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            function update() {

                const increment = Math.ceil(target / 60);

                count += increment;

                if (count < target) {

                    counter.textContent = count + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.textContent = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        });

    });

    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}

/*==========================================
TESTIMONIAL SLIDER
==========================================*/

const track = document.querySelector(".testimonial-track");
const slides = document.querySelectorAll(".testimonial-card");

const next = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn");

if (track && slides.length && next && prev) {

    let index = 0;

    function updateSlider() {

        track.style.transform =
            `translateX(-${index * 100}%)`;

    }

    next.addEventListener("click", () => {

        index++;

        if (index >= slides.length) {

            index = 0;

        }

        updateSlider();

    });

    prev.addEventListener("click", () => {

        index--;

        if (index < 0) {

            index = slides.length - 1;

        }

        updateSlider();

    });

    setInterval(() => {

        index++;

        if (index >= slides.length) {

            index = 0;

        }

        updateSlider();

    }, 5000);

}

/*==========================================
CUSTOM CURSOR
==========================================*/

const dot = document.querySelector(".cursor-dot");
const ring = document.querySelector(".cursor-ring");

if (dot && ring) {

    document.addEventListener("mousemove", (e) => {

        dot.style.left = e.clientX + "px";
        dot.style.top = e.clientY + "px";

        ring.style.left = e.clientX + "px";
        ring.style.top = e.clientY + "px";

    });

    const hoverItems =
        document.querySelectorAll("a,button");

    hoverItems.forEach(item => {

        item.addEventListener("mouseenter", () => {

            ring.classList.add("active");

        });

        item.addEventListener("mouseleave", () => {

            ring.classList.remove("active");

        });

    });

}

/*==========================================
MAGNETIC BUTTON
==========================================*/

const magneticButtons =
    document.querySelectorAll(".magnetic-btn");

if (magneticButtons.length) {

    magneticButtons.forEach(button => {

        button.addEventListener("mousemove", (e) => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const moveX =
                (x - rect.width / 2) * 0.18;

            const moveY =
                (y - rect.height / 2) * 0.18;

            button.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0,0)";

        });

    });

}


/*==========================================
MOUSE GLOW
==========================================*/

const glow = document.querySelector(".mouse-glow");

if (glow) {

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

    });

    function glowAnimation() {

        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        glow.style.left = currentX + "px";
        glow.style.top = currentY + "px";

        requestAnimationFrame(glowAnimation);

    }

    glowAnimation();

}

/*==========================================
GSAP
==========================================*/

if (typeof gsap !== "undefined") {

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    /*-------------------------
    HERO ANIMATION
    -------------------------*/

    if (document.querySelector(".hero-title")) {

        gsap.from(".hero-title", {

            y: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out"

        });

    }

    if (document.querySelector(".hero-text")) {

        gsap.from(".hero-text", {

            y: 60,
            opacity: 0,
            duration: 1,
            delay: .2,
            ease: "power3.out"

        });

    }

    if (document.querySelector(".hero-btns")) {

        gsap.from(".hero-btns", {

            y: 50,
            opacity: 0,
            duration: 1,
            delay: .4,
            ease: "power3.out"

        });

    }

    if (document.querySelector(".hero-image")) {

        gsap.from(".hero-image", {

            x: 120,
            opacity: 0,
            duration: 1,
            delay: .5,
            ease: "power3.out"

        });

    }



    /*-------------------------
    PORTFOLIO
    -------------------------*/

    if (document.querySelector(".portfolio-section")) {

        gsap.from(".portfolio-card", {

            scrollTrigger: {

                trigger: ".portfolio-section",
                start: "top 75%"

            },

            y: 80,
            opacity: 0,
            duration: .8,
            stagger: .15

        });

    }

    /*-------------------------
    BLOG
    -------------------------*/

    if (document.querySelector(".blog-section")) {

        gsap.from(".blog-card", {

            scrollTrigger: {

                trigger: ".blog-section",
                start: "top 75%"

            },

            y: 80,
            opacity: 0,
            duration: .8,
            stagger: .15

        });

    }

}

console.log("Nexora Studio JS Loaded Successfully 🚀");


if(document.querySelector(".about-hero")){

gsap.from(".section-badge",{

y:30,
opacity:0,
duration:.7

});

gsap.from(".about-title",{

y:60,
opacity:0,
duration:1,
delay:.2

});

gsap.from(".about-description",{

y:40,
opacity:0,
duration:1,
delay:.4

});

gsap.from(".about-breadcrumb",{

y:30,
opacity:0,
duration:1,
delay:.6

});

}

if(document.querySelector(".timeline")){

gsap.utils.toArray(".timeline-item").forEach((item,index)=>{

gsap.from(item,{

scrollTrigger:{
trigger:item,
start:"top 85%"
},

opacity:0,

x:index%2===0?-80:80,

duration:1

});

});

}




if(document.querySelector(".about-cta")){

gsap.from(".cta-content",{

scrollTrigger:{

trigger:".about-cta",

start:"top 80%"

},

x:-80,

opacity:0,

duration:1

});

gsap.from(".cta-action",{

scrollTrigger:{

trigger:".about-cta",

start:"top 80%"

},

x:80,

opacity:0,

duration:1

});

}

/*==========================================
FAQ
==========================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(faq=>{

            if(faq!==item){

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight=null;

            }

        });

        item.classList.toggle("active");

        const answer=item.querySelector(".faq-answer");

        if(item.classList.contains("active")){

            answer.style.maxHeight=answer.scrollHeight+"px";

        }else{

            answer.style.maxHeight=null;

        }

    });

});

/*==========================================
SHOWCASE FILTER
==========================================*/

const showcaseButtons = document.querySelectorAll(".showcase-filter");
const showcaseCards = document.querySelectorAll(".showcase-box");

if (showcaseButtons.length && showcaseCards.length) {

    showcaseButtons.forEach(button => {

        button.addEventListener("click", () => {

            // Active Button
            showcaseButtons.forEach(btn => {
                btn.classList.remove("active-showcase");
            });

            button.classList.add("active-showcase");

            const selectedCategory = button.getAttribute("data-project");

            showcaseCards.forEach(card => {

                const cardCategory = card.getAttribute("data-project");

                if (
                    selectedCategory === "all" ||
                    selectedCategory === cardCategory
                ) {

                    card.style.display = "block";

                    setTimeout(() => {

                        card.style.opacity = "1";
                        card.style.transform = "translateY(0)";

                    }, 100);

                } else {

                    card.style.opacity = "0";
                    card.style.transform = "translateY(40px)";

                    setTimeout(() => {

                        card.style.display = "none";

                    }, 300);

                }

            });

        });

    });

}

/*==========================================
PROJECT STATS COUNTER
==========================================*/

const statNumbers = document.querySelectorAll(".stats-count");

if(statNumbers.length){

const statObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = Number(counter.dataset.count);

let current = 0;

const increase = Math.ceil(target/60);

const updateCounter = ()=>{

current += increase;

if(current < target){

counter.textContent = current;

requestAnimationFrame(updateCounter);

}else{

counter.textContent = target;

}

};

updateCounter();

statObserver.unobserve(counter);

}

});

},{threshold:.5});

statNumbers.forEach(counter=>{

statObserver.observe(counter);

});

}

/*==========================================
PORTFOLIO TESTIMONIAL
==========================================*/

const pfTrack=document.querySelector(".pf-testimonial-track");

const pfNext=document.querySelector(".pf-next");

const pfPrev=document.querySelector(".pf-prev");

if(pfTrack && pfNext && pfPrev){

const card=pfTrack.querySelector(".pf-testimonial-card");

const gap=30;

const move=card.offsetWidth+gap;

pfNext.onclick=()=>{

pfTrack.scrollBy({

left:move,

behavior:"smooth"

});

};

pfPrev.onclick=()=>{

pfTrack.scrollBy({

left:-move,

behavior:"smooth"

});

};

}

/*==========================================
NEWSLETTER
==========================================*/

const newsletterForm=document.querySelector(".blog-newsletter-form");

if(newsletterForm){

newsletterForm.addEventListener("submit",function(e){

e.preventDefault();

const message=document.querySelector(".newsletter-message");

message.classList.add("show");

this.reset();

setTimeout(()=>{

message.classList.remove("show");

},3000);

});

}