(function($){
	$.fn.hamburger = function(options){
		var $button = $('.button');
		var $tray = $('.tray');
		var $dist = $tray.width();
		var $page = $('.page');
		var defaultToggleState = true;

		var settings = $.extend({
			"speed": "fast",
			"width": 250
		}, options);

		$button.on('click', function(ev){

			if (defaultToggeleState){
				$tray.animate({
					'margin-left': $dist + 'px'
				});

				$page.animate({
					'margin-left': $dist + 'px'
				});
				defaultToggleState = false;
			} else {
				$tray.animate({
					'margin-left': 0
				});

				$page.animate({
					'margin-left': 0
				});

				defaultToggleState = true;
			}
			ev.preventDefault();
		});
	};
});