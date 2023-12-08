jQuery(document).ready(function ($) {
    $(".slick-blog").slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 785,
                settings: {
                    slidesToShow: 2,                  
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});


jQuery(document).ready(function ($) {
    $(".slick-product").slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [    
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },     
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".slick-pro-detail").slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow: "<div class='icon-prev'> <i class='bi bi-chevron-compact-left'></></div>",
        nextArrow: "<div class='icon-next'> <i class='bi bi-chevron-compact-right'></></div>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
});


AOS.init({});

Fancybox.bind("[data-fancybox]", {});






