    (function($) {
    // dentro de esta función $() funcionará como un álias de jQuery() 
    $(document).on("ready",function(){
            $("nav button").click(function(){
                $("nav ul").slideToggle();
            });
        });
    })(jQuery);
    