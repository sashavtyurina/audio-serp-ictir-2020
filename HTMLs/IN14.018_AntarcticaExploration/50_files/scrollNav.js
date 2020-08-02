(function () {

    // if mobile, don't render the scroll nav
    if (isMobile()) {
        return;
    }

    if ($('.nav-wrapper-bg').length) {
        var subHeaderOffset = $('.nav-wrapper-bg').offset().top + 0,
            $scrollNav = $('#Scroll-Nav'),
            minWindowWidth = 802,
            windowChangeCallback = function (evt) {
                var scrollTop = $(window).scrollTop();

                if ($(window).width() < minWindowWidth) {
                    $scrollNav.hide();
                    return;
                }

                if (subHeaderOffset < scrollTop) {
                    // scroll header ON, but already visible
                    // probably the most common occurance, so do nothing
                    if (!$scrollNav.is(':visible')) {
                        $scrollNav.fadeIn('fast');
                    }
                } else if (subHeaderOffset > scrollTop && $scrollNav.is(':visible')) {
                    $scrollNav.fadeOut();
                }
            };
        }

    $(window).scroll(windowChangeCallback).resize(windowChangeCallback);
}());
