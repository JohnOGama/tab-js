const btns = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".content");
const parent = document.querySelector(".container");

parent.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  btns.forEach((btn) => {
    btn.classList.remove("active");
    e.target.classList.add("active");
  });
  articles.forEach((article) => {
    article.classList.remove("active");
  });
  const element = document.getElementById(id);
  element.classList.add("active");
});
