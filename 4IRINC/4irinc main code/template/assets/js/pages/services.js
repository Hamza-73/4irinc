document.addEventListener('DOMContentLoaded', function () {
    // const swiper = document.querySelector('.swiper').swiper;
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3500,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     type: 'bullets',
        // },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
    });
    // console.log("swiper is ", swiper)

    // Now you can use all slider methods like
    // swiper.slideNext();
    // var swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     },
    //     on: {
    //         slideChange: updateProgressBar
    //     }
    // });

    // function updateProgressBar() {
    //     var progressBar = document.querySelector('.progress-bar');
    //     console.log("swiper is ", swiper)
    //     console.log("swiper is ", swiper.slides)
    //     var totalSlides = swiper.slides.length;
    //     var currentSlide = swiper.realIndex + 1;
    //     var progress = (currentSlide / totalSlides) * 100;

    //     console.log('Updating progress bar:', progress); // Debugging line
    //     progressBar.style.width = progress + '%';
    // }

    // // Initialize progress bar on load
    // updateProgressBar();
});
