$(document).ready(function(){

	// script for fixed_nav changes
	$(window).scroll(function() {

		if ($(window).scrollTop() > 100 ) {
			$('.fixed_nav').css ({
				'height': '70px',
			});

			$('.main_logo').css ({
				'margin-top': '7px'
			});

			$('.fixed_nav ul').css ({
				'margin-top': '26px'
			});

			$('.nav-icon').css ({
				'margin-top': '11px'
			});

			$('.dropdown-menu').css ({
				'top': '69px'
			});

		}

		else {
			$('.fixed_nav').css ({
				'height': '100px',
			});

			$('.main_logo').css ({
				'margin-top': '22px'
			});

			$('.fixed_nav ul').css ({
				'margin-top': '38px'
			});

			$('.nav-icon').css ({
				'margin-top': '26px'
			})
			$('.dropdown-menu').css ({
				'top': '99px'
			});
		}
	});

	// script for smooth scroll links
	$('a[href^="#"]').on('click', function(event) {

		var target = $($(this).attr('href'));

		if ( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 800);
		}
	});

	// hamburger menu script
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.dropdown-menu').toggleClass('show');
	});
});
