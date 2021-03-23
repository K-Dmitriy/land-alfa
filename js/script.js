$(document).ready(function() {
	if (window.innerWidth <= 1200) {
		initWhySlider();
	}

	$(window).resize(function() {
		if (window.innerWidth <= 1200) {
			if (!$('.why__slider').hasClass('slick-initialized')) {
				initWhoSlider();
			}
		} else {
			if ($('.why__slider').hasClass('slick-initialized')) {
				$('.why__slider').slick('unslick');
			}
		}
	});

	$('.review__list').slick({
		dots: true,
		responsive: [
			{
				breakpoint: 686,
				settings: {
					arrows: false
				}
			}
		]
	});

	if (window.innerWidth <= 685) {
		initCompositionSlider();
	}

	$(window).resize(function() {
		if (window.innerWidth <= 685) {
			if (!$('.composition__list').hasClass('slick-initialized')) {
				initCompositionSlider();
			}
		} else {
			if ($('.composition__list').hasClass('slick-initialized')) {
				$('.composition__list').slick('unslick');
			}
		}
	});

	$('.test-results__slider').slick({
		slidesToShow: 5,
		arrows: false,
		responsive: [
		  {
			breakpoint: 711,
			settings: {
			  slidesToShow: 1,
			  dots: true,
			}
		  },
		  {
			breakpoint: 1201,
			settings: {
			  slidesToShow: 3,
			  dots: true,
			}
		  },
		  {
			breakpoint: 1261,
			settings: {
			  slidesToShow: 4,
			  dots: true,
			}
		  },
		]
	})

	function initWhySlider() {
		$('.why__slider').slick({
			slidesToShow: 2,
			arrows: false,
			focusOnSelect: true,
			dots: true,
			responsive: [
				{
					breakpoint: 686,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	function initCompositionSlider() {
		$('.composition__list').slick({
			arrows: false,
			dots: true
		});
	}

        $('.scroller').click(function (evt) {
            evt.preventDefault();
            $('html, body').stop().animate({ scrollTop: ($('#scroll').offset().top) }, 1500);
        });
});
