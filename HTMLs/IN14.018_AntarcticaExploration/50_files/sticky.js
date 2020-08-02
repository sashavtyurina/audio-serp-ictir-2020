/* ------------------------------------------------------------------------
 * Advertising
 * --------------------------------------------------------------------- */
 
 // --- The bottom fixed ad on mobile devices
 // Check the height of this ad and add it to the body, so content is
 // never hidden by the add, even if scrolled down to the end.
 /*
$('.sticky-mobile-ad').each(function(){
    var adContainer = $(this),
        adHeight = $(this).height(),
        closeTrigger = $(this).find('a.close');

    $('body').css('padding-bottom', adHeight);

    // Close animation
    closeTrigger.click(function(e){
        e.preventDefault();
        adContainer.fadeOut(300);
        $('body').css('padding-bottom', 0);
    });
});
*/

// --- The sticky ad in the sidebar
$('.sticky-block').each(function(){
    var $sticky = $(this),
        stickyTopPadding = 50;

    if ($sticky.length) { // make sure ".sticky" element exists
        $(window).scroll(function() { // scroll event
            var windowTop = $(window).scrollTop(), // returns number
                // calculate maxOffset here to make sure it's 100% correct
                // since height can vary depending on comments
                $main = $('main.main'),
                maxOffset = $main.offset().top + $main.height(),
                stickyTop = $('.sticky-clearance').offset().top; // returns number

            if (stickyTop < windowTop + stickyTopPadding) {
                // sticky should be limited to the main container height
                if (windowTop + $sticky.height() + 40 > maxOffset) {
                    // position sticky on the last possible offset
                    $sticky.css('position', 'absolute')
                        .css('top', $main.height() - $sticky.height());
                } else {
                    $sticky.addClass('is-sticky').removeAttr('style');
                }
            } else {
                $sticky.removeClass('is-sticky').removeAttr('style');
            }
        });
    }
});

