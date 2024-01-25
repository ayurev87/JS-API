const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');
const cloneButton = document.getElementById('cloneButton');
const container = document.getElementById('container');
let counter = 3;

addButton.addEventListener("click", (e) => {
    const div = document.createElement("div");
    counter++;
    div.innerHTML = `<div class="box">${counter}</div>`;
    container.appendChild(div);
});

removeButton.addEventListener("click", (e) => {
    container.removeChild(container.lastChild);
    if (counter >= 4) {
        counter--;
    }
});

cloneButton.addEventListener("click", (e) => {
    const div = container.lastChild.cloneNode(true);
    div.innerHTML = `<div class="box">${counter}</div>`;
    container.appendChild(div);
})
