(function ($) {
    'use strict';

    /* =======================================
        For Search
    =======================================*/
    var $searchWrap = $('.search_wrp');
    var $navSearch = $('.search-trigger');
    var $searchClose = $('#search_close');

    $('.search-trigger').on('click', function (e) {
        e.preventDefault();
        $searchWrap.animate({ opacity: 'toggle' }, 500);
        $navSearch.add($searchClose).addClass("open");
    });

    $('.search_close').on('click', function (e) {
        e.preventDefault();
        $searchWrap.animate({ opacity: 'toggle' }, 500);
        $navSearch.add($searchClose).removeClass("open");
    });

    function closeSearch() {
        $searchWrap.fadeOut(200);
        $navSearch.add($searchClose).removeClass("open");
    }

    $(document.body).on('click', function (e) {
        closeSearch();
    });

    $(".search-trigger, .header-search-input").on('click', function (e) {
        e.stopPropagation();
    });


    /* =======================================
        For Cart Sidebar
    =======================================*/
    $(".header_cart_icon").on("click", function () {
        $(".cart_sidebar_info").addClass("info-opened");
        $(".body-overlay").addClass("opened");
    });
    $(".cart_sidebar_close-btn").on("click", function () {
        $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });
    $(".body-overlay").on("click", function () {
        $(".cart_sidebar_info").removeClass("info-opened");
        $(".body-overlay").removeClass("opened");
    });


    /* =======================================
        For Checkout Page
    =======================================*/
    
    $('#showlogin, #showcoupon').on('click', function() {
        $(this).parent().next().slideToggle(600);
    }); 

    /* =======================================
        For slider
    =======================================*/
    $("#slider_owl").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: false,
        autoplayTimeout: 9000, // Default is 5000
        smartSpeed: 1000, // Default is 250
        loop: true,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        mouseDrag: true,
        touchDrag: true,
    });


    /*=======================================
        slider Section
     ========================================== */
    $(".search_icon").on('click', function () {
        $(".search_icon_inr").slideToggle();
    });
    $(".slider_home").on("translate.owl.carousel", function () {
        $(".single_slider h2, .single_slider h5, .single_slider p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single_slider .slider_btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider_home").on("translated.owl.carousel", function () {
        $(".single_slider h2, .single_slider h5, .single_slider p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single_slider .slider_btn").addClass("animated fadeInDown").css("opacity", "1");
    });

    /* =======================================
         Team Section 
     =======================================*/
    $("#shop_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 2, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: false,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: false,
        dots: true,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        responsive: {
            1200: {
                items: 4
            },
            992: {
                items: 3
            },
            768: {
                items: 2
            },
            480: {
                items: 1
            },
            320: {
                items: 1
            },
            280: {
                items: 1
            }
        }
    });




    /* =======================================
         Testimonial Section 
     =======================================*/
    $("#fea_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 30,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    });


    /* =======================================
         Testimonial Section 
     =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: false,
        smartSpeed: 1000, // Default is 250
        items: 1, //Set Testimonial items
        loop: true,
        margin: 0,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
    });

    /*=======================================
        Client Section  
    =======================================*/
    $("#client_carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 5 seconds
        autoplay: true,
        smartSpeed: 2000, // Default is 250
        items: 5,
        loop: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: false,
        dots: false,
        nav: false,
        navText: ["<i class='fal fa-chevron-left'></i>", "<i class='fal fa-chevron-right'></i>"],
        responsive: {
            1200: {
                items: 5
            },
            992: {
                items: 5
            },
            768: {
                items: 4
            },
            480: {
                items: 3
            },
            320: {
                items: 2
            },
            280: {
                items: 2
            }
        }
    });


    /*=======================================
        Product  slider  
    =======================================*/

    $('.project_list_one').each(function () {
        $('.project_slider_one').slick({
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: 6000,
            prevArrow: '<i class="fal fa-chevron-left"></i>',
            nextArrow: '<i class="fal fa-chevron-right"></i>',
            responsive: [

                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '80px',
                        centerMode: true,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding: '0px',
                        centerMode: true,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });

        $('.btn-left').on('click', function () {
            $(this).parents('.project_list_one').find('.project_slider_one').slick('slickPrev');
        });

        $('.btn-right').on('click', function () {
            $(this).parents('.project_list_one').find('.project_slider_one').slick('slickNext');
        });

    });



    /* =======================================
        For Menu
    =======================================*/
    $("#navigation").menumaker({
        title: "",
        format: "multitoggle"
    });

    /* =======================================
            WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();


    /*=======================================
        Scroll Top
    =======================================*/

    $(window).on('scroll', function () {
        if ($(window).scrollTop() >= 500) {
            $('.scrollup').slideDown(450);
        } else {
            $('.scrollup').slideUp(450);
        }
    });

    /*----------------------------
    cart-plus-minus-button
   ------------------------------ */
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*----------------------------
     Shop carousel 
   ------------------------------ */
    $('.single-thumbnail-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-thumbnail-small'
    });
    $('.single-thumbnail-small').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.single-thumbnail-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        prevArrow: '<button type="button" class="custom-prev"><i class="fa fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="custom-next"><i class="fa fa-long-arrow-right"></i></button>',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            },
            {
                breakpoint: 580,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                    dots: false
                }
            }
        ]


    });


})(jQuery);