

var $universitySlider = $('.university-slider');
    var $progress = $('.univ-sld-progress-bar .univ-sld-progress-fill');

    $universitySlider.on('init beforeChange', function (e, slick, _, next) {
        var i = e.type === 'init' ? 0 : next;
        $progress.width(((i + 1) / slick.slideCount) * 100 + '%');
    });


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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
