(function($){

	$.fn.slide = function(options) {
		var defaults = {
			menu: '',
			speed: 1000,
			easing: '',
			defaultToggleState: true,
			children: ''
		}

		var options = $.extend(defaults, options);

		var width = $(options.menu).width();

		var defaultToggleState = true;

		$(this).on('click', function(e){

			if (defaultToggleState){

				$(options.menu).animate({'margin-left': 0}, options.speed);

				$(options.children).each(function(){
					$(options.children).animate({'margin-left': width}, options.speed);
				});

				defaultToggleState = false;

			} else {

				$(options.menu).animate({'margin-left': '-' + width}, options.speed);

				$(options.children).each(function(){
					$(options.children).animate({'margin-left': 0}, options.speed);
				});

				defaultToggleState = true;
			}
			
			e.preventDefault();
		});
	}

})(jQuery);