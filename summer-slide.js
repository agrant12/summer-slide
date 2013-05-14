(function($){
	$.fn.hamburger = function(options){
		var $button = $('.button');
		var $tray = $('.tray');
		var $dist = $tray.width();
		var $page = $('.page');
		var defaultToggeleState = true;

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
				defaultToggeleState = false;
			} else {
				$tray.animate({
					'margin-left': 0
				});

				$page.animate({
					'margin-left': 0
				});

				defaultToggeleState = true;
			}
			ev.preventDefault();
		});
	};
});