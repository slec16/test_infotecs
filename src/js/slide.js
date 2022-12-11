$(document).ready(function(){
    $('.works-image-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.btn-dir1',
        nextArrow: '.btn-dir2'
    });
});

// Fancybox.show(gallery, {
//     Image: {

//     },
//   });