
const articlesData = [
    {
        id: Date.now(),
        title: "Заголовок статьи1",
        content: "Содержание статьи1",
    },
    {
        id: Date.now(),
        title: "Заголовок статьи2",
        content: "Содержание статьи2",
    },
];

renderArticlesList(articlesData);






const addArticleBtn = document.getElementById("addArticle");

addArticleBtn.addEventListener("click", (e) => {
    const article = prompt("Введите заголовок статьи");
    const content = prompt("Введите содержание статьи");
    articlesData.push({
        id: Date.now(),
        title: article,
        content: content,
    });
    saveArticlesToLocalStorage(articlesData);
    renderArticlesList(getArticlesFromLocalStorage());
});

function saveArticlesToLocalStorage(articlesData) {
    localStorage.setItem("articles", JSON.stringify(articlesData));
}

function getArticlesFromLocalStorage() {
    return JSON.parse(localStorage.getItem("articles"));
}

function renderArticlesList(articlesData) {
    const articlesList = articlesData
        .map((item) => renderArticle(item.title, item.content, item.id))
        .join("");
    document.querySelector(".list-group").innerHTML = articlesList;
}

function renderArticle(title, content, id) {
    return `<div>
                <h2>${title}</h2>
                <p>${content}</p>
                <button class="btnChange">Редактировать</button>
                <button class="btnRemove" data-id="${id}">Удалить</button>
            </div>`;
}

const deleteBtn = document.querySelector(".list-group");

deleteBtn.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("btnRemove")) {
        removeHandler(target);
    }
});

function removeHandler(target) {
    const id = target.getAttribute("data-id");
    console.log(id);
    deleteArticleFromLocalStorage(id);
    renderArticlesList(getArticlesFromLocalStorage());
}

function deleteArticleFromLocalStorage(id) {
    let articles = getArticlesFromLocalStorage();
    for (let i = 0; i < articles.length; i++) {
        if (articles[i].id == id) {
            articles.splice(i, 1);
        }
        saveArticlesToLocalStorage(articles);

    }
}