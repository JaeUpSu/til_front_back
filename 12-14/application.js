$(() => {

    $('.nav-link').click(function () {
        // .nav-link 클릭시 이전의 active 값 해제 후, 
        $(".nav-item > .active").css("background-color", "white");
        $(".nav-item > .active").css("color", "rgb(140, 140, 140)");

        console.log($(".navbar"));

        $('.nav-link').removeClass('active');

        // 클릭한 위치 active 적용 
        $(this).addClass('active');
        $(".nav-item > .active").css("background-color", "rgb(228, 228, 228)");
        $(".nav-item > .active").css("color", "rgb(58, 58, 58)");

        if ($(this).hasClass("dropdown") === true) {
            $(".dropdown-menu").css("display", "flex");
        } else {
            $(".dropdown-menu").css("display", "none");
        }
    });

    // $('.navbar-togglebtn').on('click', function () {
    //     $('.navbar-nav').toggle('active');
    // });

    // let navItemState = [true, true, true, true, true, true, true];
    // $(window).resize(function () {
    //     const width_size = window.outerWidth;

    //     function update(index) {
    //         $(".dropdown-menu").append("<li><div><a class=\"dropdown-item\">Business<a></div></li>")
    //         $(`.nav-item:nth-last-child(${index})`).css("display", "none");
    //         navItemState[2] = false;
    //     }

    //     if (width_size <= 890 && navItemState[2]) {
    //         alert("크기");
    //         update(2);
    //     }

    // })

    $(".burger-btn").on("click", function () {
        $(".burger-btn").classList.toggle('toggle');
    });
});


        // if ($(this).hasClass("hidden") === true) {
        //     $(".hidden").addClass('appear');
        //     $(".hidden").removeClass('disappear');
        //     // $(".dropdown-menu").css("display", "grid");
        // } else {
        //     if ($(".hidden").hasClass("appear") === true) {
        //         $(".hidden").addClass('disappear');
        //         $(".hidden").removeClass('appear');
        //     }
        //     //  $(".dropdown-menu").css("display", "none");
        // }