// ------------------------------------------------------------------------
// Shop Panel
// ------------------------------------------------------------------------
(function () {
    var $shop = $('#shop'),
        $shopTrigger = $('#shop-trigger'),
        shopTop,
        timeoutId;

    function sliderize(slider) {
        var next = slider.find('.slider-next'),
            prev = slider.find('.slider-prev'),
            canvas = slider.find('.slider-slides'),
            canvasWidth = canvas.width(),
            duration = 300,
            maxScroll = canvas.get(0).scrollWidth - canvas.get(0).clientWidth;

        next.click(function(e){
            e.preventDefault();
            var currentScroll = canvas.scrollLeft(),
                scrollTo;
            if (maxScroll > currentScroll) {
                // scroll right once
                scrollTo = '+='+canvasWidth;
            } else {
                // scroll to start
                scrollTo = 0;
            }
            canvas.scrollTo({left: scrollTo, top: 0,  margin: true}, duration);
        });
        prev.click(function(e){
            e.preventDefault();
            var currentScroll = canvas.scrollLeft(),
                scrollTo;
            if (currentScroll === 0) {
                // scroll to end of scroll
                scrollTo = maxScroll;
            } else {
                // scroll left once
                scrollTo = '-=' + canvasWidth;
            }
            canvas.scrollTo({left: scrollTo, top: 0, margin: true}, duration);
        });
    }

    var hideShop = function() {
        if ($shopTrigger.hasClass('is-expanded')) {
            $shop.hide();
            $shopTrigger.removeClass('is-expanded');
        }
    };

    $shopTrigger.mouseenter(function(e){
        e.preventDefault();
        clearTimeout(timeoutId);

        $shopTrigger.addClass('is-expanded');
        shopTop = $shopTrigger.offset().top + $shopTrigger.outerHeight();

        // load the remote rendered shopping panel
        if (!$shop.hasClass('loaded')) {
            // The load of the remote shopping data might take a while, so long
            // display a spinner like text.
            $shop.text('Loading...');
            $shop.addClass('loading');

            // Move the panel down
            $shop.css({'display': 'none', 'top': shopTop});

            $shop.load('/misc/shop/', function(){
                $shop.removeClass('loading').addClass('loaded');
                sliderize($shop.find('.slider'));
            });
        }
        $shop.show();
    });

    $shopTrigger.mouseleave(function(e) {
        timeoutId = setTimeout(hideShop, 100);
    });

    $shop.mouseenter(function(e) {
        clearTimeout(timeoutId);
    });

    $shop.mouseleave(function(e) {
        timeoutId = setTimeout(hideShop, 100);
    });

    $(document).on('click', function (evt) {

        if ($(evt.target).parents('#shop').length || $(evt.target).attr('id') === 'shop-trigger') {
            // click within the shop, do nothing
            return;
        }

        if ($shop.is(':visible')) {
            // click outside shop, trigger shop close
            $shopTrigger.trigger('click');
        }
    });

})();
