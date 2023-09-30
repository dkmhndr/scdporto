document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
    const articles = document.querySelectorAll("article");

    articles.forEach((article) => {
        article.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        article.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
        article.addEventListener("click", function () {
            showCurrentArticle(article);
        });
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("href");
            const article = document.querySelector(target);
            showCurrentArticle(article);
        });
    });

});

function showCurrentArticle(article) {
    document.querySelectorAll("article").forEach((article) => {
        article.style.display = "none";
    });

    if (article) {
        article.style.display = "block";
        article.style.flexBasis = "100%";
        article.querySelector(".full-article").style.display = "block";
        article.classList.remove("article-hover");
    }
}
