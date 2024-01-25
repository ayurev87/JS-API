const menuLinjElements = document.querySelectorAll(".menu_link");

for (const elem of menuLinjElements) {
    elem.addEventListener("click", () => {
        for (const elem of menuLinjElements) {
            if (elem.classList.contains("active")) {
                elem.classList.remove("active");
            }
        }
        elem.classList.add("active");
    })
}