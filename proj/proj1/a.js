$('a').click(function () {
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
});

// 퀵메뉴
$('.quick_menu li a').click(function () {
    // 버튼 hover 이벤트
    return false
    $(this).parent().addClass('on');
    $(this).parent().siblings().removeClass('on');
});

var sections = $('.target'),
    nav = $('.quick_menu'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').parent().removeClass('on');
            sections.removeClass('active');

            $(this).parent().addClass('on');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('on');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    return false;
});



$(window).on('scroll', function () {
    //스크롤의 위치가 상단에서 760보다 크면
    if ($(window).scrollTop() > 520) {
        /* if(window.pageYOffset >= $('원하는위치의엘리먼트').offset().top){ */
        $('.quick_menu').addClass("fixed");
        //위의 if문에 대한 조건 만족시 fixed라는 class를 부여함
    } else {
        $('.quick_menu').removeClass("fixed");
        //위의 if문에 대한 조건 아닌경우 fixed라는 class를 삭제함
    }
})