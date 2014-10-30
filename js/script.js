(function(){
	//opens side menu in mobile view
	$('[data-js="menu"]').on('click', function(e){
		e.preventDefault();
		$('.desktop').toggleClass('open');
	});

}());
