$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        Infinity: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $("#next"),
        prevArrow: $("#prev"),
        draggable: false,
        swipe: false,
    });
    $(".employees__items").slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        Infinity: false,
        autoplay: false,
        autoplaySpeed: 2000,
    });
});
