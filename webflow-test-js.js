(function () {


    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
   
cssLinks.forEach(function (link) {
    if (link.href.includes('webflow-test')) {
        link.href = 'https://qah836565.github.io/webflow-test/site-1/webflow-test-style.css?v=' +
            Date.now();
    }
});

   // const jsLinks = document.querySelectorAll('script[type="module"]');
   // jsLinks.forEach(function (link) {
   // if (link.src.includes('webflow-test')) {
   //      link.src = 'https://qah836565.github.io/webflow-test/site-1/webflow-test-js.js?v=' +
   //         Date.now();
   //  }
   //   });

    
    // ========================================
    // SLICK CDN
    // ========================================

    // if (typeof jQuery === 'undefined') {
    //     console.error('jQuery is not available.');
    //     return;
    // }


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

            slidesToScroll: 1,
             responsive: [
                 {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                 {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
                 ]

        });

    }


  

    

})();



// function end //

// document start //

$(document).ready(function () {


// $('.service-list-item-title').click(function(){
//     alert("prithanuka");
    
// })


$(".service-category-collection-list-item:first-child").addClass("faq-open");
        $(".service-category-collection-list-item").each(function () {
            if ($(this).hasClass("faq-open")) {
                $(this).find(".service-list-item-panel").show();
            }
        });
        $(".service-list-item-hd-outer").on("click", function () {
            $(this).parent().toggleClass("faq-open");
            $(this).next(".service-list-item-panel").stop(true, true).slideToggle();
            $(this).parent().siblings().removeClass("faq-open");
            $(this).parent().siblings().find(".service-list-item-panel").slideUp();
        });





const serviceLinks = document.querySelectorAll('.service-tab-link');
const serviceDetails = [ ...document.querySelectorAll('.service-details-item')];

serviceLinks.forEach( (link) => {

    link.addEventListener('click', function () {
        link.classList.remove('service-active');
        this.classList.add('service-active');
        const attr = this.getAttribute('data-service');
        const serviceDetail = serviceDetails.find(function (elem) {
            return elem.getAttribute('data-service') === attr;
        });

        serviceDetails.forEach(function (elem) {
            elem.classList.remove('service-active');
        });

        if (serviceDetail) {
            serviceDetail.classList.add('service-active');
        }

    });

});

// document end //
});


