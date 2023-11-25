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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        responsive: [         
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
});


AOS.init({
    once: true,
});


/* Menu fixed */
$(window).scroll(function () {
    var cach_top = $(window).scrollTop();
    var heaigt_header = $(".big-menu").height();

    if (cach_top >= heaigt_header) {
        if (!$(".big-menu").hasClass("fix_head animate__animated animate__fadeIn")) {
            $(".big-menu").addClass("fix_head animate__animated animate__fadeIn");
        }
    } else {
        $(".big-menu").removeClass("fix_head animate__animated animate__fadeIn");
    }
});


