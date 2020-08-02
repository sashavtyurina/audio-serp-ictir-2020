/* ------------------------------------------------------------------------
 * Article Associated Openers
 * --------------------------------------------------------------------- */
$('.associated .expand-cta').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var cta = $(this),
        container = cta.parents('.associated').eq(0).addClass('expanded'),
        content = container.find('template').get(0).content.cloneNode(true),
        displayContainer = container.find('.display');

    cta.hide();
    displayContainer.append(content);
    cta.siblings('.media').show(function() {
        // Setup any slideshows that we may have
        if (displayContainer.find('.slideshow-wrapper').length) {
            displayContainer.find('.slideshow-wrapper').each(function (key, elem) {
                    new SlideshowView({
                        el: elem
                    });
                });
        }

        if (displayContainer.find('.video-container')) {
            $(window).trigger('resize');
        }
    });
});

$('.associated .close-cta').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();

    var cta = $(this),
        container = cta.parents('.associated').eq(0).removeClass('expanded');

    // Destroy any videos we have open
    if (container.find('.video-container').get(0)) {
        container.find('.video-container').get(0).player.destroy();
    }

    container.find('.media').hide();
    container.find('.display').children().remove();
    container.find('.teaser').show();
});

/* ------------------------------------------------------------------------
 * Responsive Embeds
 * --------------------------------------------------------------------- */
$('.embedly-plugin[data-type=video],.embedly-plugin[data-type=rich]').each(function() {
    var obj = $(this).find('iframe'),
        height = obj.attr('height'),
        width = obj.attr('width');

    var ratio = ((height/width)*100).toPrecision(4) + '%';
    $(this).css('padding-bottom', ratio);
});

/* ------------------------------------------------------------------------
 * Generic Helpers
 * --------------------------------------------------------------------- */
$('.associated:last').addClass('last');

/* ------------------------------------------------------------------------
 * Move associated content to bottom of page if width is small
 * --------------------------------------------------------------------- */

(function () {
    var associatedResize = function () {

        var windowWidth = $(window).width(),
            $node = $('.associated-container');

        if (windowWidth < 1130) {
            // move associated content to the bottom
            $node.appendTo('.article-body');
        } else {
            // move to second paragraph
            $node.insertAfter('.article-body p:first');

        }
    };

    // trigger initial check
    associatedResize();

    // check associated location on window resize
    $(window).on('resize', associatedResize);

})();


/* ------------------------------------------------------------------------
 * Blockquotes fix
 * --------------------------------------------------------------------- */
(function () {

    /*
     * Desktop only
     */
    if (isMobile()) {
        return;
    }


    // article blockquote fix
    var $articleBody = $('.article-body'),
        associatedStart,
        associatedEnd;

    if (!$articleBody.find('aside.associated').length || !$articleBody.find('blockquote').length) {
        return;
    }

    associatedStart = $articleBody.find('.associated-header').offset().top;
    associatedEnd = $articleBody.find('aside.associated:first').offset().top;

    $articleBody.find('blockquote').each(function (key, node) {
        var $node = $(node),
            nodeOffsetTop = $node.offset().top;
        if ((nodeOffsetTop + $node.height()) > associatedStart && nodeOffsetTop < associatedEnd) {
            $node.addClass('associated-blockquote');
        }
    });

}());


/* ------------------------------------------------------------------------
 * Photo Essays
 * --------------------------------------------------------------------- */

$(document).on('click', '.essay-wrapper .mini-pagination .pager', function (evt) {
    var $pager = $(evt.currentTarget);
    var url = $pager.prop('href');
    var $body = $('.article-body');
    var $essay = $('.essay-wrapper');
    var videoContainer = $('.video-container').get(0);
    var player = videoContainer ? videoContainer.player : false;

    // prevent default action
    evt.preventDefault();
    evt.stopPropagation();

    if (url) {
        // loading indicator
        $essay.append('<span class="loading">loading..</span>');

        // destroy previous video player if there is one
        if (player && player.destroy) {
            player.destroy();
        }

        // make ajax request to fetch the next essay
        $.get(url + '&essay-ajax', function (data) {
            // make sure we only get the essay container
            // and only that.
            var $data = $(_.find($(data), function (elem) {
                return $(elem).hasClass('essay-wrapper');
            }));
            if (!$data.length) {
                window.location.href = url;
                return false;
            } else {
                // hide new photo essay to animate later
                $data.hide();
            }
            // fade out old essay
            $essay.fadeOut('fast', function () {
                $data.insertAfter($essay);
                $essay.remove();
                $data.fadeIn('fast');
                // this triggers the ads refresh on AdsAppView
                setTimeout(function() {
                    // trigger video player resize
                    $(window).trigger('resize');
                    // ads/voting changes
                    $(document).trigger('essay:change');
                }, 500);
            });
        });
    }
    return false;
});

/* ------------------------------------------------------------------------
 * WP wp-captions
 * --------------------------------------------------------------------- */
$('.wp-caption').each(function (key, node) {
    var $node = $(node),
        width = $node.find('img').width();

    $node.css('width', width);
});

/* ------------------------------------------------------------------------
 * Check for Chrome on Windows
 * --------------------------------------------------------------------- */

if ( (navigator.userAgent.indexOf('Chrome') != -1) && ( (navigator.appVersion.indexOf("Win") != -1) || navigator.appVersion.indexOf("Linux") != -1) ) {
    $('body').addClass('chromewin');
}
