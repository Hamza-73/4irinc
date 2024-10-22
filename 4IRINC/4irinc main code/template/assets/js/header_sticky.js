/*===================
header sticky js
=======================*/
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');

    if (window.pageYOffset > 500) {
        header.classList.add('sticky');
        header.style.backgroundImage = 'url("/assets/images/new-home-bg.png")';  
        header.style.backgroundPosition = 'center';  
        header.style.backgroundSize = 'cover';  
        
    } else {
        header.classList.remove('sticky');
        header.style.backgroundImage = 'none';
    }
    
});
