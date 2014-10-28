(function(){
	var container = $('[data-js="packery_obj"]');

	//setups image gallery template
	var tmplskate = Handlebars.compile($('[data-js="img-tmpl-skate"]').html()),
		htmlskate = tmplskate(data.content),

		tmplportrait = Handlebars.compile($('[data-js="img-tmpl-portrait"]').html()),
				htmlportrait = tmplportrait(data.content),

		tmpltearsheets = Handlebars.compile($('[data-js="img-tmpl-tearsheets"]').html()),
				htmltearsheets = tmpltearsheets(data.content),

		tmplmisc = Handlebars.compile($('[data-js="img-tmpl-misc"]').html()),
				htmlmisc = tmplmisc(data.content);


	

	function notFound() {
		container.html('404 Not Found');
	}

	Path.map("#/").to(function(){
		container.html('home');
	})

	Path.map("#/skateboarding").to(function(){
		$('[data-js="packery_obj"]').html(htmlskate);
	});

	Path.map("#/portrait").to(function(){
		$('[data-js="packery_obj"]').html(htmlportrait);
	});

	Path.map("#/tearsheets").to(function(){
		$('[data-js="packery_obj"]').html(htmltearsheets);
	});

	Path.map("#/misc").to(function(){
		$('[data-js="packery_obj"]').html(htmlmisc);
	});

	Path.root('#/');
	Path.rescue(notFound);

	Path.listen();
}());