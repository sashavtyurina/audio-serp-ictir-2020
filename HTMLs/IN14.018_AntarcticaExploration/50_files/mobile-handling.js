function isMobile() {
    return (typeof window.orientation !== 'undefined');
}

/* ------------------------------------------------------------------------
 * Set a cookie on every request, figure if we're on Desktop or Moble
 * --------------------------------------------------------------------- */
var cookieExpDate = new Date(),
        cookieName = 'devicetype',
        cookieValue;

cookieExpDate.setDate(cookieExpDate.getDate() + cookieExpDate);

if (isMobile()) {
    cookieValue = 'mobile' +  "; expires="+cookieExpDate.toUTCString() + "; path=/";
    document.cookie = cookieName + "=" + cookieValue;

    // enable fastclick
    FastClick.attach(document.body);
} else {
    cookieValue = 'desktop' +  "; expires="+cookieExpDate.toUTCString() + "; path=/";
    document.cookie = cookieName + "=" + cookieValue;
};

/* ------------------------------------------------------------------------
 * Remove all .mobileOnly elements
 * --------------------------------------------------------------------- */
if (!isMobile()) {
    $('.mobile-only').remove();
}

/* ------------------------------------------------------------------------
 * Setup Mobile Flags
 * --------------------------------------------------------------------- */

(function () {

    /*
     * window size and mobile detection for $smith core;
     * Usage:
     *
     * $smith.isMobile();
     * $smith.frame.isSmall();
     * $smith.frame.isMedium();
     * $smith.frame.isLarge();
     *
     * All methods return Boolean values (true/false);
     */

    window.$smith = _.extend(window.$smith, {
        // device orientation detection
        isMobile: function () {
            // TODO: get rid of window.isMobile global
            // and set all the logic here
            return window.isMobile();
        },
        frame: {
            isSmall: function () {
                return window.matchMedia("(max-width: 51em)").matches;
            },
            isMedium: function () {
                // TODO: this matches both medium and large
                // are we sure this is what's expected?
                return window.matchMedia("(min-width: 51em)").matches;
            },
            isLarge: function () {
                return window.matchMedia("(min-width: 71em)").matches
            }
        },
        isTablet: function () {
            // both medium size window and orientation support
            return this.isMobile() && this.frame.isMedium();
        }
    });
})();