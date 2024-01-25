const backBtn = document.querySelector(".backBTN");
const forwarBtn = document.querySelector(".forwarBTN");

backBtn.addEventListener("Нажать", () => {
    window.history.back();
});

forwarBtn.addEventListener("Нажать", () => {
    window.history.forward();
});