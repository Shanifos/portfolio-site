window.addEventListener("load", function () {
    var load_screen = document.getElementById("load_screen");
    document.body.removeChild(load_screen);
});
$(document).ready(function () {
    var navOffset = $("nav").offset().top;
    $('nav').wrap("<div class='nav-placeholder'></div>");
    $(".nav-placeholder").height($('nav').outerHeight());
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= navOffset) {
            $('nav').addClass("sticky");

        }
        else {
            $('nav').removeClass("sticky");

        }
    })

});
//Collapse  the menu-----------------
$(document).ready(function () {
    $(".navbar-nav li a").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });
});
//End Collapse --------------------------
$(document).ready(function () {
    $('.skillbar').each(function () {
        $(this).find('.skillbar-bar').animate({ width: $(this).attr('data-percent') }, 10000);
    });

});
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Form -------------------
//material contact form animation
$('.contact-form').find('.form-control').each(function () {
    var targetItem = $(this).parent();
    if ($(this).val()) {
        $(targetItem).find('label').css({
            'top': '10px',
            'fontSize': '14px'
        });
    }
})
$('.contact-form').find('.form-control').focus(function () {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
        'top': '10px',
        'fontSize': '14px'
    }, 300);
})
$('.contact-form').find('.form-control').blur(function () {
    if ($(this).val().length == 0) {
        $(this).parent('.input-block').removeClass('focus');
        $(this).parent().find('label').animate({
            'top': '25px',
            'fontSize': '18px'
        }, 300);
    }
})