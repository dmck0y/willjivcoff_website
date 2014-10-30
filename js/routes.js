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


	var navUnderline = function(e) {
		$('nav ul li a').removeClass('sel');
		//$().addClass('sel');
	};

	function notFound() {
		container.html('404 Not Found');
	}

	Path.map("#/").to(function(){
		$('[data-js="packery_obj"]').html('');
		$('[data-js="packery_obj"]').append(htmlskate);
		$('[data-js="packery_obj"]').append(htmlportrait);
		$('[data-js="packery_obj"]').append(htmltearsheets);
		$('[data-js="packery_obj"]').append(htmlmisc);
	})

	Path.map("#/skateboarding").to(function(){
		$('[data-js="packery_obj"]').html(htmlskate);
	}).enter(navUnderline);

	Path.map("#/portrait").to(function(){
		$('[data-js="packery_obj"]').html(htmlportrait);
	}).enter(navUnderline);

	Path.map("#/tearsheets").to(function(){
		$('[data-js="packery_obj"]').html(htmltearsheets);
	}).enter(navUnderline);

	Path.map("#/misc").to(function(){
		$('[data-js="packery_obj"]').html(htmlmisc);
	}).enter(navUnderline);

	Path.root('#/');
	Path.rescue(notFound);

	Path.listen();
}());