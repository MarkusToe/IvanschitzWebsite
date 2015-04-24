$( document ).ready(function() {

    $('.control').click(function(e){
        e.preventDefault();
        console.log('clicked');
        $('body').toggleClass('active-nav');
    });

    $('.main-nav a').click(function(e){
        // hide nav if open
        if($('body.active-nav').length === 1){
            $('body').toggleClass('active-nav');
        }
        //remove and add active class to the nav
        $('.main-nav a').removeClass('active');
        $(this).addClass('active');

        // scroll to  the target href
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});