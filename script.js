let serviceOuters = document.querySelectorAll(".service-outer");
let sliderBtns = document.querySelectorAll(".slider-contact-btn");

sliderBtns.forEach(sliderBtn => {
    sliderBtn.addEventListener("mouseover", () => {
        sliderBtn.querySelector(".face img").setAttribute("src", "./images/face2.svg")
    })
    sliderBtn.addEventListener("mouseleave", () => {
        sliderBtn.querySelector(".face img").setAttribute("src", "./images/face1.svg")
    })
})

serviceOuters.forEach(item => {
    item.querySelector(".service").addEventListener("mouseenter", () => {
        let paragraph = item.querySelector("p");
        let arrow = item.querySelector(".arrow");

        paragraph.style.position = "relative"
        paragraph.style.transform = "translateX(0)"
        paragraph.style.opacity = "1"
        arrow.style.pointerEvents = "auto"
        arrow.style.opacity = "1"
    })
    item.querySelector(".service").addEventListener("mouseleave", () => {
        let paragraph = item.querySelector("p");
        let arrow = item.querySelector(".arrow");

        paragraph.style.transform = "translateX(-100px)"
        paragraph.style.opacity = "0"
        arrow.style.pointerEvents = "none"
        arrow.style.opacity = "0"

        setTimeout(() => {
            paragraph.style.position = "absolute"
        }, 150)
    })

})

let reviews = document.querySelectorAll(".review");
let reviewTexts = ["We were impressed by their ability to take our ideas and refine them into a polished, high-converting design. Highly recommend!", "Waxy Web transformed our digital presence with a sleek, modern, and highly functional website. Couldn’t be happier with the result!", "They don’t just design websites; they create experiences. Every detail was thoughtfully crafted, and the end result was simply amazing!", "Superb design, smooth workflow, and a team that truly listens. Waxy Web made the entire process easy and enjoyable.", "Their expertise in UI/UX is on another level. The new design has drastically improved user engagement on our site!", "A game-changer for our brand! Waxy Web delivered a visually stunning and highly user-friendly website. Worth every penny!", "Waxy Web exceeded expectations in every way. Their modern, minimalistic approach gave our brand the fresh look it needed!", "I’m amazed at how effortlessly they turned our vision into a high-performing website. The team’s creativity and skill are unmatched!", "Professional, talented, and truly passionate about what they do. Waxy Web didn’t just build us a site—they built an experience!", "Their designs are not just beautiful but also strategically crafted for engagement and conversions. Fantastic work by Waxy Web!"];

let reviewAuthor = ["Ethan Carter", "Olivia Bennett", "Liam Henderson", "Ava Mitchell", "Noah Thompson", "Jacob Reynolds", "Sophia Parker", "Mason Brooks", "Emily Sullivan", "Omar Al - Farsi",]

let previousNumber;
let previousText;


setInterval(() => {
    let randomCard = Math.floor(Math.random() * 5)
    let randomText = Math.floor(Math.random() * 10)
    let randomAuthor = Math.floor(Math.random() * 10)

    if (previousNumber == randomCard) {
        randomCard = Math.floor(Math.random() * 5)
    } else {
        if (previousText == randomText) {
            randomText = Math.floor(Math.random() * 10)
        } else {
            previousText = randomText;
            previousNumber = randomCard;
            let currentCard = reviews[randomCard]
            let currentText = reviewTexts[randomText]
            let currentAuthor = reviewAuthor[randomAuthor]

            let tl = gsap.timeline();

            tl.to(currentCard, {
                x: 50,
                y: 550,
                rotate: parseInt(currentCard.dataset.angle) + 90,
                duration: 1,
                ease: "power4.out",
                opacity: window.innerWidth < 768 ? 0 : 1,
                onComplete: () => {
                    currentCard.querySelector("p").innerHTML = currentText;
                    currentCard.querySelector("h4").innerHTML = currentAuthor;
                }
            })

            tl.to(currentCard, {
                x: -50,
                rotate: currentCard.dataset.angle - 90,
                duration: 1,
                ease: "power4.out",
            })

            tl.to(currentCard, {
                x: 0,
                y: 0,
                rotate: currentCard.dataset.angle,
                duration: 1,
                ease: "power4.out",
                opacity: 1,
            })
        }
    }

}, 3000);

let hrEffect = true;
setInterval(() => {

    if (hrEffect) {
        let tlForStroke = gsap.timeline();

        tlForStroke.to(".sincestroke", {
            x: -20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            x: 20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            x: -20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            x: 20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            x: 0,
            duration: 0.05,
            ease: 'power4.out'
        })
        hrEffect = false;
    } else {
        let tlForStroke = gsap.timeline();

        tlForStroke.to(".sincestroke", {
            y: -20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            y: 20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            y: -20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            y: 20,
            duration: 0.05,
            ease: 'power4.out'
        })

        tlForStroke.to(".sincestroke", {
            y: 0,
            duration: 0.05,
            ease: 'power4.out'
        })

        hrEffect = true;
    }
}, 4000)

let heroSectionImgOne = document.querySelector(".hero-section .bg");
let heroSectionImgTwo = document.querySelector(".hero-section .bg-last");
let clientsSectionImgOne = document.querySelector(".clients-section .bg");
let servicesSectionImgOne = document.querySelector(".services-section .bg");
let thinkingSectionImgOne = document.querySelector(".thinking-section .bg");
let testimonialSectionImgOne = document.querySelector(".testimonials-section .bg");
let projectSectionImgOne = document.querySelector(".projects-section .bg");
let linksSectionImgOne = document.querySelector(".links-section .bg");
let footerTopSectionImgOne = document.querySelector(".footer-top .bg");
let footerBottomSectionImgOne = document.querySelector(".footer-bottom .bg");
let craftSectionImgOne = document.querySelector(".craft-section .bg");

let img1 = craftSectionImgOne.getAttribute("src")
let img2 = heroSectionImgOne.getAttribute("src")
let img3 = heroSectionImgTwo.getAttribute("src")
let img4 = clientsSectionImgOne.getAttribute("src")
let img5 = thinkingSectionImgOne.getAttribute("src")
let img6 = servicesSectionImgOne.getAttribute("src")
let img7 = testimonialSectionImgOne.getAttribute("src")
let img8 = projectSectionImgOne.getAttribute("src")
let img9 = linksSectionImgOne.getAttribute("src")
let img10 = footerTopSectionImgOne.getAttribute("src")
let img11 = footerBottomSectionImgOne.getAttribute("src")

window.addEventListener('resize', function () {

    if (window.innerWidth <= 768) {
        craftSectionImgOne.setAttribute("src", "./images/mobile-create-corner-radius.png")
        heroSectionImgOne.setAttribute("src", "./images/mobile-corner-radius-hero-1.png")
        heroSectionImgTwo.setAttribute("src", "./images/mobile-corner-radius-hero-2.png")
        clientsSectionImgOne.setAttribute("src", "./images/mobile-clients-corner-radius.png")
        thinkingSectionImgOne.setAttribute("src", "./images/mobile-thinking-corner-radius.png")
        servicesSectionImgOne.setAttribute("src", "./images/mobile-service-corner-radius.png")
        testimonialSectionImgOne.setAttribute("src", "./images/mobile-testimonials-corner-radius.png")
        projectSectionImgOne.setAttribute("src", "./images/mobile-project-corner-radius.png")
        linksSectionImgOne.setAttribute("src", "./images/mobile-contact-links-corner-radius.png")
        footerTopSectionImgOne.setAttribute("src", "./images/mobile-footer-top-corner-radius.png")
        footerBottomSectionImgOne.setAttribute("src", "./images/mobile-footer-bottom-corner-radius.png")
    }

    if (window.innerWidth >= 768) {
        console.log(img1)
        craftSectionImgOne.setAttribute("src", img1.toString())
        heroSectionImgOne.setAttribute("src", img2.toString())
        heroSectionImgTwo.setAttribute("src", img3.toString())
        clientsSectionImgOne.setAttribute("src", img4.toString())
        thinkingSectionImgOne.setAttribute("src", img5.toString())
        servicesSectionImgOne.setAttribute("src", img6.toString())
        testimonialSectionImgOne.setAttribute("src", img7.toString())
        projectSectionImgOne.setAttribute("src", img8.toString())
        linksSectionImgOne.setAttribute("src", img9.toString())
        footerTopSectionImgOne.setAttribute("src", img10.toString())
        footerBottomSectionImgOne.setAttribute("src", img11.toString())
    }
});