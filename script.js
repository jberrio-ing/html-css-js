let button = document.querySelector(".tarjeta button")
let title = document.querySelector(".tarjeta h1")

if (button != null && title != null) {
    button.addEventListener("click", function (e) {
        title.classList.toggle("color-titulo-toggle")
    })
}