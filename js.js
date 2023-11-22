jQuery(document).ready(function ($) {
    $(".slick-blog").slick({
        dots: false,
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
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
    });
});


AOS.init({
    once: true,
});

