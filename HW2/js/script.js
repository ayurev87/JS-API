
const imagesElem = document.querySelectorAll(".slider_img");
const sliderLineElem = document.querySelector(".slider_line");
const dotsElem = document.querySelectorAll(".dot");
const btnPrevElem = document.querySelector(".btn_prev");
const btnNextElem = document.querySelector(".btn_next");

let sliderIndex = 0;
let sliderWidth = document.querySelector(".slider").offsetWidth;
console.log(sliderWidth);

btnPrevElem.addEventListener("click", prevSlid);
btnNextElem.addEventListener("click", nextSlid);


dotsElem.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        sliderIndex = index;
        rollSlider();
        activeDot(sliderIndex);
    });
});


function nextSlid() {
    sliderIndex++;
    if (sliderIndex >= imagesElem.length) sliderIndex = 0;
    rollSlider();
    activeDot(sliderIndex);
}

function prevSlid() {
    sliderIndex--;
    if (sliderIndex < 0) sliderIndex = imagesElem.length - 1;
    rollSlider();
    activeDot(sliderIndex);
}


function rollSlider() {
    sliderLineElem.style.transform = `translateX(${-sliderIndex * sliderWidth
        }px)`;
}


function activeDot(index) {
    dotsElem.forEach((item) => item.classList.remove("active_dot"));
    dotsElem[index].classList.add("active_dot");
}