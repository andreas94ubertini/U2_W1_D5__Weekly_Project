const navBar = document.getElementById('nav-bar')
document.addEventListener('scroll', function (e) {
    console.log(window.scrollY)
    if (window.scrollY > 430) {
        navBar.classList.add('nav-moved')
    }else{
        navBar.classList.remove('nav-moved')
    }
})
let allTheG = document.getElementsByTagName('g')
console.log(allTheG)
const opacity = [0,1]
const changePosition = function (){ for (let i = 1; i< allTheG.length; i++){
    if(i%2===0){
        allTheG[i].setAttribute('opacity', `${Math.floor(Math.random() * 2)}` )
    }
}}

let changeM = setInterval(changePosition, 1500)
