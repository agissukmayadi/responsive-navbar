let menuToggle = document.querySelector('.menu-toggle')
let ul = document.querySelector('nav ul')

menuToggle.addEventListener('click', function () {
    ul.classList.toggle('slide')
})