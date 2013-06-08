(function($){

    $.fn.slide = function(options){
        var defaults = {
            menu: '#menu',
            speed: 1000,
            easing: '',
            width: 200,
            defaultToggleState: true,
            children: '#body'
        }

        var options = $.extend(defaults, options);
        
        var defaultToggleState = true;

        $(this).on('click', function(ev){

            if (defaultToggleState){

                $(options.menu).animate({'margin-left': options.width + 'px'}, options.speed);

                $(options.children).each(function(){
                    $(options.children).animate({'margin-left': options.width + 'px'}, options.speed);
                });

                defaultToggleState = false;
                
            } else {

                $(options.menu).animate({'margin-left': 0}, options.speed);

				$(options.children).each(function(){
                    $(options.children).animate({'margin-left': 0}, options.speed);
                });

                defaultToggleState = true;
            }
            ev.preventDefault();
        });
    }

})(jQuery);