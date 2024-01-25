const openElem = document.querySelector(".open-modal-btn");
const closeElem = document.querySelector(".close-modal-btn");
const contentElem = document.querySelector(".modal");

openElem.addEventListener("click", () => {
    contentElem.style.display = "block";
    contentElem.style.opacity = "1";
});

closeElem.addEventListener("click", () => {
    contentElem.style.display = "none";
    contentElem.style.opacity = "0";
});