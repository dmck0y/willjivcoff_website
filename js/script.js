(function(){

	var container = document.querySelector('div[data-js="packery_obj"]');
	var packery = new Packery(container, {
		itemSelector: '.item',
		gutter: 0
	});

	$('[data-js="menu"]').on('click', function(e){
		e.preventDefault();
		
		$('.desktop').toggleClass('open');
	})
}());