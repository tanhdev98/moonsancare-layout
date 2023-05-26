  // breadcrumb script
  $(function () {
    $(document).on('click', '.breadcrumb-item', function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('ul').slideUp();
        } else {
            $('.breadcrumb-item').removeClass('active');
            $('.breadcrumb-item ul').slideUp();
            $(this).addClass('active');
            $(this).find('ul').slideToggle(200);
        }
    });

    // remove class active when click outsite
    $(document).on('click', function (e) {
        if ($(e.target).closest('.breadcrumb-item').length === 0) {
            $('.breadcrumb-item').removeClass('active');
            $('.breadcrumb-item ul').slideUp();
        }
    });
});

// menu hover script

$(function(){
    $(document).on('mouseover', 'header .navbar .navbar-nav .nav-item', function(){
        $(this).parents('header').addClass('on');
        $(this).addClass('on').siblings().removeClass('on');
    });

    $(document).on('mouseleave', 'header .navbar .menu-wrap', function(){
        $(this).parents('header').removeClass('on');
        $('header .navbar .navbar-nav .nav-item').removeClass('on');
    });
});