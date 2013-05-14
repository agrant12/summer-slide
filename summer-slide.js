(function($){
	$.fn.hamburger = function(options){

		var $button = $('.button');
		var $tray = $('.tray');
		var $dist = $tray.width();
		var $page = $('.page');
		var $myLocation = 0;
		var defaultToggleState = true;

		var settings = $.extend({
			"speed": "fast",
			"width": 250
		}, options);

		if (/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent)){

			$button.on('click', function(ev){

				if (defaultToggeleState){

					$myLocation = $(window).scrollTop();

					$tray.animate({
						'margin-left': $dist + 'px'
					});

					$page.animate({
						'margin-left': $dist + 'px',
						'position': 'fixed',
						'top': '-' + $myLocation + 'px'
					});

					defaultToggleState = false;

				} else {

					$(window).scrollTop($myLocation);

					$tray.animate({
						'margin-left': 0
					});

					$page.animate({
						'margin-left' : 0
					});

					defaultToggleState = true;

				}

		} else {

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
		}
	};
});