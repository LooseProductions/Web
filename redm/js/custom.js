/*  Theme Name: Sevaral - Responsive Multipurpose Business Template
    Author: Saptavarana
    Version: 1.0.0
    Created:September 2018
    File Description:Main Js file of the template
*/

        $(window).on('scroll', function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("stickyadd");
            } else {
                $(".sticky").removeClass("stickyadd");
            }
        });
   

        var timer = null;
        $('.navbar-nav a, .scroll_down a').on('click', function(event) {
            var $anchor = $(this);
            var href = $anchor.attr('href');
            var index = href.indexOf('#'); 
            if (index === -1) {
                return;
            }
            var hash = href.substring(index);
            if (window.location.pathname == '/home') {
                $('html, body').stop().animate({
                    scrollTop: $(hash).offset().top - 0
                }, 1500, 'easeInOutExpo');
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(function() {
                    window.location.hash = hash;
                    timer = null;
                }, 1550);
                event.preventDefault();
            }
        });
    

        $("#navbarCollapse").scrollspy({
            offset: 20
        });
    
        $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true,
        });

        $(document).ready(function() {
            $("#app_testi").owlCarousel({
                autoPlay: 28000,
                items: 3,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3]
            });
        });
   
        $('.img-zoom').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            }
        });

        $('.features_video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    
        $(window).on('load', function() {
            var $container = $('.work-filter');
            var $filter = $('#menu-filter');
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            $filter.find('a').on("click", function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });

