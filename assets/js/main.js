const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__items');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('menu__items--open');
});

const hideHamburger = (isDesktop) => {
    if (isDesktop) {
        menu.classList.remove('menu__items--open');
        hamburger.classList.remove('hamburger--active');
    }
}

let desktopViewport = window.matchMedia("screen and (min-width: 1024px)");

desktopViewport.addListener(isDesktop => {
    hideHamburger(isDesktop.matches);
});


const menuFixed = document.querySelector(".menu");

window.addEventListener("scroll", () => {
    if (document.scrollingElement.scrollTop > 150) {
        menuFixed.classList.add("menu--fixed");
        document.querySelector(".menu__brand").src = "/assets/img/logo-fixed.png";
    } else {
        menuFixed.classList.remove("menu--fixed");
        document.querySelector(".menu__brand").src = "/assets/img/logo.png";
    }
});

// Typing effect
const typingBoxes = [document.querySelector(".header__sub-title"), document.querySelector(".header__title")];

const typingText = ["Cześć! Jestem Mariusz", "PrestaShop ^Developer", "Front-end ^Developer"];

let activeDOMElement = typingBoxes[0];

let wordIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 70;
const stop = 1500;

activeDOMElement.classList.add("cursor");
const typing = (newTime) => {
    if (newTime - oldTime > speed) {
        const letter = typingText[textIndex].substr(wordIndex, 1);
        if (wordIndex === typingText[textIndex].length) {
            if (textIndex === typingText.length - 1) {
                return;
            }
            return setTimeout(() => {
                textIndex++;
                activeDOMElement.classList.remove("cursor");
                activeDOMElement = typingBoxes[1];
                activeDOMElement.classList.add("cursor");
                if (activeDOMElement === typingBoxes[1]) {
                    activeDOMElement.textContent = "";
                }
                wordIndex = 0;
                requestAnimationFrame(typing);
            }, stop)
        } else if (letter === "^") {
            const span = document.createElement('span');
            activeDOMElement.appendChild(span);
            activeDOMElement = span;
        }

        if (!(letter === "^")) {
            activeDOMElement.textContent += letter;
        }
        oldTime = newTime;
        wordIndex++;
    }
    requestAnimationFrame(typing);
}
typing();