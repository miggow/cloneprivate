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

// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress(function () {
    $grid.masonry();
});  
