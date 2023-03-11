let menuToggle = document.querySelector('.menu-toggle')
let icon = document.querySelector(".menu-toggle i")
let ul = document.querySelector("nav ul")

menuToggle.addEventListener('click', function () {
    icon.classList.toggle('fa-xmark')
    ul.classList.toggle('show')

})