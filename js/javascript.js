$(function() {

    //carousel options
    $('#quote-carousel').carousel(
        {
            pause: true, 
            interval: 10000
        }
    );

    // Select menu item on click
    $('#site-nav li a').on('touchstart click', function(e){
            $('.navbar-toggle:visible').click();
             e.stopPropagation(); e.preventDefault();
            var $anchor = $(this);
            $('#site-nav li').removeClass("active");
            $(this).parent().addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - $("nav").height() + $('.navbar-collapse.in').height() + 1
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }

    );

    // Scroll button
    var offset = 220;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });
    $('.back-to-top').click(function (event) {
        event.preventDefault();
        $('html, body').animate(
            {
                scrollTop: 0
            }, 
            duration
        );
        return false;
    })
    
    // Change menu when you scroll
    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        $("section").each(function () {
            var top = $(this).offset().top - $("nav").height();
            var bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                //$('a[href="#about-id"]
                var activeElem = $('a[href="#' + $(this).attr('id') + '"]');
                $('#site-nav li').removeClass("active");
                activeElem.parent().addClass("active");
            }
        });
    });
});
