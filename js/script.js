$(document).ready(function(){
	$('.nav-icon').click(function(){
		$(this).toggleClass('open');
		$('.dropdown-menu').toggleClass('show');
	});
});