(function(){
	//opens side menu in mobile view
	$('[data-js="menu"]').on('click', function(e){
		e.preventDefault();
		$('.desktop').toggleClass('open');
	})

	//setups packery.js
	var container = $('[data-js="packery_obj"]').packery();

	$(container).on('click', '.item', function(e) {
		var target = $(e.target).parent();
		var isBig = target.hasClass('big');
		container.children().removeClass('big');

		target.toggleClass('big');

		if (isBig) {
			container.packery();
		} else {
			container.packery('fit', e.target);
		}
	});

}());