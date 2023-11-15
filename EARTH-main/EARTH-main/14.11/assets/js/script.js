const menu = document.querySelector(".responsive-menu")
const welcome = document.querySelector(".welcome-section")
const ul = document.querySelector(".btnlist")

console.log(ul);

menu.addEventListener("click", function() {
    ul.classList.toggle("menu-active")
    console.log("hello");
})