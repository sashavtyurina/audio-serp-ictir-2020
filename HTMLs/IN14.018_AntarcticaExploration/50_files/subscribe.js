window.SUBSCRIBE_HOVER = false;
var subscribeMenu = $('.subscribe-menu'),
    subscribeTrigger = $('#subscribe-trigger');

subscribeTrigger.hover(function () {
        var trigger = $(this);

        subscribeMenu.css({
            //'top': Math.round(trigger.offset().top + trigger.outerHeight()),
            //'left': Math.round(trigger.offset().left - trigger.outerWidth()),
            'display': 'block'
        });

        trigger.addClass('is-expanded');
    }, function() {
        setTimeout(function () {
            if (window.SUBSCRIBE_HOVER === false) {
                subscribeMenu.hide();
                subscribeTrigger.removeClass('is-expanded');
            }
        }, 100);
    });

subscribeMenu.hover(function () {
    window.SUBSCRIBE_HOVER = true;
}, function() {
    window.SUBSCRIBE_HOVER = false;
    subscribeMenu.hide();
    subscribeTrigger.removeClass('is-expanded');
});