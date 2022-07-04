// Navigation bar
toggle_btn = document.querySelector(".toggler")
menu = document.querySelector(".menu")

toggle_btn.addEventListener("click", function () {
   
    if (menu.classList.contains("fadeIn")) {
        menu.classList.remove("fadeIn");
        menu.classList.add("fadeOut");
        document.getElementById("icon").setAttribute("src", "./assets/shared/icon-hamburger.svg");
    } else {
        menu.classList.remove("fadeOut")
        menu.classList.add("fadeIn")
        document.getElementById("icon").setAttribute("src", "./assets/shared/icon-close.svg");
    }
});


// Slider

slides = document.querySelectorAll(".slide-content")
imgs = document.querySelectorAll(".slide-img")
btns = document.querySelectorAll(".slide-btn button")
let currentSlide = 0;

function updateSlide(num) {
    slides.forEach(slide => {
        slide.classList.remove("first")
        })
    imgs.forEach(img => {
        img.classList.remove("first")
        })
    btns.forEach(btn => {
        btn.classList.remove("active")
       })
    slides[num].classList.add("first");
    imgs[num].classList.add("first");
    btns[num].classList.add("active");
};

// Manual Slider
btns.forEach((btn, i) => {
    btn.addEventListener("click", ()=>{
        currentSlide = i
        updateSlide(i);

    })
});
// Automatic Slider
function autoplay() {
    setTimeout(function () {
            updateSlide(currentSlide);
            currentSlide++;
            if (currentSlide == slides.length) {
                currentSlide = 0;
            }
            autoplay();
    }, 5000)
};

autoplay();




