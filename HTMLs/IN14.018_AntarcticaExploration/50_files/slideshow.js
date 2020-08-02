$('.slideshow-wrapper:not(.billboard-wrapper)').each(function (key, elem) {
    new SlideshowView({
        el: elem
    });
});


// On mobile show the slideshow variation, on desktops the full billboard
if (isMobile()) {
    $('.billboard-desktop').hide();
    $('.billboard-mobile').show();

    $('.billboard-wrapper').each(function (key, elem) {
        new BillboardMobileView({
            el: elem
        });
    });
} else {
    $('.billboard-desktop').removeClass('visuallyhidden').show();
    $('.billboard-mobile').hide();

    $('.billboard-desktop').each(function (key, elem) {
        new BillboardDesktopView({
            el: elem
        });
    });
}

//
// Featured stories slideshow
//
// make sure featured slideshows are displayed regardless
// of browser/device
$('.featured-slideshow .billboard-mobile').show();
$('.featured-slideshow').each(function (key, elem) {
    new BillboardMobileView({
        el: elem,
        auto: 0
    });
});
