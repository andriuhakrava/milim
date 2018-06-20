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

 //  $(document).ready(function(){
 //      $('.reviews-slider').slick({
 //        setting-name: setting-value
 //   	});
	// });

  // $('.service-list-slider').slick({
  //   arrows: false,
  //   dots: true
  // });

// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
