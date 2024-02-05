$('.main_banner_slider').slick({
    arrows:false,
    dots:true,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed:1000,
});

$('.main_slider').slick({
    arrows:true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:`<i class="fa-solid fa-angle-left left"></i>`,
    nextArrow:`<i class="fa-solid fa-angle-right right"></i>`,

    centerMode: true,
    centerPadding: '0',

    responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]

});