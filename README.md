Summer Slide
============

JQuery plugin that generates smooth slide in/out functionality for a navigation tray.

Initiate Slider
---------------

jQuery(document).ready(function(){
	$('button').slide({
		menu: '#hamburger',
		speed: 100,
		easing: '',
		children: '#body'
	});
});

Options Legend
--------------

$('button').slide({}): The element that will animate your menu and page elements. Target peoper selector. *Required.

Menu: Is your slide out menu. Make sure to target proper selector. *Required.

Speed: How fast your hambuger tray animates in and out. *Optional.

Easing: Smoothness of animation transitions. *Optional.

Children: Contains the rest of your page elments that animates when the menu tray slides out. Can be left blank if you wish to only animate the menu tray. Make sure to properly place the close button.

