$( document ).ready(function() {
    $('.control').click(function(e){
        e.preventDefault();
        console.log('clicked');
        $('body').toggleClass('active-nav');
    });
});