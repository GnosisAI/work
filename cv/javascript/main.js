var jQuery = require("jquery")
var Materialize = require('materialize')
var ScrollReveal = require('scrollreveal')

jQuery(document).ready(function () {

    /***MENU TOGGLE ANIMATION***/
    $('.toggle-normal').on('click', function() {
            $('.top-bar').toggleClass('top-transform');
            $('.middle-bar').toggleClass('middle-transform');
            $('.bottom-bar').toggleClass('bottom-transform');
        });


    /***MENU CLOSE***/
    $('.section,div#menu-options a').on('click', function () {
        $('nav#theMenu').removeClass('menu-open');
        $('.top-bar').removeClass('top-transform');
        $('.middle-bar').removeClass('middle-transform');
        $('.bottom-bar').removeClass('bottom-transform');
    });

    /***MENU OPEN***/
    $('div#menuToggle').on('click', function () {
        $('div#menuToggle').toggleClass('active');
        $('body').toggleClass('body-push-toright');
        $('nav#theMenu').toggleClass('menu-open');
    });


    /***SMOOTH SCROLL***/
    $(function () {
        $('div#menu-options,div#about-btn').find('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 900, "swing");
                    return false;
                }
            }
        });
    });


    /***SCROLL TO TOP***/
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('div#scrollup').addClass('animated flipInY').fadeIn(200);    // Fade in the arrow
        } else {
            $('div#scrollup').fadeOut(200);
        }
    });


    $('div#scrollup').on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 600);

        return false;
    });
    /***SKILLS***/
    $('div.skillbar').each(function () {
        $(this).find('div.skillbar-bar').css({
            width: $(this).attr('data-percent')
        });
    });



    /***MAIL SCRIPT***/ // Upadted in V. 1.1
    $('form#contact-form').on('submit', function (e) {
        e.preventDefault(); //Prevents default submit
        var form = $(this);
        $("#submit").attr('disabled', 'disabled'); //Disable the submit button on click
        var post_data = form.serialize(); //Serialized the form data 
        $('div#form-loader').removeClass('is-hidden').fadeIn(500);
        $.ajax({
            type: 'POST',
            url: 'php/mail_handler.php', // Form script
            data: post_data
        })
            .done(function () {
                $('div#form-loader').fadeOut(500);
                Materialize.toast('Message Sent! I will contact you shortly, Thanks', 4000);
                $("form#contact-form")[0].reset();
                Materialize.updateTextFields(); // Rest floating labels
                $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button

            })
            .fail(function () {
                $('div#form-loader').fadeOut(500);
                Materialize.toast('Sorry! Something Wrong, Try Again', 4000);
                $("#submit").removeAttr('disabled', 'disabled'); // Enable submit button
            });
    });


});


jQuery(window).load(function () {

    /***FADES OUT PRE-LOADER***/
    $('div#loading').fadeOut(500);

    /***SCROLL ANIMATION***/
    window.sr = ScrollReveal({reset: false}); // reset false stops repetition of animation
    var commonCards = '#port-add-icon,#map-card,.interest-icon-even,.interest-icon,' +
        '.timeline-dot, .timeline-content,#add-more,#skills-card,#testimonials-card,' +
        '#portfolios-card,#interest-card,#p-one,#p-two,#p-three,#blog-card,#contact-card,#clients';
    // Customizing a reveal set
    sr.reveal(commonCards, {duration: 1100});
    sr.reveal('#about-card,.map-label', {duration: 1400, delay: 500});
    sr.reveal('#v-card-holder', {duration: 1400, distance: '150px'});
    sr.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});});
