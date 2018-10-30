$(document).ready(function () {

    // 預設隱藏3D swiper-wrapper
    $(".swiper-container").hide();

    // 下拉式 聯絡我們 選單特效
    $('.connection').click(function (e) {
        e.preventDefault();

        $('.connectionList').toggleClass('active');
        $('.connection').toggleClass('active');

        $('.productList').removeClass('active');
        $('.product').removeClass('active');
    });

    // 下拉式 產品介紹 選單特效
    $('.product').click(function (e) {
        e.preventDefault();

        $('.productList').toggleClass('active');
        $('.product').toggleClass('active');

        $('.connectionList').removeClass('active');
        $('.connection').removeClass('active');
    });

    // nivo - slider
    $(window).on('load', function () {
        $('#slider').nivoSlider();
    });


    $('.topbtn').click(function (e) {
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 800);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 40)
            $('.topbtn').fadeIn();
        else
            $('.topbtn').fadeOut();
    });

    // 3D 圖片 事件
    $('.overlay_on').click(function (e) {
        $(".swiper-container").show();
        if ($(this).attr("id") == 1) {
            swiper_initialSlide(0);
        } else if ($(this).attr("id") == 2) {
            swiper_initialSlide(1);
        } else if ($(this).attr("id") == 3) {
            swiper_initialSlide(2);
        }
    });

    $('.swiper-container').click(function (e) {
        $(".swiper-container").hide();
    });

    $('.send').click(function (e) {
        e.preventDefault();
        if ($("input[name=name]").val() == '' || $("input[name=phone]").val() == '' || $("input[name=email]").val() == '') {
            new $.Zebra_Dialog('請輸入姓名、電話、信箱!'); return;
        }else
            new $.Zebra_Dialog('姓名:' + $("input[name=name]").val() + "<br>" + "<br>" +
                '電話:' + $("input[name=phone]").val() + "<br>" + "<br>" +
                '信箱:' + $("input[name=email]").val() + "<br>" + "<br>" +
                '內容:' + $("textarea[name=content]").val() + "<br>");

        $("input").val('');
        $("textarea").val('');
    });
});

// 3D圖片初始化
function swiper_initialSlide(index) {
    var swiper = new Swiper('.swiper-container', {
        initialSlide: index,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 500,
            modifier: 5,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });
}

// loading
window.addEventListener('DOMContentLoaded', function () {
    QueryLoader2(document.querySelector("body"), {
        barColor: "#efefef",
        backgroundColor: "#111",
        percentage: true,
        barHeight: 1,
        minimumTime: 200,
        fadeOutTime: 1000
    });
});
