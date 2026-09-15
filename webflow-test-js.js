(function () {

    // ========================================
    // SLICK CDN
    // ========================================

    if (typeof jQuery === 'undefined') {
        console.error('jQuery is not available.');
        return;
    }


    // ========================================
    // LOAD SLICK
    // ========================================

    if (typeof jQuery.fn.slick === 'function') {

        initSliders();

    } else {

        var slickScript = document.createElement('script');

        slickScript.src =
            'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';

        slickScript.onload = function () {
            initSliders();
        };

        slickScript.onerror = function () {
            console.error('Slick JS failed to load.');
        };

        document.head.appendChild(slickScript);
    }



    // ============================
    // YOUR SLICK CODE
    // ============================

    function initSliders() {

        var $universitySlider = $('.university-slider');
        var $progress = $('.univ-sld-progress-bar .univ-sld-progress-fill');


        if (!$universitySlider.length) {
            return;
        }


        // Progress bar
        $universitySlider.on('init beforeChange', function (e, slick, currentSlide, nextSlide) {

            var i = e.type === 'init' ? 0 : nextSlide;

            $progress.width(
                ((i + 1) / slick.slideCount) * 100 + '%'
            );

        });


        // Slick initialization
        $universitySlider.slick({

            dots: false,

            infinite: true,

            arrows: true,

            prevArrow: '.univ-sld-btn-left',

            nextArrow: '.univ-sld-btn-right',

            speed: 500,

            slidesToShow: 3,

            slidesToScroll: 1

        });

    }


    // faq functionality //
    if ($(".faq-list").length) {
        $(".faq-box:first-child").addClass("faq-open");
        $(".faq-box").each(function () {
            if ($(this).hasClass("faq-open")) {
                $(this).find(".faq-btn").next(".faq-panel").show();
            }
        });
        $(".faq-btn").on("click", function () {
            $(this).parent().toggleClass("faq-open");
            $(this).next(".faq-panel").stop(true, true).slideToggle();
            $(this).parent().siblings().removeClass("faq-open");
            $(this).parent().siblings().find(".faq-panel").slideUp();
        });
    }

    

})();

