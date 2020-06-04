$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 1200,
        loop: true,
        margin: 10,
        stagePadding: 10,
        nav: true,
        navText: ["<i class='fas fa-arrow-left'></i>",
            "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                // nav: true
            },
            600: {
                items: 3,
                // nav: false
            },
            1000: {
                items: 4,
                nav: true
                // loop: false
            }
        }
    });

});