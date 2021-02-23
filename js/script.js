
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});

jQuery(document).ready(function($) {
    $('.popup-button').magnificPopup({
        type: 'inline'
    });
});

$(document).ready(function () {

    // $("#playvideo").click(function(){
    //     //as noted in addendum, check for querystring exitence
    //     var symbol = $("#video1")[0].src.indexOf("?") > -1 ? "&" : "?";
    //     //modify source to autoplay and start video
    //     $("#video1")[0].src += symbol + "autoplay=1";
    // });

    $("#playvideo").click(function(){
        $('.hero__video-wrap').toggleClass('disable');
        $('.hero__play-button').toggleClass('disable');
        $("#video1")[0].src += "?autoplay=1";
    });

    $("#playvideo2").click(function(){
        $('.end__video-wrap').toggleClass('disable');
        $('.end__play-button').toggleClass('disable');
        $("#video2")[0].src += "?autoplay=1";
    });

    // $("#playvideo").click(function(){
    //     document.getElementById("video1").src = 'https://www.youtube.com/embed/FO_wrNJj8vc';
    // });

    

    if ($(window).width() < 992) {
        $(".hero__inner").addClass('hero-slider');
    } else {
        $('.hero__inner').removeClass("hero-slider");
    }

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu,.header__button').toggleClass('active');
        $('body').toggleClass('lock');
    });

    $('.header__link').click(function(event) {
        if ($(".header__menu").hasClass('active')) {
            $('.header__burger,.header__menu,.header__button').toggleClass('active');
            $('body').toggleClass('lock');
        }
    });


    $('.btn-popup-close').on("click", function() {
        $.magnificPopup.close();
    });

    if ($(this).scrollTop() > $(".header").offset().top) {
        $(".header").toggleClass('active');
    }

    if ($(this).scrollTop() < $("#about").offset().top) {
        $("#main-link").toggleClass('active');
    }

    $(window).scroll(function(){
        if ($(this).scrollTop() > $(".header").offset().top) {
            $(".header").toggleClass('active');
        }
    
        if ($(this).scrollTop() < $(".hero__content").offset().top) {
            if ($(".header").hasClass('active')) {
                $(".header").toggleClass('active');
            }
        }

        var scroll = $(window).scrollTop();

        if (scroll >= $(".about__uptitle").offset().top - 400) {
            $(".about__uptitle").addClass('appear-left');
        }
        
        if (scroll >= $(".about__title").offset().top - 400) {
            $(".about__title").addClass('appear-left');
        }

        if (scroll >= $(".about__items").offset().top - 400) {
            $(".about__items").addClass('appear-bottom');
        }

        if (scroll >= $(".about__content").offset().top - 400) {
            $(".about__content").addClass('appear-right');
        }

        if (scroll >= $(".adv__uptitle").offset().top - 400) {
            $(".adv__uptitle").addClass('appear-bottom');
        }
        
        if (scroll >= $(".adv__title").offset().top - 400) {
            $(".adv__title").addClass('appear-bottom');
        }
        
        if (scroll >= $(".adv__wrap").offset().top - 400) {
            $(".adv__wrap").addClass('appear');
        } 

        if (scroll >= $(".cb__wrap").offset().top - 400) {
            $(".cb__wrap").addClass('appear-right');
        }

        if (scroll >= $(".why__desc").offset().top - 400) {
            $(".why__desc").addClass('appear-right');
        }
        
        if (scroll >= $(".why__title").offset().top - 400) {
            $(".why__title").addClass('appear-right');
        }

        if (scroll >= $(".why__row").offset().top - 400) {
            $(".why__row").addClass('appear-bottom');
        }
        if (scroll >= $(".why__request").offset().top - 400) {
            $(".why__request").addClass('appear');
        }

        if (scroll >= $(".end__text").offset().top - 400) {
            $(".end__text").addClass('appear-left');
        }

        if (scroll >= $(".end__advs").offset().top - 400) {
            $(".end__advs").addClass('appear-right');
        }

        if (scroll >= $(".end__video").offset().top - 400) {
            $(".end__video").addClass('appear-left');
        }

        if (scroll >= $(".end__form").offset().top - 400) {
            $(".end__form").addClass('appear-right');
        }

        if (scroll < $("#about").offset().top) {
            if (!$("#main-link").hasClass('active')) {
                $("#main-link").toggleClass('active');
            }
        } else {
            if ($("#main-link").hasClass('active')) {
                $("#main-link").toggleClass('active');
            }
        }

        if (scroll >= $("#about").offset().top && scroll < $("#advantages").offset().top) {
            if (!$("#about-link").hasClass('active')) {
                $("#about-link").toggleClass('active');
            }
        } else {
            if ($("#about-link").hasClass('active')) {
                $("#about-link").toggleClass('active');
            }
        }

        if ($(this).scrollTop() >= $("#advantages").offset().top & $(this).scrollTop() < $("#cashback").offset().top) {
            if (!$("#adv-link").hasClass('active')) {
                $("#adv-link").toggleClass('active');
            }
        } else {
            if ($("#adv-link").hasClass('active')) {
                $("#adv-link").toggleClass('active');
            }
        }

        if ($(this).scrollTop() >= $("#cashback").offset().top & $(this).scrollTop() < $("#end").offset().top) {
            if (!$("#cashback-link").hasClass('active')) {
                $("#cashback-link").toggleClass('active');
            }
        } else {
            if ($("#cashback-link").hasClass('active')) {
                $("#cashback-link").toggleClass('active');
            }
        }

        if ($(this).scrollTop() >= $("#end").offset().top) {
            if (!$("#end-link").hasClass('active')) {
                $("#end-link").toggleClass('active');
            }
        } else {
            if ($("#end-link").hasClass('active')) {
                $("#end-link").toggleClass('active');
            }
        }

        
    });

});

