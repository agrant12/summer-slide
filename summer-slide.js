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
	};
});