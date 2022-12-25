import $ from 'jquery'


export function slider(){
    $('.works-image-block').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.btn-dir1',
        nextArrow: '.btn-dir2',

        responsive: [
          
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    
        
}


// $(document).ready(init);

