$(document).ready(function(){

	$(window).scroll(function() {

		if ($(window).scrollTop() > 100 ) {
			$('.fixed_nav').css ({
				'height': '60px',
				'background-color': 'rgba(249, 249, 251, 0.8)'
			});

			$('.main_logo').css ({
			'margin-top': '4px'
			});

			$('.fixed_nav ul').css ({
			'margin-top': '22px'
			});

		}

		else {
			$('.fixed_nav').css ({
			'height': '100px',
			'background-color': 'transparent'
			});

			$('.main_logo').css ({
			'margin-top': '22px'
			});
			
			$('.fixed_nav ul').css ({
			'margin-top': '38px'
			});
		}
	});

	// $('.nav-icon').click(function(){
	// 	$(this).toggleClass('open');
	// 	$('.dropdown-menu').toggleClass('show');
	// });
});
