const navBar = document.getElementById('nav-bar')
document.addEventListener('scroll', function (e) {
    console.log(window.scrollY)
    if (window.scrollY > 430) {
        navBar.classList.add('nav-moved')
    }else{
        navBar.classList.remove('nav-moved')
    }
})

