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


	$('nav').on('click', 'a', function(e){
		var $target = $(e.target);
		$('nav ul li a').removeClass('sel');
		$target.addClass('sel');
	});


	// $('[data-js="imgGrid"]').on('click', '.item', function(e) {
	// 	var re = /img(?:\/[^/#?]+)+\.(?:jpg|gif|png)/g; // matches img url in style attribute
		
	// 	console.log($(e.target).attr('style').match(re)[0]);
	// });

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