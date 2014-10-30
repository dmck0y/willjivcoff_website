(function(){
	var container = $('[data-js="imgGrid"]');

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
		$(container).html('');
		$(container).append(htmlskate);
		$(container).append(htmlportrait);
		$(container).append(htmltearsheets);
		$(container).append(htmlmisc);
	})

	Path.map("#/skateboarding").to(function(){
		$(container).html(htmlskate);
	});

	Path.map("#/portrait").to(function(){
		$(container).html(htmlportrait);
	});

	Path.map("#/tearsheets").to(function(){
		$(container).html(htmltearsheets);
	});

	Path.map("#/misc").to(function(){
		$(container).html(htmlmisc);
	});

	Path.root('#/');
	Path.rescue(notFound);

	Path.listen();
}());