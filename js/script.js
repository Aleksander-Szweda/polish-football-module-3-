let body = document.querySelector(".body");
let button = document.querySelector(".main__button");
let article = document.querySelector(".article")
let nav = document.querySelector(".nav")
let caption = document.querySelector(".table__caption")
let navLink1 = document.querySelector(".nav__link1")
let navLink2 = document.querySelector(".nav__link2")
let footer = document.querySelector(".footer")
let main__div = document.querySelector(".main__div")
button.addEventListener("click", () => {
    body.classList.toggle("body--dark")
    article.classList.toggle("article--dark")
    nav.classList.toggle("nav--dark")
    navLink1.classList.toggle("nav__link1--dark")
    navLink2.classList.toggle("nav__link2--dark")
    button.classList.toggle("main__button--dark")
    caption.classList.toggle("table__caption--dark")
    footer.classList.toggle("footer--dark")
    main__div.classList.toggle("main__div--dark")










    if (body.classList.contains("body--dark")) {
        button.innerText = "Jasny motyw";
    }
    else {
        button.innerText = "Ciemny motyw";
    }
});