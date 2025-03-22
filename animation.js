let slides = document.querySelectorAll(".container > div");
let currentIndex = 0;
const totalIndex = slides.length;

function sliderText() {
    slides.forEach(slide => slide.classList.add("hidden"));
    slides[currentIndex].classList.remove("hidden");
    if (currentIndex % 2 === 0) {
        textAnimate(slides[currentIndex]);
    } else {
        textAnimate1(slides[currentIndex]);
    }
    currentIndex = (currentIndex + 1) % totalIndex;
}

setInterval(sliderText, 2000);

function textAnimate(slide) {
    let text1 = slide.querySelector(".text1");
    let text2 = slide.querySelector(".text2");
    let text3 = slide.querySelector(".text3");
    let text4 = slide.querySelector(".text4");
    // if (text2) {
    //     text2.remove();
    // }
    if (!text3) {
        text3 = document.createElement("h1");
        text3.classList.add("text3");
        slide.appendChild(text3);
    }
    if (!text4) {
        text4 = document.createElement("h1");
        text4.classList.add("text4");
        slide.appendChild(text4);
    }
    if (text1 && text2) {
        text1.style.color = "green";
        text2.style.color = "red";
        text1.innerHTML = "Django Developer!";
        text2.innerHTML = "Game Developer!";
    }
    // text1.style.color = "green";
    // text2.style.color = "red";
    // text1.innerHTML = "Django Developer!";
    // text2.innerHTML = "Game Developer!";
    text3.style.color = "aqua";
    text3.innerHTML = "Hello, Software Engineer!";
    text4.style.color = "black";
    text4.innerHTML = "Cyber Security Engineer!";
}
function textAnimate1(slide) {
    let text1 = slide.querySelector(".text1");
    let text2 = slide.querySelector(".text2");
    let text3 = slide.querySelector(".text3");
    let text4 = slide.querySelector(".text4");
    if (text2) {
        text2.remove();
    }
    if (!text3) {
        text3 = document.createElement("h1");
        text3.classList.add("text3");
        slide.appendChild(text3);
    }
    if (!text4) {
        text4 = document.createElement("h1");
        text4.classList.add("text4");
        slide.appendChild(text4);
    }
    if (text1 && text2) {
        text1.style.color = "green";
        text2.style.color = "red";
        text1.innerHTML = "Django Developer!";
        text2.innerHTML = "Game Developer!";
    }
    text3.style.color = "aqua";
    text3.innerHTML = "Hello, Software Engineer!";
    text4.style.color = "black";
    text4.innerHTML = "Cyber Security Engineer!";
}

sliderText();