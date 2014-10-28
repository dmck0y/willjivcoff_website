(function(){
	var container = $('[data-js="packery_obj"]');

	function notFound() {
		container.html('404 Not Found');
	}

	Path.map("#/").to(function(){
		container.html('home');
	})

	Path.map("#/skateboarding").to(function(){
		container.html('skateboarding');
	});

	Path.root('#/');
	Path.rescue(notFound);

	Path.listen();
}());