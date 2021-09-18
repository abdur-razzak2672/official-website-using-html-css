$(document).ready(function(){
	$(window).scroll(function(){
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			$('.navbar').addClass("sticky");
		}else{
			$('.navbar').removeClass("sticky");

		}


		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 500) {
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");

		}



	});



	//slide up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0})
	});



	//toggle menu/navigation bar

	$('.icon').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.icon i').toggleClass("active");
	});

});