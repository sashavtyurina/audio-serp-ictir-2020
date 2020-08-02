var BillboardMobileView = SlideshowView.extend({
    /*
     * Billboard View:
     * Billboards are image slideshows with custom animations
     * and no thumbnail navigation.
     * To integrate those custom animations, but still keep the original
     * slideshow widget (Swipe.js), we need to override previous/next links
     * so the appropriate animations are triggered at the right time.
     */

    initialize: function (options) {
        _.bindAll(this, 'resize');

        // bind resize event
        $(window).on('resize', this.resize);

        // call initial resize
        this.resize();

        this.isBillboard = true;

        // settings override
        this.swipeOptions = this.swipeOptions || {}
        this.swipeOptions.auto = options.auto === undefined ? 7000 : options.auto;

        // call initialize method for regular slideshows
        SlideshowView.prototype.initialize.call(this);
    },

    resize: function (evt) {
        // The billboard contains complex HTML content which does not resize in
        // height when the billboard slides are resized in width. Therefor we have
        // to do that manually.

        var newHeight,
            bbRatio = 500/1072; // The ratio a billboard has. Currently its
                                // 1072x500 pixel max. The height is also
                                // specified in _slideshow.scss, change it there!

        this.$('section').height(this.$el.width() * bbRatio);
    }
});
