const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".header > nav");
const navClose = document.querySelector(".nav-close");
navBtn.addEventListener('click', function(){
    navBar.classList.toggle("active");
})
navClose.addEventListener('click', function(){
    navBar.classList.toggle("active");
})