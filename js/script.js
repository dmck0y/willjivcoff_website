(function(){
	//opens side menu in mobile view
	$('[data-js="menu"]').on('click', function(e) {
		e.preventDefault();
		$('.desktop').toggleClass('open');
	});

	// $('[data-js="imgGrid"]').on('click', '.item', function(e) {
	// 	var re = /img(?:\/[^/#?]+)+\.(?:jpg|gif|png)/g; // matches img url in style attribute
		
	// 	console.log($(e.target).attr('style').match(re)[0]);
	// });

	
}()); 