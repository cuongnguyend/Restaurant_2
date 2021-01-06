$(document).ready(function() {
    AOS.init();
    var header = $('header .containner');

    $(window).scroll(function() {
        // back top top 
        if ($(this).scrollTop() > 20) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }

        var sticky = $('header .containner'),
            scroll = $(window).scrollTop();

        if (scroll >= 40) {
            sticky.addClass('sticky');
        } else {
            sticky.removeClass('sticky');

        }
    });

    $('#toTopBtn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // back top top

    $('.openNav').click(function() {
        $('.navv').show();
        $('.openNav').hide();
        $('.closeNav').show();
    });
    $('.closeNav').click(function() {
        $('.navv').hide();
        $('.closeNav').hide();
        $('.openNav').show();
    });


});
var totalItems1 = $('.slide1 .carousel-item').length;
var currentIndex1 = $('.slide1 .active').index() + 1;
$('.num1').html('0' + currentIndex1 + '/' + '0' + totalItems1 + '');
$('#multi-item-example2').on('slide.bs.carousel', function() {
    currentIndex1 = $('.slide1 .active').index() + 1;
    $('.num1').html('0' + currentIndex1 + '/' + '0' + totalItems1 + '');
});


var totalItems2 = $('.slide2 .carousel-item').length;
var currentIndex2 = $('.slide2 .active').index() + 1;
$('.num2').html('0' + currentIndex2 + '/' + '0' + totalItems2 + '');
$('#multi-item-example3').on('slid.bs.carousel', function() {
    currentIndex2 = $('.slide2 .active').index() + 1;
    $('.num2').html('0' + currentIndex2 + '/' + '0' + totalItems2 + '');
});


var totalItems3 = $('.slide3 .carousel-item').length;
var currentIndex3 = $('.slide3 .active').index() + 1;
$('.num3').html('0' + currentIndex3 + '/' + '0' + totalItems3 + '');
$('#multi-item-example4').on('slid.bs.carousel', function() {
    currentIndex3 = $('.slide3 .active').index() + 1;
    $('.num3').html('0' + currentIndex3 + '/' + '0' + totalItems3 + '');
});