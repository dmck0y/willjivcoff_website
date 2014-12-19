(function(){
	//check the state of the slide
	var checkSlide = function() {
		if($('[data-js="desktop"]').hasClass('open')){
			$('[data-js="navwrap"]').addClass('keepRight');
		} else {
			$('[data-js="navwrap"]').removeClass('keepRight');
		}
		$('[data-js="mobile-nav"]').toggleClass('myShow');
		$('[data-js="desktop"]').toggleClass('open');
		$('[data-js="navwrap"]').toggleClass('open');
	};

	//opens side menu in mobile view
	$('[data-js="menu"]').on('click', function(e) {
		e.preventDefault();
		checkSlide();
	});

	$('[data-js="mobile-nav"]').on('click', 'a', function(e) {
		checkSlide();
	});


	// $('.cover').hover(function(e) {
	// 		$(e.target).addClass('coverOpacity');
	// 	},
	// 	function(e) {
	// 		$(e.target).removeClass('coverOpacity');
	// 	}
	//  );

	$('[data-js="imgGrid"]').on("mouseenter mouseleave", '.cover', function(e) {
		$(e.target).toggleClass('coverOpacity');
	});



	var slide = function() {
		var $elm = $('.navwrap');
		if(document.body.scrollTop > 80) {
			$elm.addClass('navwrap-show');
		} else {
			$elm.removeClass('navwrap-show');
		}
	};

	$(window).scroll(function(){
		slide();
	});
	
}()); 