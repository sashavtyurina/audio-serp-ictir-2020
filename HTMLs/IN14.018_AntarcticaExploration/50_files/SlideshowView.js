var SlideshowView = Backbone.View.extend({
    /*
     * Slideshow View
     */

    isBillboard: false,

    events: {
        'click .slideshow-next': 'slideshowNext',
        'click .slideshow-prev': 'slideshowPrev'
    },

    initialize: function (options) {
        _.bindAll(this, 'transitionEnd', 'slideshowNavPrev', 'setSlideshowSize',
                'slide', 'slideshowNavNext', 'slideshowImgNav',
                'slideshowNext', 'slideshowPrev');

        this.$slides = this.$('.slideshow-slides');
        this.$slideList = this.$('.slideshow-wrap > div', this.$slides);
        this.$slideNav = this.isBillboard ? undefined : this.$('.slideshow-nav:first'); // Billboard has no nav
        this.$slideNextPrev = this.$('.slideshow-next, .slideshow-prev');

        var $firstSlide = $(this.$slideList.get(0)).addClass('slide-in-next');

        this.$slideList.css('width', $firstSlide.width());

        // main slide index
        this.currentSlideIndex = 0;

        this.$slides.swipe({
            'swipe': _.bind(function(evt, direction) {
                if (direction === 'right') {
                    this.slideshowPrev(evt);
                } else if (direction === 'left') {
                    this.slideshowNext(evt);
                }
            }, this)
        });

        this.slideCount = this.$slideList.length;

        // event binding for slideshow nav (if there is one)
        if (this.$slideNav && this.$slideNav.length) {
            // Click on the next/prev buttons in the slideshow navigation
            // A click on an image in the slideshow thumb navigation chanes the slide
            // but also might move the navigation slides around.
            this.$slideNav.on('click', '.slideshow-nav-next', this.slideshowNavNext)
                .on('click', '.slideshow-nav-prev', this.slideshowNavPrev)
                .on('click', 'img', this.slideshowImgNav);
        }

        $(window).on('resize', this.setSlideshowSize);

        this.setSlideshowSize();

        // match initial slide
        var initialSlideMatch = window.location.search.match('slide=([0-9]{1,})');
        var $initialSlide;
        if (initialSlideMatch && initialSlideMatch.length === 2) {
            var $initialSlide = $('.slide[data-slide-id='+initialSlideMatch[1]+']');
            if ($initialSlide.length) {
                this.slideshowSlide($initialSlide.data('slide'), 0);
            }
        }

        // hack to compensante images not loading instantly
        // TOOD: check if the image is actually loaded
        // instead of randomly calling this
        _.delay(this.setSlideshowSize, 500);
        _.delay(this.setSlideshowSize, 1000);
        _.delay(this.setSlideshowSize, 1750);
        _.delay(this.setSlideshowSize, 3000);
    },

    slideshowNext: function (e) {
        var nextSlide;
        // do not use this.swipe.next();
        // because we need to manually resize the slideshow
        // to match the current and next image sizes
        // so we can provide a smooth animation experience.
        if (this.currentSlideIndex < this.slideCount - 1) {
            nextSlide = this.currentSlideIndex + 1;
        } else {
            // go to first
            nextSlide = 0;
        }
        this.slideshowSlide(nextSlide);
        // trigger slideshow change
        $(document).trigger('slideshow:change');
    },

    slideshowPrev: function (e) {
        var nextSlide;
        // do not use this.swipe.prev();
        // because we need to manually resize the slideshow
        // to match the current and next image sizes
        // so we can provide a smooth animation experience.
        if (this.currentSlideIndex !== 0) {
            nextSlide = this.currentSlideIndex - 1;
        } else {
            // go to last
            nextSlide = this.slideCount - 1;
        }
        this.slideshowSlide(nextSlide);
        // trigger slideshow change
        $(document).trigger('slideshow:change');
    },

    slideshowSlide: function (nextSlideIndex) {
        // if height of nextSlide is smaller than
        // height of currentSlide, then we need to resize
        // the slideshow to the same height as nextSlide.
        // if next slide is bigger in height than the
        // current height, this resizing happens at the end
        // of the slide transition.
        var $nextSlide = $(this.$slideList[nextSlideIndex]);
        var $currentSlide = $(this.$slideList[this.currentSlideIndex]);
        var nextSlideHeight = $nextSlide.height();
        var currentSlideHeight = $currentSlide.height();

        // hide the slideshow arrows so they don't show while animating slides.
        // The reason for this is that each slide can have a different height
        // and it's hard to make that transition smooth and in-sync
        // with the animation itself.
        // Note: we use opacity because with .hide() the nav would lose
        // :hover focus.
        this.$slideNextPrev.css('opacity', '0');

        // if the next slide is smaller in size, animate the height
        // of the slides container, so that it takes up at most
        // the height of the next container.
        if (nextSlideHeight < currentSlideHeight) {
            this.setSlideshowSize(nextSlideHeight);
        }

        // callback here
        this.slide(nextSlideIndex);

        // And adjust the navigation
        this.adjustPosition();
    },

    setSlideshowSize: function (slideHeight) {
        // set the slideshow height
        // to match the currently selected slideshow
        // unless there is a height override

        if (slideHeight) {
            // TODO: animate
            this.$slides.height(slideHeight);
            // set the next/prev arrows height
            this.$slideNextPrev.height(slideHeight);
            return;
        }

        var $slide = $(this.$slideList[this.currentSlideIndex]);
        var nextPrevHeight;

        // slideHeight is already defined via arguments
        slideHeight = $slide.height();
        nextPrevHeight = $slide.find('img').height();

        // TODO: animate the resize (if there is one)
        this.$slides.height(slideHeight);

        // set the next/prev arrows height
        this.$slideNextPrev.height(nextPrevHeight);
    },

    slide: function(slideIndex) {
        var $currentSlide = $(this.$slideList[this.currentSlideIndex]);
        var $nextSlide = $(this.$slideList[slideIndex]);

        // remove old slide out classes
        this.$('.slide-out-next, .slide-out-prev')
            .removeClass('slide-out-next slide-out-prev');

        // calculate direction to where the slideshow should slide.
        // Slide should go forward if:
        // - new slide shows after current slide
        // - current slide is the last slide, and new slide is 0
        // - current slide is 0 and next slide is the last slide
        if (slideIndex > this.currentSlideIndex ||
            (this.currentSlideIndex >= this.$slideList.length - 1 && slideIndex === 0) ||
            (this.currentSlideIndex === 0 && slideIndex === this.$slideList.length - 1)) {
            $currentSlide.addClass('slide-out-next')
                .removeClass('slide-in-next slide-in-prev');
            $nextSlide.addClass('slide-in-next');
        } else {
            $currentSlide.addClass('slide-out-prev')
                .removeClass('slide-in-next slide-in-prev');
            $nextSlide.addClass('slide-in-prev');
        }

        this.currentSlideIndex = parseInt(slideIndex);

        this.transitionEnd();
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
        var slideIndex = div.attr('data-slide');
        this.slide(slideIndex);
        this.adjustNav(div);
        // refresh ads
        $(document).trigger('slideshow:change');
    },

    adjustPosition: function () {
        /*
         * Adjust the thumb nav position
         */
        var $slide;

        if (this.$slideNav) {
            $slide = this.$slideNav.find('div[data-slide='+this.currentSlideIndex+']');
            this.adjustNav($slide);
        }

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
        var duration = 400;
        var elemExtend = 50; // 30px button width plus 20px more 'click' area for a element on the screen
        var navWidth = this.$slideNav.width();

        // check if we're scrolling to an element that does not
        // exist on the thumbnail nav
        if (!elem.length) {
          return null;
        }
        var elemWidth = elem.outerWidth();
        var elemLeftWithin = elem.position().left; // distance to left edge in the scrollable container
        var elemLeft = (this.$slideNav.find(elem).index() - 2) * elemWidth; // total left distance
        var l;

        // -- The prev or next button
        // Slide either left or right, the width of the slideNav.
        if (direction === 'left' && this.$slideNav) {
            this.$slideNav.scrollTo({left:'-='+navWidth, top: 0}, duration);
            return null;
        }
        if (direction === 'right' && this.$slideNav) {
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

    transitionEnd: function() {
        // set the new slideshow height
        this.setSlideshowSize();

        // after the transition is over,
        // display the slideshow's next and prev arrows
        this.$slideNextPrev.css('opacity', '1');

        // Reset slideNav and make sure the right screenshot is active
        if (this.$slideNav && this.$slideNav.length) {
            this.$slideNav.find('div.active').removeClass('active');
            $(this.$slideNav.find('div').get(this.currentSlideIndex)).addClass('active');
        }
    }
});