function headerStick() {
    var start_pos=$('#header-stick').offset().top;
    $(window).scroll(function(){
        if ($(window).scrollTop()>start_pos)
        {
            $('#stick_menu').fadeIn();
        }
        else
        {
            $('#stick_menu').fadeOut();
        }
    });
}
