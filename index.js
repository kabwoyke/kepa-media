// alert("hello world")

const openNav = document.getElementById("open-nav")
const closeNav = document.getElementById("close-nav")
const header = document.getElementById("header")

openNav.addEventListener("click" , function(){
    header.classList.toggle("nav-open")
})

closeNav.addEventListener("click" , function(){

    header.classList.remove("nav-open")
})