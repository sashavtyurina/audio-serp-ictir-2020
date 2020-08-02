var BillboardDesktopView = Backbone.View.extend({
    /*
     * Billboard View:
     * Billboards have are image slideshows with custom animations
     * and no thumbnail navigation.
     * To integrate those custom animations, but still keep the original
     * slideshow widget (Swipe.js), we need to override previous/next links
     * so the appropriate animations are triggered at the right time.
     */

    slides: [],
    currentSlide: 0,
    // autoId stores the interval id that handles auto rotating the billboard
    autoId: null,
    // controls the time between each automatic slide
    // if 0, no auto slide happens
    auto: 1000,

    events: {
        'click .slideshow-next': 'slideshowNext',
        'click .slideshow-prev': 'slideshowPrev'
    },

    initialize: function (options) {
        _.bindAll(this, 'resize', 'slideshowNext');

        // bind resize event
        $(window).on('resize', this.resize);

        // call initial resize
        this.resize();

        // setup slides
        _.each(this.$('section.slide'), function (item) {
            this.slides.push(new SlideView({
                el: item
            }));
        }, this);

        // if only one slide, there are no animations
        // or auto slide
        if (this.slides.length === 1) {
            return;
        }

        this.slides[this.currentSlide].animateIn();

        // auto slide billboard
        this.auto = options.auto === undefined ? 7000 : options.auto;
        if (this.auto) {
            this.startInterval();
        }
    },

    startInterval: function () {
        // control the intervalId
        // if the auto slide is already in place
        // reset it and create a new one starting now.
        if (this.autoId) {
            clearInterval(this.autoId);
        }
        if (!this.auto) {
            return;
        }
        this.autoId = setInterval(this.slideshowNext, this.auto);
    },

    resize: function (evt) {
        // The billboard contains complex HTML content which does not resize in
        // height when the billboard slides are resized in width. Therefor we have
        // to do that manually.

        // don't show the billboard if the width is lower than 780px
        // it will never display correctly
        if (this.$el.width() < 780) {
            this.$el.hide();
            return;
        }

        if (!this.$el.is(':visible')) {
            this.$el.show();
        }

        var newHeight,
            bbRatio = 500/1072; // The ratio a billboard has. Currently its
                                // 1072x500 pixel max. The height is also
                                // specified in _slideshow.scss, change it there!

        newHeight = this.$el.width() * bbRatio;
        this.$('section').height(newHeight);
        this.$el.height(newHeight);

    },

    setNextSlide: function (nextSlide) {
        /*
         * Recieves the next wanted slide index
         * and returns the next available slide.
         * If wanted slide is 2, but there are only 2 slides (0 and 1 indexes),
         * it returns the first index (0).
         * If slide is -1, it returns the last index.
         */

        /*
         * If next slide doesn't exist, return first slide
         */
        if (nextSlide >= this.slides.length) {
            this.currentSlide = 0;
        } else if (nextSlide < 0) {
            /*
            * If previous goes under 0
            * return the last slide slide
            */
            this.currentSlide = this.slides.length -1;
        } else {
            this.currentSlide = nextSlide;
        }
    },

    slideshowNext: function (evt) {
        // change to next slide
        this.slideChange(this.currentSlide + 1);

        // if evt was triggered by a user
        if (evt !== undefined) {
            // slideshow change event for ad integration
            $(document).trigger('slideshow:change');
            // reset auto slide
            this.startInterval();
        }
    },

    slideshowPrev: function (evt) {
        // change to previous slide
        this.slideChange(this.currentSlide - 1);

        // if evt was triggered by a user
        if (evt !== undefined) {
            // slideshow change event for ad integration
            $(document).trigger('slideshow:change');
            // reset auto slide
            this.startInterval();
        }
    },

    slideChange: function (nextSlide) {
        this.slides[this.currentSlide].animateOut();
        this.setNextSlide(nextSlide);
        this.slides[this.currentSlide].animateIn();
    }
});
