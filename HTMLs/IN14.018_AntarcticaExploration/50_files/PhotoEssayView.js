var PhotoEssayView = Backbone.View.extend({
    /*
     * Photo Essay View
     */
    swipeOptions: {
        startSlide: 0,
        speed: 400,
        auto: false,
        continuous: true,
        disableScroll: false,
        stopPropagation: false,
        callback: function(index, elem) {}
    },

    events: {
        'click .slideshow-next': 'slideshowNext',
        'click .slideshow-prev': 'slideshowPrev'
    },

    initialize: function (options) {
        _.bindAll(this,
            'slideshowNavPrev',
            'slideshowNavNext',
            'slideshowImgNav'
        );

        this.$slideNav = this.$('.slideshow-nav:first');

        if (this.$slideNav) {
            // Click on the next/prev buttons in the slideshow navigation
            // A click on an image in the slideshow thumb navigation chanes the slide
            // but also might move the navigation slides around.
            this.$slideNav
                .on('click', '.slideshow-nav-next', this.slideshowNavNext)
                .on('click', '.slideshow-nav-prev', this.slideshowNavPrev)
                .on('click', 'img', this.slideshowImgNav);

            // On first load make sure the active navigation image is
            // visible (scrolled to the left).
            var div = $('.active:first', this.$slideNav);
            this.adjustNav(div, 'right');
        }
    },

    slideshowNavNext: function (evt) {
        var div = $(evt.currentTarget).parent();
        this.adjustNav(div, 'right');
    },

    slideshowNavPrev: function (evt) {
        var div = $(evt.currentTarget).parent();
        this.adjustNav(div, 'left');
    },

    slideshowImgNav: function (evt) {
        var div = $(evt.currentTarget).parent();
        document.location.href = div.attr('data-href');
        return null;
    },

    adjustNav: function (elem, direction) {
        // --------------------------------------------------------------------
        // Thumbnail Navigation
        // --------------------------------------------------------------------
        /*
                If a thumb on the right edge, around 90% of the
                total width, is clicked, scroll the thumb list leftwards.
                Recalculate every time since the width is fluid.
        */
        var duration = 400,
            elemExtend = 50, // 30px button width plus 20px more 'click' area for a element on the screen
            navWidth = this.$slideNav.width(),
            elemWidth = elem.outerWidth(),
            elemLeftWithin = elem.position().left, // distance to left edge in the scrollable container
            elemLeft = (this.$slideNav.find(elem).index() - 2) * elemWidth, // total left distance
            l;

        // -- The prev or next button
        // Slide either left or right, the width of the slideNav.
        if (direction === 'left') {
            this.$slideNav.scrollTo({left:'-='+navWidth, top: 0}, duration);
            return null;
        }
        if (direction === 'right') {
            this.$slideNav.scrollTo({left:'+='+navWidth, top: 0}, duration);
            return null;
        }

        // -- Image click on the right edge.
        // The elem is out of the right bound, scoll it to the right.
        if (elemLeftWithin + elemWidth + elemExtend > navWidth) {
            this.$slideNav.scrollTo({left:elemLeft, top: 0}, duration);
        }

        // -- Image click on the left edge.
        // The elem is on the left edge, scroll that its on the
        // right edge.
        if (elemLeftWithin - elemExtend < 0) {
            l = elemLeft - navWidth + elemWidth;
            this.$slideNav.scrollTo({left:l, top: 0}, duration);
        }
    },

});
