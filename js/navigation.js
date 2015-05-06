$( document ).ready(function() {

    console.log("ready!");

    $('.control').click(function(e){
        e.preventDefault();
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

    //fixed steckrief bg

    var news = $("#news");

    /*container.on("scroll", function(e) {
        console.log("scroll");
        /!*if (this.scrollTop > 147) {
            wrap.addClass("fix-search");
        } else {
            wrap.removeClass("fix-search");
        }*!/
    });*/

    /*var window = $(window);

    window.on("scroll", function(e) {
       console.log(this.scrollTop);
    });*/

    var steckbrief = $(".steckbrief");
    var steckbriefEndPos = steckbrief.offset().top + steckbrief.height() - ($(".steckbrief-andy").height()/2);
    var position = "out";

    $(window).scroll(function() {
        var scrolledFromTop = Math.floor($(window).scrollTop())
        var diffFromTop = steckbrief.offset().top - scrolledFromTop;

        if (diffFromTop <= 0 && scrolledFromTop < steckbriefEndPos) {
            if (position != "in") {
                position = "in";
                $(".steckbrief-andy").fadeTo("fast", 1, function(){
                    steckbrief.addClass("fixed-bg");
                });
                console.log(true);
            }
        } else if (scrolledFromTop >= (steckbriefEndPos/3)) {
            if (position != "out") {
                position = "out";
                $(".steckbrief-andy").fadeTo("fast", 0, function() {
                    steckbrief.removeClass("fixed-bg");
                });

                console.log(false);
                console.log("from top: " + scrolledFromTop);
                console.log("endpos: " + steckbriefEndPos/2);
            }
        }
    });

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});