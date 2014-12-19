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

	//setup about page
	var tmplabout = Handlebars.compile($('[data-js="img-tmpl-about"]').html()),
					htmlabout = tmplabout(data.content);


	var notFound = function() {
		return "404 page notFound";
	};

	$('nav').on('click', 'a', function(e){
		var $target = $(e.target);
		console.log($target);
		$('nav ul li a').removeClass('sel');
		$target.addClass('sel');
	});

	Path.map("#/").to(function(){
		$(container).html('');
		$(container).append(htmlskate);
		$(container).append(htmlportrait);
		$(container).append(htmltearsheets);
		$(container).append(htmlmisc);
		$('nav ul li a').removeClass('sel');
	});

	Path.map("#/skateboarding").to(function(){
		$(container).html(htmlskate);
		$(".nav a[href='#/skateboarding']").addClass('sel');
	});

	Path.map("#/portrait").to(function(){
		$(container).html(htmlportrait);
		$(".nav a[href='#/portrait']").addClass('sel');
	});

	Path.map("#/tearsheets").to(function(){
		$(container).html(htmltearsheets);
		$(".nav a[href='#/tearsheets']").addClass('sel');
	});

	Path.map("#/misc").to(function(){
		$(container).html(htmlmisc);
		$(".nav a[href='#/misc']").addClass('sel');
	});

	Path.map("#/about").to(function(){
		$(container).html(htmlabout);
		$(".nav a[href='#/about']").addClass('sel');
	});

	Path.root('#/');
	Path.rescue(notFound);

	Path.listen();
}());