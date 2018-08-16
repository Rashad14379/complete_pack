/*============================
   js index
==============================

==========================================*/

(function($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/
    // var preloader = $('#preloader');
    // $(window).on('load', function() {
    //     preloader.fadeOut('slow', function() { $(this).remove(); });
    // });

    /*================================
    stickey Header
    ==================================*/
    // $(window).on('scroll', function() {
    //     var scroll = $(window).scrollTop(),
    //         mainHeader = $('#sticky-header'),
    //         mainHeaderHeight = mainHeader.innerHeight();

    //     // console.log(mainHeader.innerHeight());
    //     if (scroll > 1) {
    //         $("#sticky-header").addClass("sticky-menu");
    //     } else {
    //         $("#sticky-header").removeClass("sticky-menu");
    //     }
    // });

    /*================================
    slider-area background setting
    ==================================*/
    // function sliderBgSetting() {
    //     if ($(".slider-area2 .slider-items").length) {
    //         $(".slider-area2 .slider-items").each(function() {
    //             var $this = $(this);
    //             var img = $this.find(".slider").attr("src");

    //             $this.css({
    //                 backgroundImage: "url(" + img + ")",
    //                 backgroundSize: "cover",
    //                 backgroundPosition: "center center"
    //             })
    //         });
    //     }
    // }

    // WHEN DOCUMENT LOADING
    // $(window).on('load', function() {
    //     sliderBgSetting()
    // });

    /*================================
    Owl Carousel
    ==================================*/
    // $('.test-active').owlCarousel({
    //     margin: 0,
    //     loop: true,
    //     autoplay: true,
    //     autoplayTimeout: 4000,
    //     nav: false,
    //     smartSpeed: 800,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     URLhashListener: true,
    //     startPosition: 'URLHash',
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         450: {
    //             items: 1
    //         },
    //         768: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 2
    //         }
    //     }
    // });

    /*================================
    Parallax background
    ==================================*/
    // function bgParallax() {
    //     if ($(".parallax").length) {
    //         $(".parallax").each(function() {
    //             var height = $(this).position().top;
    //             var resize = height - $(window).scrollTop();
    //             var parallaxSpeed = $(this).data("speed");
    //             var doParallax = -(resize / parallaxSpeed);
    //             var positionValue = doParallax + "px";
    //             var img = $(this).data("bg-image");

    //             $(this).css({
    //                 backgroundImage: "url(" + img + ")",
    //                 backgroundPosition: "50%" + positionValue,
    //                 backgroundSize: "cover",
    //             });

    //             if (window.innerWidth < 768) {
    //                 $(this).css({
    //                     backgroundPosition: "center center"
    //                 });
    //             }
    //         });
    //     }
    // }
    // bgParallax();
    // $(window).on("scroll", function() {
    //     bgParallax();
    // });

    /*================================
    scrollUp
    ==================================*/
    // $.scrollUp({
    //     scrollText: '<i class="fa fa-arrow-up"></i>',
    //     easingType: 'linear',
    //     scrollSpeed: 900,
    //     animation: 'fade'
    // });

    /*================================
    Magnific Popup
    ==================================*/
    // $('.expand-img').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true
    //     }

    // });

    // $('.expand-video').magnificPopup({
    //     type: 'iframe',
    //     gallery: {
    //         enabled: true
    //     }

    // });

    /*================================
    counter up
    ==================================*/
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    /*================================
    slicknav
    ==================================*/
    // $('ul#navigation').slicknav({
    //     prependTo: ".responsive-menu-wrap"
    // });


    /*================================
    Masonary
    ==================================*/
    // $('#container').imagesLoaded(function() {

    //     // filter items on button click
    //     $('.project-menu').on('click', 'button', function() {
    //         var filterValue = $(this).attr('data-filter');
    //         $grid.isotope({ filter: filterValue });
    //     });

    //     // init Isotope
    //     var $grid = $('.masonary_container').isotope({
    //         itemSelector: '.grid',
    //         percentPosition: true,
    //         masonry: {
    //             // use outer width of grid-sizer for columnWidth
    //             columnWidth: '.grid',
    //         }
    //     });
    // });

    // $('.project-menu button').on('click', function(event) {
    //     $(this).siblings('.active').removeClass('active');
    //     $(this).addClass('active');
    //     event.preventDefault();
    // });

    /*================================
    Ajax Contact Form
    ==================================*/
    // $('.screen-reader-response').hide();
    // $('form#cf button#submit').on('click', function() {
    //     var fname = $('#fname').val();
    //     var subject = $('#subject').val();
    //     var email = $('#email').val();
    //     var msg = $('#msg').val();
    //     var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    //     if (!regex.test(email)) {
    //         alert('Please enter valid email');
    //         return false;
    //     }

    //     fname = $.trim(fname);
    //     subject = $.trim(subject);
    //     email = $.trim(email);
    //     msg = $.trim(msg);

    //     if (fname != '' && email != '' && msg != '') {
    //         var values = "fname=" + fname + "&email=" + email + " &msg=" + msg;
    //         $.ajax({
    //             type: "POST",
    //             url: "mail.php",
    //             data: values,
    //             success: function() {
    //                 $('#fname').val('');
    //                 $('#email').val('');
    //                 $('#msg').val('');

    //                 $('.screen-reader-response').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
    //                 setTimeout(function() {
    //                     $('.screen-reader-response').fadeOut('slow');
    //                 }, 4000);
    //             }
    //         });
    //     } else {
    //         $('.screen-reader-response').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
    //     }
    //     return false;
    // });

    /*================================
    countdown
    ==================================*/
    // $('[data-countdown]').each(function() {
    //     var $this = $(this),
    //         finalDate = $(this).data('countdown');
    //     $this.countdown(finalDate, function(event) {
    //         $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
    //     });
    // });

    /*================================
    Smoth Scroll
    ==================================*/
    // function smoothScrolling($links, $topGap) {
    //     var links = $links;
    //     var topGap = $topGap;

    //     links.on("click", function() {
    //         if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
    //             if (target.length) {
    //                 $("html, body").animate({
    //                     scrollTop: target.offset().top - topGap
    //                 }, 1000, "easeInOutExpo");
    //                 return false;
    //             }
    //         }
    //         return false;
    //     });
    // }

    // $(window).on("load", function() {
    //     smoothScrolling($("a.scrollup-btn[href^='#']"), 0);
    // });

    /*================================
    Active current Li
    ==================================*/
    // $(window).on("scroll", function() {
    //     activeMenuItem($(".nav-menu"));
    // });

    // //function for active menuitem
    // function activeMenuItem($links) {
    //     var top = $(window).scrollTop(),
    //         windowHeight = $(window).height(),
    //         documentHeight = $(document).height(),
    //         cur_pos = top + 2,
    //         sections = $("section"),
    //         nav = $links,
    //         nav_height = nav.outerHeight(),
    //         home = nav.find(" > ul > li:first");

    //     sections.each(function() {
    //         var top = $(this).offset().top - nav_height - 40,
    //             bottom = top + $(this).outerHeight();

    //         if (cur_pos >= top && cur_pos <= bottom) {
    //             nav.find("> ul > li > a").parent().removeClass("active");
    //             nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
    //         } else if (cur_pos === 2) {
    //             nav.find("> ul > li > a").parent().removeClass("active");
    //             home.addClass("active");
    //         } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
    //             nav.find("> ul > li > a").parent().removeClass("active");
    //         }
    //     });
    // }


})(jQuery);