 $('.reviews-slider').slick({
	arrows: true,
	dots: false,
	appendArrows: '.reviews-slider-buttons',
	prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
	nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
        infinite: true,
         dots: false
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
			}
		}
	]
});
 