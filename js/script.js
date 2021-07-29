$(function () {
    // preloader js
    $(window).on('load', function () {
        $('.preloader').delay(1000).fadeOut(800);
    })

    // circle progressbar
    $('.circlechart').circlechart();

    // venobox js
    $('.venobox').venobox();

    // fixed menu js
    $(window).scroll(function () {
        let scrolling = $(this).scrollTop();
        if (scrolling > 10) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    });

    // barfiller progressbar js
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();

    // counter up js
    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

    // navbar js
    $('.side-menu').click(function () {
        $('.sidebar').addClass('show-menu');
    });

    $('.sidebar .side-nav li a').click(function () {
        $('.sidebar').removeClass('show-menu');
    });

    // banner type js
    var typed = new Typed('.type', {
        strings: [
            'Frontend Developer',
            'Youtuber',
            'PHP Developer',
            'Lecturer',
        ],
        typeSpeed: 80,
        loop: true,
        backSpeed: 30,
        backDelay: 3000,
    });

    // mixitup js
    var containerEl = document.querySelector('.main-container');
    var mixer = mixitup(containerEl);

    // animation on scroll js
    AOS.init();

    // slick slider js
    $('.slider-main').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1,
        slidesToScroll: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    // smooth scroll js
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 74
                }, 0);
                return false;
            }
        }
    });

    // back to top button
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, );
    });

    // color switcher
    $('.mixer .icon').click(function () {
        $('.mixer').toggleClass('show-mixer');
    });

    // color switcher
    // $('.color_one').click(function () {
    //     $('nav .color_mixer').css('background-color', '#6957AF');
    //     $('nav ul li.active').css('color', '#6957AF');
    // });

    // $('.color_two').click(function () {
    //     $('nav .color_mixer').css('background-color', '#F72B1C');
    //     $('nav .active').css('color', '#F72B1C');
    // });

    // $('.color_three').click(function () {
    //     $('nav .color_mixer').css('background-color', '#8A2BE2');
    //     $('nav .active').css('color', '#8A2BE2');
    // });

    // $('.color_four').click(function () {
    //     $('nav .color_mixer').css('background-color', '#4169E1');
    //     $('nav .active').css('color', '#4169E1');
    // });

    // $('.color_five').click(function () {
    //     $('nav .color_mixer').css('background-color', '#DAA520');
    //     $('nav .active').css('color', '#DAA520');
    // });

    // $('.color_six').click(function () {
    //     $('nav .color_mixer').css('background-color', '#EE6192');
    //     $('nav .active').css('color', '#EE6192');
    // });

    // $('.color_seven').click(function () {
    //     $('nav .color_mixer').css('background-color', '#9ACD32');
    //     $('nav .active').css('color', '#9ACD32');
    // });

    // $('.color_eight').click(function () {
    //     $('nav .color_mixer').css('background-color', '#FA5B0F');
    //     $('nav .active').css('color', '#FA5B0F');
    // });

    // $('.color_nine').click(function () {
    //     $('nav .color_mixer').css('background-color', '#72B626');
    //     $('nav .active').css('color', '#72B626');
    // });

    // $('.color_ten').click(function () {
    //     $('nav .color_mixer').css('background-color', '#FFB400');
    //     $('nav .active').css('color', '#F72B1C');
    // });

});