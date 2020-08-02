/*
* By default, jQuery 1.4+ uses recursive serialization, which Django does
* not support. Disable this feature.
*/
$.ajaxSettings.traditional = true;

/* ------------------------------------------------------------------------
 * Search autocomplete / typeahead
 * --------------------------------------------------------------------- */
if ($('form.search-form input#id_q').length > 0) {
    var selected_facets = $('.search-form input[name=selected_facets]'),
        content_type = $('.search-form input[name=content_type]'),
        from_date = $('.search-form input[name=from]'),
        to_date = $('.search-form input[name=to]'),
        url = $('form.with-suggest').attr('data-suggest-url') + '?q=%QUERY';

    if (selected_facets.val()) {
        url += '&selected_facets=' + encodeURIComponent(selected_facets.val());
    }
    if (content_type.val()) {
        url += '&content_type=' + content_type.val();
    }
    if (from_date.val() && to_date.val()) {
        url += '&from=' + from_date.val() + '&to=' + to_date.val();
    }

    $('form.with-suggest input#id_q').typeahead([{
        name: 'search',
        remote: url
    }]);
}

/* ------------------------------------------------------------------------
 * Search datepicker with github.com/dbushell/Pikaday
 * --------------------------------------------------------------------- */
if ($('.with-suggest input#id_date_to').length > 0) {
    var search_date_to =  $('.with-suggest input#id_date_to').pikaday();
}

if ($('.with-suggest input#id_date_from').length > 0) {
    var search_date_to =  $('.with-suggest input#id_date_from').pikaday();
}

/* ------------------------------------------------------------------------
 * Accessible Tabs
 * --------------------------------------------------------------------- */
$('.tab').on('click', function(event) {
    event.preventDefault();

    var tab = $(this);
    var container = tab.parents('.tab-container').eq(0);
    var pane = tab.attr('href');

    // Change the highlight of the tabs
    container.find('.tab').removeClass('active');
    tab.addClass('active');

    container.find('.pane').removeClass('visuallyshown').addClass('visuallyhidden');
    container.find(pane).removeClass('visuallyhidden');

    $(document).trigger('tab:change', {
        'pane': pane
    });
});


/* ------------------------------------------------------------------------
 * Select Nav Changer
 * --------------------------------------------------------------------- */
$('.select-nav').bind('change', function () {
    var url = $(this).val();
    if (url) {
        window.location = url;
    }
    return false;
});

/* ------------------------------------------------------------------------
 * Clear the Sidebar
 * --------------------------------------------------------------------- */
function sizeMain () {
    var sidebarHeight = 0;
    var sidebar = $('.sidebar');
    var targets = '.signup-wrapper, .post-main';

    $('.sidebar > *').each(
        function() {
            var $elem = $(this);
            if ($elem.css('position') === 'absolute') {
                sidebarHeight += $elem.outerHeight();
            }
        }
    );
    // if (sidebar).overlaps(targets)) {
    //     $('.main').css('min-height', sidebarHeight);
    // }
}

function getURLParameter(name, flags) {
    flags = flags || ''
    var val = (new RegExp('[?|&]' + name + '(=([^&;]+?))?(&|#|;|$)', flags).exec(location.search)||[,,""])[2]
    if (val === void 0){  // equivalent to _.isUndefined(val)
        return true;
    }
    return decodeURIComponent(val.replace(/\+/g, '%20'))||null
}

function setInterstatial () {
    var ist = getURLParameter('no-ist', 'i');
    if ( ist ){
        var d = new Date();
        d.setTime(d.getTime()+(24*60*60*1000));
        var expires = "expires="+d.toGMTString();
        document.cookie = "has_seen_interstatial=skip;"+expires
    }
}

$(document).ready(function () {
    sizeMain();
    setInterstatial();
    // We run this 3 seconds after the page loads
    // in order to give ads time to load.
    // We do this because we have no event to hook to.
    //
    setTimeout(sizeMain, 3000);
});

$(window).scroll(sizeMain);

/* ------------------------------------------------------------------------
 * Initialize the Suzy off canvas toggle
 * --------------------------------------------------------------------- */
new OffCanvasToggle($('.toggle'));

/* -----------------------------------------------------------------------------------
 * Placeholder text for IE 8-9 on Journeys search form for Smithsonian Magazine site
 * -------------------------------------------------------------------------------- */
 $("#ie-search-label").click(function() {
    $(this).hide();
 });

 /* -----------------------------------------------------------------------------------
  * Resize article overview thumbnail image for IE
  * -------------------------------------------------------------------------------- */
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
      if ($(window).width() > 815) {
          $(".IE-article-overview-thumbnail-hide").remove();
      }
  }

/* -----------------------------------------------------------------------------------
* Header Search
* -------------------------------------------------------------------------------- */
function navSearchURL() {
  var searchInputValue = $('#nav-search').val();
  location.href = '//' + window.location.hostname + '/search/?q=' + searchInputValue;
  event.preventDefault();
}

$('#nav-search').keypress(function(e) {
  if (e.which == 13) {
      setTimeout(function() {
          $('.search-trigger').click();
      },0);
      event.preventDefault();
      return false;
  }
});

/* -----------------------------------------------------------------------------------
* Dashboard mobile menu
* -------------------------------------------------------------------------------- */
$('body.accounts .user-block i.fa-bars').on('click', function() {
    $('body.accounts .sidebar').animate({'margin-left': 0});
});
$('body.accounts .sidebar i.fa-times').on('click', function() {
    $('body.accounts .sidebar').animate({'margin-left': '-500px'});
});

/* ------------------------------------------------------------------------
 * Fix slideshows overlapping associated content
 * --------------------------------------------------------------------- */
function handleACOverlap() {
  var elems = $('.article-body > .slideshow-wrapper'),
      overlapElems = elems.overlaps('.associated-container > *');
  if (overlapElems.length > 0) {
    elems.addClass('is-overlap');
  } else {
    elems.removeClass('is-overlap');
  }
}

// Set things up for articles only
if ($('body.article')) {
  handleACOverlap();
  $(window).on('resize', handleACOverlap);
}

$(document).ready(function() {
  /* ------------------------------------------------------------------------
  * Custom Selects
  * --------------------------------------------------------------------- */

  // Make sure everything is loaded first so this always works
  if (!$('#photo-contest-photo-upload-form').length) {
    $('select:visible').customSelect();
  }
})

/* -----------------------------------------------------------------------
* Photo Contest Mobile Menu
* --------------------------------------------------------------------- */
$('.photo-contest-header .fa-bars').click(function() {
  $('.photo-contest-mobile-menu').animate({'left': 0});
});
$('.photo-contest-mobile-menu .fa-times').click(function() {
  $('.photo-contest-mobile-menu').animate({'left': '-200vw'});
});

/* -----------------------------------------------------------------------
* Photo Contest Map Overlay
* --------------------------------------------------------------------- */
$('.map-overlay-text').click(function() {
  $('.map-overlay').fadeOut(1000);
});

/* -----------------------------------------------------------------------
* Photo Contest Category Thumbnail Label Fix
* --------------------------------------------------------------------- */
function categoryTitle() {
    if ($('h1.photo-contest-tag-detail-name').length) {
        var mainCategory = $('.photo-contest-tag-detail-name').text();
        mainCategory = mainCategory.replace(' MADE POSSIBLE THROUGH THE SUPPORT OF', '');
        mainCategory = mainCategory.replace('SUBMIT PHOTOS', '');

        $('.photo-contest-main-category a').each(function() {
          $(this).text(mainCategory);
        });
    }
}

categoryTitle();

$('.photo-contest-load-more').on('click', function() {
    $(document).ajaxStop(function () {
        categoryTitle();
    });
});

/* -----------------------------------------------------------------------
* Photo Contest Thumbnail Centering Fix
* --------------------------------------------------------------------- */
$(document).ready(function() {
  $('.photo-contest-photos .photo-contest-photo-name').each(function() {

    if ($(this).is(':contains("The Emerald")')) {
      $(this).parent().css({
        'background-image': 'url("https://public-media.si-cdn.com/filer/69/0c/690cc701-af29-4030-89f6-167c9db7138b/wave_resized.jpg")',
        'background-position': 'bottom left'
      });
    } else if ($(this).is(':contains("Divine Light")')) {
      $(this).parent().css({
        'background-image': 'url("https://public-media.si-cdn.com/filer/a8/cd/a8cd3fa5-2b27-4a7d-8cce-d52d3fc6f40f/5510cbf5-8f63-4784-acd7-f1902e8188da_resized.jpg")',
            'background-position': 'bottom left'
      });
    } else if ($(this).is(':contains("La Princesa")')) {
      $(this).parent().css({
        'background-image': 'url("https://public-media.si-cdn.com/filer/e1/31/e131fc88-46a5-4f77-9220-66461966f14f/2d6558f7-9def-4da7-8f67-906989392978_resized.jpg")',
            'background-position': 'bottom left'
      });
    } else if ($(this).is(':contains("The Tree Girl")')) {
      $(this).parent().css({
        'background-image': 'url("https://public-media.si-cdn.com/filer/a4/1d/a41d8aa9-cfa3-4c76-9aff-64d5c84b82a8/2d81ad60-dd04-431e-8298-7733b2385e32_resized.jpg")',
            'background-position': 'bottom left'
      });
    } else if ($(this).is(':contains("Human and Nature")')) {
      $(this).parent().css({
        'background-image': 'url("https://public-media.si-cdn.com/filer/c9/96/c9960edd-e4e9-42d9-8ce4-556ce210dae8/man-tree.jpg")',
            'background-position': 'bottom left'
      });
    }
  });
});

/* -----------------------------------------------------------------------
* Photo Contest Sponsor Category Thumbnail
* --------------------------------------------------------------------- */
$(document).ready(function() {
    if(window.location.href.indexOf("/photocontest/") > -1 && window.location.href.indexOf("/travel/") > -1) {
        $('.photo-contest-tags-sponsor-logo a').append('<IMG SRC="https://ad.doubleclick.net/ddm/ad/N3727.133003SMITHSONIAN.COM/B21719132.240565645;sz=1x1;ord=[timestamp];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=?" BORDER=0 WIDTH=1 HEIGHT=1 ALT="Advertisement" style="width: 1px !important; height: 1px !important; position: absolute;"></A>');
    }
});

/* -----------------------------------------------------------------------
* Photo Contest Display Photographer Copyright for POTD Landing Page
* --------------------------------------------------------------------- */
$(document).ready(function() {
    if ($('.photo-contest-detail-image .photo-contest-copyright').length) {
        var photographer = $('.photo-contest-photographer-name-location .photo-contest-detail-photographer-name a').text();
        photographer = photographer.toLowerCase().split(' ');

        for (var i = 0; i < photographer.length; i++) {
            photographer[i] = photographer[i].charAt(0).toUpperCase() + photographer[i].substring(1);
        }

        photographer = photographer.join(' ');

        photographer = '© ' + photographer + '. All rights reserved.';

        $('.photo-contest-copyright').text(photographer);
    }
});

/* -----------------------------------------------------------------------
* Temporary fix for Ooyala video - prevent Outbrain function interference
* --------------------------------------------------------------------- */
window.OB_D2C = window.OB_D2C || {},
window.OB_D2C.settingsService = window.OB_D2C.settingsService || {
    getSettings: function(e) {
        var t = localStorage.getItem("settingsBaseUrl") || "https://settings.outbrain.com/D2CSettings/";
        return t += "api/getSettingsJS",
        jQuery.ajax({
            dataType: "jsonp",
            jsonp: "callback",
            url: t + "?json=" + encodeURIComponent(JSON.stringify(e)),
            xhrFields: {
                withCredentials: !0
            }
        })
    }
},
window.OB_D2C.auditService = window.OB_D2C.auditService || {
    eventTypes: {
        widget_icon_impression: 1e3,
        widget_icon_viewed: 1100,
        widget_icon_click: 1200,
        lightbox_opened: 1300,
        lightbox_ready: 1350,
        lightbox_closed: 1400,
        facebook_button_clicked: 1500
    },
    sendEvent: function(e) {
        var t = localStorage.getItem("auditBaseUrl") || "https://audit.outbrain.com/D2CAudit/";
        t += "api/auditJS";
        var i = jQuery.extend({
            eventGroup: "acquisition",
            localDatetime: window.OB_D2C.helpers.getFormattedDate(),
            apiKey: "376da4db867e4350950a1cb148a8bd72"
        }, e);
        return jQuery.ajax({
            dataType: "jsonp",
            jsonp: "callback",
            url: t + "?json=" + encodeURIComponent(JSON.stringify(i)),
            xhrFields: {
                withCredentials: !0
            }
        })
    }
},
window.OB_D2C.helpers = window.OB_D2C.helpers || {
    getUrlParams: function() {
        var e = {}
          , t = (window.location.search.split("?")[1] || "").split("&");
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                var o = t[i].split("=");
                e[o[0]] = decodeURIComponent(o[1] || "")
            }
        return e
    },
    attachQueryToUrl: function(e, t) {
        if (!t)
            return e;
        var i = e.indexOf("?") >= 0;
        i || (e += "?");
        for (var o in t)
            t.hasOwnProperty(o) && (i ? e += "&" : i = !0,
            e += o + "=" + t[o]);
        return e
    },
    getDocumentUrl: function() {
        var e = window.location.href;
        return window.self !== window.top && (e = window.parent.location.href),
        e
    },
    getFormattedDate: function() {
        var e = function(e) {
            return e >= 10 ? e : "0" + e
        }
          , t = new Date
          , i = e(t.getDate())
          , o = e(t.getMonth() + 1)
          , n = e(t.getHours())
          , a = e(t.getMinutes())
          , s = e(t.getSeconds())
          , c = t.getMilliseconds();
        return [t.getFullYear(), "-", o, "-", i, " ", n, ":", a, ":", s, ".", c].join("")
    },
    elementInViewport: function(e) {
        if (!e || !e.offset())
            return !1;
        var t = jQuery(window)
          , i = t.scrollTop()
          , o = t.scrollTop() + t.height()
          , n = e.offset().top + e.outerHeight();
        return o >= n && i <= n
    }
},
window.OB_D2C.init = window.OB_D2C.init || function(e) {
    var t = this
      , i = window.OB_D2C_PROXY.getWidgetId(e);
    i && t.checkJquery(function() {
        var o = jQuery('[data-widget-id="' + i + '"]')
          , n = o.height()
          , a = o.width()
          , s = jQuery(window).width()
          , c = jQuery(window).height();
        if (o.length) {
            var d = {
                settingsGroup: "widget",
                data: {
                    docUrl: window.OB_D2C.helpers.getDocumentUrl(),
                    widgetJsId: i,
                    widgetRecMode: window.OB_D2C_PROXY.getSet(e, "recMode", null),
                    widgetResolutionHeight: n,
                    widgetResolutionWidth: a,
                    screenResolutionHeight: c,
                    screenResolutionWidth: s
                }
            };
            t.settingsService.getSettings(d).then(function(i) {
                if (i.success) {
                    var n = i.data;
                    if (!n.settings || !n.settings.enable)
                        return;
                    t.loadCSS(function() {
                        t.ctaInit(e, o, n)
                    })
                }
            })
        }
    })
}
,
window.OB_D2C.loadJquery = window.OB_D2C.loadJquery || function(e) {
    var t = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"
      , i = document.createElement("script");
    i.src = t;
    var o = document.getElementsByTagName("head")[0]
      , n = !1;
    i.onload = i.onreadystatechange = function() {
        n || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (n = !0,
        "undefined" == typeof jQuery ? console.log("Failed to load jQuery") : e && e(),
        i.onload = i.onreadystatechange = null,
        o.removeChild(i))
    }
    ,
    o.appendChild(i)
}
,
window.OB_D2C.checkJquery = window.OB_D2C.checkJquery || function(e) {
    var t = this;
    if (window.OB_D2C_PROXY && window.OB_D2C_PROXY.hasJqueryInstalled()) {
        var i = jQuery && jQuery.fn && jQuery.fn.jquery ? jQuery.fn.jquery : null;
        if (i) {
            var o = i.split(".");
            if (parseInt(o[0]) < 2)
                return void t.loadJquery(e)
        }
        "undefined" == typeof jQuery && "function" == typeof $ && $.noConflict(),
        e()
    } else
        t.loadJquery(e)
}
,
window.OB_D2C.loadCSS = window.OB_D2C.loadCSS || function(e) {
    var t = "//libs.sphere.com/d2c/dist/css/cta.css"
      , i = jQuery('<link rel="stylesheet" href="' + t + '" type="text/css" media="screen" />');
    i.load(e),
    jQuery("head").append(i)
}
,
window.OB_D2C.loadFacebook = window.OB_D2C.loadFacebook || function(e, t) {
    var i = function() {
        FB.init({
            appId: e,
            xfbml: !0,
            version: "v2.6"
        }),
        t && t()
    };
    return "undefined" != typeof FB ? void i() : (window.fbAsyncInit = function() {
        i()
    }
    ,
    void function(e, t, i) {
        var o, n = e.getElementsByTagName(t)[0];
        e.getElementById(i) || (o = e.createElement(t),
        o.id = i,
        o.src = "//connect.facebook.net/en_US/sdk.js",
        n.parentNode.insertBefore(o, n))
    }(document, "script", "facebook-jssdk"))
}
,
window.OB_D2C.ctaTypes = window.OB_D2C.ctaTypes || {},
window.OB_D2C.ctaTypes.cta_a = window.OB_D2C.ctaTypes.cta_a || function() {
    this.createContent = function(e, t) {
        var i = t.ctaText
          , o = '<div class="ob_d2c_cta_content_wrapper"><span class="ob_d2c_cta_icon"></span><div class="ob_d2c_cta_content_boxes"><span class="ob_d2c_cta_content">' + i + '</span><div class="ob_d2c_cta_loader"><span></span><span></span><span></span></div></div></div>';
        e.html(jQuery(o))
    }
    ,
    this.viewCallback = function(e, t) {
        var i = function() {
            var i = e.find(".ob_d2c_cta")
              , o = window.OB_D2C.helpers.elementInViewport(i)
              , n = e.find(".ob_d2c_cta_content_boxes");
            o ? (n.addClass("switch_content"),
            i.hasClass("viewed") || (i.addClass("viewed"),
            window.OB_D2C.auditService.sendEvent({
                sessionId: t,
                eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
            }))) : n.removeClass("switch_content")
        };
        return i
    }
}
,
window.OB_D2C.ctaTypes.cta_text = window.OB_D2C.ctaTypes.cta_text || function() {
    this.createContent = function(e, t) {
        var i = t.ctaText
          , o = "<span>" + i + "</span>";
        e.html(jQuery(o))
    }
    ,
    this.viewCallback = function(e, t) {
        var i = function() {
            var i = e.find(".ob_d2c_cta")
              , o = window.OB_D2C.helpers.elementInViewport(i);
            o && (i.hasClass("viewed") || (i.addClass("viewed"),
            window.OB_D2C.auditService.sendEvent({
                sessionId: t,
                eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
            })))
        };
        return i
    }
}
,
window.OB_D2C.ctaTypes.ctaWithTooltip = window.OB_D2C.ctaTypes.ctaWithTooltip || function(e, t) {
    this._ctaInTimimg = e,
    this._ctaInDoneTiming = t,
    this.createContent = function(e, t, i) {
        var o = '<div class="ob_d2c_cta_tooltip">' + t.ctaText + "</div>"
          , n = '<div class="ob_d2c_cta_content_wrapper">' + o + '<div class="od_d2c_cta_messanger_icon"></div><div class="ob_d2c_cta_large_messanger_button"><span class="ob_d2c_cta_amelia_messanger"></span><span>Get My News <strong>with Outbrain</strong></span> </div></div>';
        e.html(jQuery(n))
    }
    ,
    this.viewCallback = function(e, t, i) {
        var o = function() {
            var i = jQuery(e).data("widget-id")
              , o = jQuery("#popup_" + i);
            if (!o.is(":visible")) {
                var n = e.find(".ob_d2c_cta")
                  , a = window.OB_D2C.helpers.elementInViewport(n)
                  , s = null
                  , c = null
                  , d = (jQuery(".ob_d2c_cta_tooltip"),
                function() {
                    c = window.setTimeout(function() {
                        n.addClass("cta_in_done"),
                        s = window.setTimeout(function() {
                            n.removeClass("cta_in")
                        }, this._ctaInTimimg)
                    }, this._ctaInDoneTiming)
                }
                .bind(this));
                a ? (n.hasClass("viewed") || (n.addClass("viewed"),
                window.OB_D2C.auditService.sendEvent({
                    sessionId: t,
                    eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
                })),
                n.hasClass("cta_in") || n.hasClass("cta_in_done") || (n.addClass("cta_in"),
                d())) : (c && window.clearTimeout(c),
                s && window.clearTimeout(s),
                n.removeClass("cta_in"),
                n.removeClass("cta_in_done"))
            }
        };
        return o
    }
}
,
window.OB_D2C.ctaTypes.ctaWithIframe = window.OB_D2C.ctaTypes.ctaWithIframe || function(e, t) {
    this._ctaInTimimg = e,
    this._ctaInDoneTiming = t,
    this._isIframeLoaded = !1,
    this.createContent = function(e, t, i) {
        var o = '<div class="ob_d2c_cta_tooltip"><button class="tooltip_close_button"/><iframe class="tooltip_iframe" src=""></iframe><div class="tooltip_loader"></div></div>'
          , n = '<div class="ob_d2c_cta_content_wrapper">' + o + '<div class="od_d2c_cta_messanger_icon"></div><div class="ob_d2c_cta_large_messanger_button"><span class="ob_d2c_cta_amelia_messanger"></span><span>Get My News <strong>with Outbrain</strong></span> </div></div>';
        e.html(jQuery(n));
        var a = jQuery(".tooltip_close_button");
        a.on("click", this._onTooltipCloseClicked),
        o = jQuery(".ob_d2c_cta_tooltip"),
        o.on("click", function(e) {
            e.stopPropagation()
        }),
        jQuery("body").on("click", this._onTooltipCloseClicked),
        o.css({
            height: t.popupHeight,
            width: t.popupWidth
        })
    }
    ,
    this._onTooltipCloseClicked = function(e) {

    }
    ,
    this.viewCallback = function(e, t, i) {
        var o = this
          , n = function() {
            var n = jQuery(e).data("widget-id")
              , a = jQuery("#popup_" + n);
            if (!a.is(":visible")) {
                var s = e.find(".ob_d2c_cta")
                  , c = window.OB_D2C.helpers.elementInViewport(s)
                  , d = e.find(".tooltip_iframe")
                  , r = e.find(".tooltip_loader");
                o.ctaInTimeout = null,
                o.ctaInDoneTimeout = null,
                o.disableCtaAnimation = !1;
                var p = function() {
                    s.hasClass("cta_in_done") || (o.ctaInDoneTimeout = window.setTimeout(function() {
                        o.disableCtaAnimation || (s.addClass("cta_in_done"),
                        o.ctaInTimeout = window.setTimeout(function() {
                            o.disableCtaAnimation ? s.removeClass("cta_in_done") : s.removeClass("cta_in")
                        }, o._ctaInTimimg))
                    }, o._ctaInDoneTiming))
                }
                .bind(this);
                if (c) {
                    if (!s.hasClass("viewed")) {
                        var _ = window.OB_D2C.helpers.attachQueryToUrl(i.popupUrl, {
                            sessionId: t
                        });
                        e.find(".tooltip_iframe").attr("src", _),
                        s.addClass("viewed"),
                        window.OB_D2C.auditService.sendEvent({
                            sessionId: t,
                            eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
                        })
                    }
                    s.hasClass("cta_in") || s.hasClass("cta_in_done") || (s.addClass("cta_in"),
                    o._isIframeLoaded && p())
                } else
                    o.ctaInDoneTimeout && window.clearTimeout(o.ctaInDoneTimeout),
                    o.ctaInTimeout && window.clearTimeout(o.ctaInTimeout),
                    s.removeClass("cta_in"),
                    s.removeClass("cta_in_done");
                d.load(function() {
                    o._isIframeLoaded = !0,
                    r.length && r.remove(),
                    p()
                })
            }
        };
        return n
    }
}
,
window.OB_D2C.ctaTypes.directCta = window.OB_D2C.ctaTypes.directCta || function() {
    this.createContent = function(e, t, i, o) {
        var n = encodeURIComponent("_sessionId=" + i)
          , a = '<div class="ob_d2c_cta_content_wrapper"><div class="ob_d2c_cta_large_messanger_button"><a target="_blank" href="https://m.me/outbrainchatbot?ref=' + n + '" class="direct_cta_link"><span class="ob_d2c_cta_amelia_messanger"></span><span>' + t.ctaText + '</span> </a></div><p class="ob_d2c_privacy_info">To view Outbrains privacy policy or opt out <a target="_blank" href="http://www.outbrain.com/legal/privacy" class="privacy_link">click here</a></p></div>';
        e.html(jQuery(a));
        var s = e.find(".ob_d2c_cta_large_messanger_button");
        s.on("click", function(e) {
            e.stopPropagation(),
            window.OB_D2C.auditService.sendEvent({
                sessionId: i,
                eventId: window.OB_D2C.auditService.eventTypes.facebook_button_clicked,
                iconType: o
            })
        })
    }
    ,
    this.viewCallback = function(e, t) {
        var i = function() {
            var i = e.find(".ob_d2c_cta")
              , o = window.OB_D2C.helpers.elementInViewport(i);
            o && (i.hasClass("viewed") || (i.addClass("viewed"),
            window.OB_D2C.auditService.sendEvent({
                sessionId: t,
                eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
            })))
        };
        return i
    }
}
,
window.OB_D2C.ctaTypes.directCtaWithTooltip = window.OB_D2C.ctaTypes.directCtaWithTooltip || function() {
    this.createContent = function(e, t, i, o) {
        var n = '<div class="ob_d2c_cta_tooltip"><div>' + t.tooltipText + '</div><div class="outbrain_white_logo"></div></div>'
          , a = encodeURIComponent("_sessionId=" + i)
          , s = '<div class="ob_d2c_cta_content_wrapper">' + n + '<div class="ob_d2c_cta_large_messanger_button"><span class="gradient-shimmer"></span><a target="_blank" href="https://m.me/outbrainchatbot?ref=' + a + '" class="direct_cta_link"><span class="ob_d2c_cta_amelia_messanger"></span><span>' + t.ctaText + '</span> </a></div><p class="ob_d2c_privacy_info">To view Outbrains privacy policy or opt out <a target="_blank" href="http://www.outbrain.com/legal/privacy" class="privacy_link">click here</a></p></div>';
        e.html(jQuery(s));
        var c = e.find(".ob_d2c_cta_large_messanger_button");
        c.on("click", function(e) {
            e.stopPropagation(),
            window.OB_D2C.auditService.sendEvent({
                sessionId: i,
                eventId: window.OB_D2C.auditService.eventTypes.facebook_button_clicked,
                iconType: o
            })
        })
    }
    ,
    this.viewCallback = function(e, t, i) {
        var o = function() {
            var i = (jQuery(e).data("widget-id"),
            e.find(".ob_d2c_cta"))
              , o = window.OB_D2C.helpers.elementInViewport(i)
              , n = null
              , a = null
              , s = (jQuery(".ob_d2c_cta_tooltip"),
            function() {
                a = window.setTimeout(function() {
                    i.addClass("cta_in_done"),
                    n = window.setTimeout(function() {
                        i.removeClass("cta_in"),
                        window.setTimeout(function() {
                            i.addClass("animate_gradient_shimmer")
                        }, 1e3)
                    }, 1e3)
                }, 3e3)
            }
            .bind(this));
            o ? (i.hasClass("viewed") || (i.addClass("viewed"),
            window.OB_D2C.auditService.sendEvent({
                sessionId: t,
                eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
            })),
            i.hasClass("cta_in") || i.hasClass("cta_in_done") || (i.addClass("cta_in"),
            s())) : (a && window.clearTimeout(a),
            n && window.clearTimeout(n),
            i.removeClass("cta_in"),
            i.removeClass("cta_in_done"),
            i.removeClass("animate_gradient_shimmer"))
        };
        return o
    }
}
,
window.OB_D2C.ctaTypes.directCtaWithMessengerIcon = window.OB_D2C.ctaTypes.directCtaWithMessengerIcon || function() {
    this.createContent = function(e, t, i, o) {
        var n = encodeURIComponent("_sessionId=" + i)
          , a = '<div class="ob_d2c_cta_content_wrapper"><div class="od_d2c_cta_messanger_icon"></div><div class="ob_d2c_cta_large_messanger_button"><a target="_blank" href="https://m.me/outbrainchatbot?ref=' + n + '" class="direct_cta_link"><span class="ob_d2c_cta_amelia_messanger"></span><span>' + t.ctaText + '</span> </a></div><p class="ob_d2c_privacy_info">To view Outbrains privacy policy or opt out <a target="_blank" href="http://www.outbrain.com/legal/privacy" class="privacy_link">click here</a></p></div>';
        e.html(jQuery(a));
        var s = e.find(".ob_d2c_cta_large_messanger_button");
        s.on("click", function(e) {
            e.stopPropagation(),
            window.OB_D2C.auditService.sendEvent({
                sessionId: i,
                eventId: window.OB_D2C.auditService.eventTypes.facebook_button_clicked,
                iconType: o
            })
        })
    }
    ,
    this.viewCallback = function(e, t) {
        var i = function() {
            var i, o = e.find(".ob_d2c_cta"), n = window.OB_D2C.helpers.elementInViewport(o);
            n ? (o.hasClass("viewed") || (o.addClass("viewed"),
            window.OB_D2C.auditService.sendEvent({
                sessionId: t,
                eventId: window.OB_D2C.auditService.eventTypes.widget_icon_viewed
            })),
            o.hasClass("cta_in") || (i = window.setTimeout(function() {
                o.addClass("cta_in")
            }, 1e3))) : (o.removeClass("cta_in"),
            i && window.clearTimeout(i))
        };
        return i
    }
}
,
window.OB_D2C.popupTypes = window.OB_D2C.popupTypes || {},
window.OB_D2C.popupTypes.popup = window.OB_D2C.popupTypes.popup || function() {
    this._setPopupPosition = function(e) {
        var t = jQuery(".ob_d2c_popup")
          , i = jQuery(window).scrollTop()
          , o = e.popupWidth
          , n = e.popupHeight
          , a = jQuery(window).height()
          , s = n + n / 2 > a ? 20 : (a - e.popupHeight) / 2;
        t.css({
            top: i,
            height: n,
            width: o,
            marginLeft: -(o / 2),
            marginTop: s
        })
    }
    ,
    this.open = function(e, t, i) {
        if (jQuery.find(".ob_d2c_popup_wrapper").length)
            return this._setPopupPosition(e),
            void jQuery(".ob_d2c_popup_wrapper").show();
        var o = jQuery(i).data("widget-id") || ""
          , n = '<div id="popup_' + o + '" class="ob_d2c_popup_wrapper popup"><div class="ob_d2c_dark_bg"></div><div class="ob_d2c_popup"><button class="ob_d2c_close_popup"></button><div class="ob_d2c_popup_content"></div></div></div>';
        jQuery("body").append(n);
        var a = jQuery(".ob_d2c_popup_content")
          , s = window.OB_D2C.helpers.attachQueryToUrl(e.popupUrl, {
            sessionId: t
        })
          , c = jQuery('<iframe src="' + s + '" style="border: none; width: 100%; height: 100%; position: absolute;"></iframe>');
        a.append(c),
        this._setPopupPosition(e)
    }
    ,
    this.attachEvents = function(e) {
        var t = (jQuery(".ob_d2c_popup"),
        function(t) {
            window.OB_D2C.auditService.sendEvent({
                sessionId: e,
                eventId: window.OB_D2C.auditService.eventTypes.lightbox_closed,
                attr: {
                    closeTrigger: t
                }
            }),
            jQuery(".ob_d2c_popup_wrapper").hide()
        }
        )
          , i = jQuery(".ob_d2c_close_popup");
        i.off(),
        i.on("click", function() {
            t("x_button")
        });
        var o = jQuery(".ob_d2c_dark_bg");
        o.off(),
        o.on("click", function() {
            t("click_on_screen")
        })
    }
}
,
window.OB_D2C.popupTypes.overWidget = window.OB_D2C.popupTypes.overWidget || function() {
    this.open = function(e, t, i) {
        if (jQuery.find(".ob_d2c_popup_wrapper").length)
            return jQuery(".ob_d2c_popup_wrapper").show(),
            void this._positionPopupElements(e, i);
        var o = jQuery(i).data("widget-id") || ""
          , n = '<div id="popup_' + o + '" class="ob_d2c_popup_wrapper over_widget"><div class="popup_overlay"><div class="ob_d2c_popup_over_widget"><button class="ob_d2c_close_popup"></button><div class="ob_d2c_popup_content"></div></div></div></div>';
        jQuery("body").append(n);
        var a = jQuery(".ob_d2c_popup_content")
          , s = window.OB_D2C.helpers.attachQueryToUrl(e.popupUrl, {
            sessionId: t
        })
          , c = jQuery('<iframe src="' + s + '" style="border: none; width: 100%; height: 100%; position: absolute;"></iframe>');
        a.append(c),
        this._positionPopupElements(e, i)
    }
    ,
    this._positionPopupElements = function(e, t) {
        var i = t.find(".ob-widget")
          , o = e.popupWidth
          , n = e.popupHeight
          , a = t.outerHeight(!0) >= i.outerHeight(!0) ? t : i
          , s = t.outerWidth(!0) >= i.outerWidth(!0) ? t : i
          , c = a.outerHeight(!0)
          , d = s.outerWidth(!0)
          , r = jQuery(".popup_overlay")
          , p = jQuery(".ob_d2c_popup_over_widget")
          , _ = a.offset().top - parseInt(a.css("marginTop") || 0);
        r.css({
            height: c,
            width: d,
            top: _,
            left: s.offset().left
        }),
        p.css({
            height: n,
            width: o,
            left: d / 2 - e.popupWidth / 2,
            top: 30
        })
    }
    ,
    this.attachEvents = function(e) {
        var t = function(t) {
            window.OB_D2C.auditService.sendEvent({
                sessionId: e,
                eventId: window.OB_D2C.auditService.eventTypes.lightbox_closed,
                attr: {
                    closeTrigger: t
                }
            }),
            jQuery(".ob_d2c_popup_wrapper").hide()
        }
          , i = jQuery(".ob_d2c_close_popup");
        i.off(),
        i.on("click", function() {
            t("x_button")
        });
        var o = jQuery(".popup_overlay");
        o.off(),
        o.on("click", function() {
            t("click_on_screen")
        })
    }
}
,
window.OB_D2C.popupTypes.popupFromTooltip = window.OB_D2C.popupTypes.popupFromTooltip || function() {
    this.open = function(e, t, i) {
        if (jQuery.find(".ob_d2c_popup_wrapper").length)
            return void jQuery(".ob_d2c_popup_wrapper").remove();
        var o = i.find(".ob-widget")
          , n = '<div class="ob_d2c_popup_wrapper over_widget"><div class="popup_overlay"><div class="ob_d2c_popup_over_widget"></div></div></div>';
        jQuery("body").append(n);
        var a = (e.popupWidth,
        e.popupHeight,
        i.outerHeight(!0) >= o.outerHeight(!0) ? i : o)
          , s = i.outerWidth(!0) >= o.outerWidth(!0) ? i : o
          , c = a.outerHeight(!0)
          , d = s.outerWidth(!0)
          , r = jQuery(".popup_overlay")
          , p = a.offset().top - parseInt(a.css("marginTop") || 0);
        r.css({
            height: c,
            width: d,
            top: p,
            left: s.offset().left
        });
        var _ = i.find(".ob_d2c_cta_tooltip");
        _.addClass("as_popup"),
        _.removeClass("tooltip_closed")
    }
    ,
    this.attachEvents = function(e) {
        var t = jQuery(".ob_d2c_cta_tooltip")
          , i = (jQuery(".ob_d2c_popup_over_widget"),
        function(i) {
            t.removeClass("as_popup"),
            t.addClass("tooltip_closed"),
            window.OB_D2C.auditService.sendEvent({
                sessionId: e,
                eventId: window.OB_D2C.auditService.eventTypes.lightbox_closed,
                attr: {
                    closeTrigger: i
                }
            }),
            jQuery(".ob_d2c_popup_wrapper").remove()
        }
        );
        jQuery(".tooltip_close_button").off("click", i).on("click", function(e) {
            i("x_button"),
            e.stopPropagation()
        }),
        jQuery(".popup_overlay").off("click", i).on("click", function() {
            i("click_on_screen")
        })
    }
}
,
window.OB_D2C.ctaInit = window.OB_D2C.ctaInit || function(e, t, i) {
    var o = this
      , n = i.settings
      , a = i.sessionId
      , s = 1
      , c = t.find(".ob_what");
    if (!c.length)
        return !1;
    var d = n.ctaType
      , r = jQuery('<div class="ob_d2c_cta ' + d + '" title="Outbrain for Chat"></div>');
    c.html(r);
    var p = t.find(".ob_d2c_cta")
      , _ = new window.OB_D2C.ctaFactory
      , u = _.getCtaClass(d);
    u.createContent(p, n, a, s),
    window.OB_D2C.auditService.sendEvent({
        sessionId: a,
        eventId: window.OB_D2C.auditService.eventTypes.widget_icon_impression,
        abVariantIds: [i.configSetId],
        iconTypes: [s],
        referenceDomain: document.referrer,
        acquisitionChannel: "widget",
        pageViewId: window.OB_D2C_PROXY.getRequest(e, "pvId", ""),
        recRequestId: window.OB_D2C_PROXY.getRequest(e, "req_id", "")
    }),
    n.directCta || t.on("click", ".ob_d2c_cta", function(e) {
        e.stopPropagation(),
        window.OB_D2C.auditService.sendEvent({
            sessionId: a,
            eventId: window.OB_D2C.auditService.eventTypes.widget_icon_click,
            iconType: s
        }),
        o.popup.openPopup(n, a, t)
    });
    var l = u.viewCallback(t, a, n).bind(u);
    jQuery(window).scroll(l),
    jQuery("body").on("touchmove", l),
    l()
}
,
window.OB_D2C.ctaFactory = window.OB_D2C.ctaFactory || function() {
    this.getCtaClass = function(e) {
        switch (e) {
        case "cta_a":
            return new window.OB_D2C.ctaTypes.cta_a;
        case "cta_b":
            return new window.OB_D2C.ctaTypes.ctaWithTooltip(1e3,4e3);
        case "cta_c":
            return new window.OB_D2C.ctaTypes.ctaWithIframe(1e3,5e3);
        case "text":
            return new window.OB_D2C.ctaTypes.cta_text;
        case "directCta":
            return new window.OB_D2C.ctaTypes.directCta;
        case "directCtaWithTooltip":
            return new window.OB_D2C.ctaTypes.directCtaWithTooltip;
        case "directCtaWithMessengerIcon":
            return new window.OB_D2C.ctaTypes.directCtaWithMessengerIcon;
        default:
            return new window.OB_D2C.ctaTypes.cta_a
        }
    }
}
,
window.OB_D2C.popup = window.OB_D2C.popup || {
    openPopup: function(e, t, i) {
        var o = e.popupType
          , n = new window.OB_D2C.popupFactory
          , a = n.getPopupClass(o);
        a.open(e, t, i),
        a.attachEvents(t)
    },
    getPopupSettings: function(e, t) {
        if (localStorage) {
            var i = localStorage.getItem("popupSettings") ? JSON.parse(localStorage.getItem("popupSettings")) : null;
            if (i) {
                var o = 6e5;
                if ((new Date).getTime() - i.lastUpdate > o && (i = {},
                localStorage.removeItem("popupSettings")),
                i[t] && i[t][e])
                    return jQuery.Deferred().resolve(i[t][e])
            }
        }
        var n = {
            settingsGroup: "popup",
            sessionId: e
        };
        return window.OB_D2C.settingsService.getSettings(n).then(function(i) {
            if (!localStorage || !i.success)
                return i;
            var o = localStorage.getItem("popupSettings") ? JSON.parse(localStorage.getItem("popupSettings")) : null;
            return o || (o = {}),
            o[t] || (o[t] = {}),
            o[t][e] = i,
            o.lastUpdate = (new Date).getTime(),
            localStorage.setItem("popupSettings", JSON.stringify(o)),
            i
        })
    }
},
window.OB_D2C.popupFactory = window.OB_D2C.popupFactory || function() {
    this.getPopupClass = function(e) {
        switch (e) {
        case "popup":
            return new window.OB_D2C.popupTypes.popup;
        case "overWidget":
            return new window.OB_D2C.popupTypes.overWidget;
        case "popupFromTooltip":
            return new window.OB_D2C.popupTypes.popupFromTooltip;
        default:
            return new window.OB_D2C.popupTypes.popup
        }
    }
}
,
function() {
    window.OB_D2C_PROXY && window.OB_D2C_PROXY.makeHandshake()
}();

// Hide mobile search form on newsletter subscribe pages
if (window.location.href.indexOf("/newsletters/subscribe") > -1) {
  $('.mobile-search-icon, #mobile-search').hide();
}

/* -----------------------------------------------------------------------
* Responsive Facebook embeds
* --------------------------------------------------------------------- */
  // Hide text unless override exists
  $('.hero .fb-post').attr('data-show-text', 'false');
  $('.main .fb-post').attr('data-show-text', 'false');
  // Hero
if ($(window).width() > 836) {
    $('.hero .fb-post').attr('data-width', $('.hero').width());
} else {
    $('.hero .fb-post').attr('data-width', 'auto');
}
  // Article body
if ($(window).width() > 836) {
    $('.main .fb-post').attr('data-width', $('.article-body').width());
} else {
    $('.main .fb-post').attr('data-width', 'auto');
}

/* -----------------------------------------------------------------------
* Move related content/books below Zergnet on mobile
* --------------------------------------------------------------------- */
$(document).ready(function() {
    if ($(window).width() < 1130) {
        $('.associated-container').css('margin-top', '20px').insertAfter('div[id*="zergnet-widget-"]').parent();
    }
});

/* -----------------------------------------------------------------------
* Sponsored article custom template
* --------------------------------------------------------------------- */
$(document).ready(function() {
    if ($('body').hasClass('sponsored-article-template')) {
        function setSponsorImageWidths() {
            // Full screen hero image
            $('body.sponsored-article-template .article-header figure.article-image').insertBefore('.container').addClass('sponsor-hero');
            var imageSrc = $('body.sponsored-article-template .article-image img').attr('src');
            var lrgImg = imageSrc.substring(imageSrc.indexOf('https://public-media.si-cdn.com/filer')).replace(/\/thumbs-prod[\s\S]*?600x0/g, '');
            $('body.sponsored-article-template .article-image.sponsor-hero img').attr('src', lrgImg);

            // Improve slideshow image quality on sponsor content full page template
            $('body.sponsored-article-template .slideshow .slideshow-slides .slideshow-wrap img').each(function(){
                var src = $(this).attr('src');
                $(this).attr('src', src.replace(/\/thumbs-prod[\s\S]*?600x0/g, ''));
            });
        }
        setTimeout(function() {
            setSponsorImageWidths();
        }, 100);
        $(window).on('resize', function() {
            setSponsorImageWidths();
        });
    }
});

/* -----------------------------------------------------------------------
* Parallax video
* --------------------------------------------------------------------- */
if ($('.jarallax').length) {
    $('.jarallax').jarallax({
        speed: 0.2
    });
}

// Show video tag instead for iOS devices
var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

if (iOS) {
    $('.jarallax').hide();
    $('.iOSvideo').show();
}

/* -----------------------------------------------------------------------
* Responsive iframe fix
* --------------------------------------------------------------------- */
function responsiveIframe() {
    $('.article.longform .article-body iframe').each(function() {
        var frameRatio = $(this).attr('data-heightratio');
        $(this).height($(this).width()*frameRatio);
    });
}

responsiveIframe();
$(window).resize(function() {
    responsiveIframe();
});

/* -----------------------------------------------------------------------
* Adjust longform slideshow width on window resize
* --------------------------------------------------------------------- */
if ($('.article.longform .slideshow .slideshow-slides .slideshow-wrap .slide.slide-in-next').length) {
    $(window).on('resize', function() {
        $('.article.longform .slideshow .slideshow-slides .slideshow-wrap .slide.slide-in-next').width('100%');
    });
}

/* -----------------------------------------------------------------------
* longform image alignment
* --------------------------------------------------------------------- */
if ($(window).width() > 1000) {
    $('body.longform .article-body img').each(function() {
        if ($(this).hasClass('filer-image-align-right')) {
            $(this).insertAfter($(this).parent().children('figcaption'));
        }
    });
}

/* -----------------------------------------------------------------------
* longform photo essay plugin changes
* --------------------------------------------------------------------- */
$(document.body).on('click', '#essayWrapper .pager', function(e) {
    e.preventDefault();

    var pageNum = $(this).attr('href');
    var currentUrl = window.location.href;
    currentUrl = currentUrl.split('?')[0];
    var newUrl = currentUrl + pageNum;

    history.pushState(null, null, newUrl);

    $("#essayContainer").css({'opacity': 0.3});

    $("#essayContainer").load(location.href + " #essayWrapper", function() {
        $("#essayContainer").css({'opacity': 1});
    });

    return false;
});

/* -----------------------------------------------------------------------
* Native longform slideshow
* --------------------------------------------------------------------- */
$(document).ready(function() {
  $('body.longform.native .slideshow-nav').insertAfter('.slideshow');

  $('body.longform.native .slideshow-wrap').each(function() {
    $(this).children('.slide').last().addClass('slide-out-next');
  });

  $('body.longform.native .slideshow-wrapper .slideshow-next').on('click', function() {
    $(this).parent().children('.slide-in-next').next().addClass('slide-in-next');
    $(this).parent().children('.slide-in-next').prev().addClass('slide-out-next');
    $(this).parent().children('.slide-in-next').removeClass('slide-in-next');
    setTimeout(function() {
      $('.slide').css('z-index', 1);
      $('.slide-in-next').next().css('z-index', 2);
    }, 200);
  });

  $('body.longform.native .slideshow-wrapper .slideshow-prev').on('click', function() {
    $(this).parent().children('.slide-in-next').next().addClass('slide-in-prev');
    $(this).parent().children('.slide-in-next').prev().addClass('slide-out-prev');
    $(this).parent().children('.slide-in-prev').removeClass('slide-in-prev');
    setTimeout(function() {
      $('.slide').css('z-index', 1);
      $('.slide-out-prev').next().css('z-index', 2);
    }, 200);
  });
});

/* -----------------------------------------------------------------------
* Native longform image zoom on hover
* --------------------------------------------------------------------- */
$(window).on('load', function() {
  $('body.longform.native figure img').each(function() {
    $(this).wrap('<div class="zoom-wrap" />');
    $('.zoom-wrap').each(function() {
      $(this).height($(this).height());
      $(this).width($(this).innerWidth());
      $(this).css('overflow', 'hidden');
    });
  })
});

/* -----------------------------------------------------------------------
* Datepicker
* --------------------------------------------------------------------- */
if ($('#datepicker').length) {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        firstDay: 1,
        minDate: new Date()
    });
}

/* -----------------------------------------------------------------------
*  Open outbound article links in new tab
* --------------------------------------------------------------------- */
$('.article-body p a').each(function() {
    if (this.hostname !== window.location.hostname) {
        $(this).attr('target', '_blank');
    }
});

/* -----------------------------------------------------------------------
*  Begin site search AJAX refresh
* --------------------------------------------------------------------- */
$(document).ready(function() {
    var fadeTime = 300;

    // Hide filters and results on empty search
    var currentUrl = window.location.href;
    if (currentUrl.indexOf('/search/') > -1 && currentUrl.indexOf('?q=') === -1) {
        var newUrl = currentUrl + '?q=';
        history.pushState(null, null, newUrl);
    }

    // Update search results list and pagination
    function updateResults(newUrl) {
        // Prevent search from interfering with Museum Day finder
        if (window.location.href.indexOf('/museumday/') === -1) {
            // Remove any extra &
            newUrl = newUrl.replace(/\&\&\&/g, '&');
            newUrl = newUrl.replace(/\&\&/g, '&');

            // Push new URL parameters
            history.pushState(null, null, newUrl);

            // Animate results opacity to convey that update is happening
            $('#searchResultsWrapper').animate({'opacity': 0.5}, fadeTime);
            $('#paginationWrapper').animate({'opacity': 0}, fadeTime);
            $('#searchRefreshWrapper').load(location.href + ' #searchRefresh', function() {
                $('#searchFiltersWrapper, .search-results, .search-filters').fadeIn();
                $('#searchResultsWrapper').animate({'opacity': 1}, fadeTime);

                // Show image thumbnails on results update
                var count = 1;
                $('#resultsList a.thumbnail span').each(function() {
                    if ($(this).attr('data-src')) {
                        var src = $(this).attr('data-src');
                        $(this).prepend('<img src="' + src + '" alt="search result thumbnail ' + count + '"/>');
                    }
                    count++;
                });

                // Show thumbnails locally
                // if (window.location.href.indexOf('127.0.0.1') > -1 || window.location.href.indexOf('localhost') > -1) {
                //     $('#resultsList a.thumbnail img').each(function() {
                //       var src = $(this).attr('src');
                //       $(this).attr('src', src.replace('http://127.0.0.1:8888', 'https://thumbs-staging.si-cdn.com'));
                //     });
                // }

                // Remove duplicate thumbnails
                $('#resultsList a.thumbnail span.IE-article-overview-thumbnail-hide').hide();

                // Prevent page reload on pagination link click
                $('.pagination .pages .page').each(function(e) {
                    $(this).removeAttr('href');
                });

                // Hide pagination if only one page of results
                if ($('.pagination .page-counter').prev('span').hasClass('disabled') && $('.pagination .page-counter').next('span').hasClass('disabled')) {
                    $('.pagination').hide();
                }
            });
        }
    }

    // Prevent page reload on search form submit
    $('.twitter-typeahead span:first-of-type').addClass('searchTerm');

    function displayResults() {
        // Get search term
        var searchTerm = $('.searchTerm').text();
        var currentUrl = window.location.href;
        currentUrl = currentUrl + '&';
        currentUrl = currentUrl.replace(/(\?q=).*&/,'');
        var newUrl = currentUrl + '?q=' + searchTerm;
        newUrl = newUrl.replace('&?', '?');
        newUrl = newUrl.replace('Author:', 'author:');

        // Reset filters
        $('.filter-nav span').removeClass('active');
        $('.filter-datepicker input').each(function() {
            $(this).val('');
        });

        // Set sort active style to relevance
        $('.sort-nav .filter-nav .nav-btn').removeClass('active');
        $('.sort-nav .filter-nav .nav-btn').first().addClass('active');

        // Update search results list and pagination
        updateResults(newUrl);
    }

    // Update results on search button click
    $('form.search-form').on('submit', function(e) {
        // Prevent form from submitting
        e.preventDefault();

        displayResults();
    });

    // Update results as user types
    // $('span.searchTerm').bind('DOMSubtreeModified', function(e) {
    //     //Prevent form from submitting
    //     e.preventDefault();

    //     displayResults();
    // });

    // Date Range
    $(document).on('click', '.search-filters .filter-nav span.date-range-label', function(event) {
        // Prevent page reload
        event.preventDefault();

        // Add active class
        $('.filter-nav .nav-btn').removeClass('active');
        $(this).addClass('active');

        // Get URL with parameters
        var currentUrl = window.location.href;
        currentUrl = currentUrl + '&';
        currentUrl = currentUrl.replace(/(date_from=).*?(&)/, '&');
        currentUrl = currentUrl.replace(/(date_to=).*?(&)/, '&');

        // Get date range parameters
        var dateRange = $(this).attr('data-href');
        dateRange = dateRange.replace(/(q=).*?(&)/, '');
        dateRange = dateRange.replace('?', '&');

        // Create date range parameters and remove additional keyword parameter
        var newUrl = currentUrl + dateRange;
        newUrl = newUrl.replace(/(page=).*?(&)/g, '&');
        newUrl = newUrl.replace(/\&\&\&/g, '&');
        newUrl = newUrl.replace(/\&\&/g, '&');

        // Update search results list and pagination
        updateResults(newUrl);
    });

    // Date picker
    $(document).on('click', '#rangeButton', function(e) {
        // Prevent page reload
        e.preventDefault();

        // Remove previous selected date range active state
        $('.filter-nav span').removeClass('active');

        $x = 0;

        $(this).parent().children('input').each(function() {
            // Check to see if date inputs are filled in
            if (!$(this).val()) {

                alert('Please select dates');
                return false;
            }
            // Push value of first input
            else if ($x===0) {
                var currentUrl = window.location.href;
                var newUrl = currentUrl + '&';
                currentUrl = currentUrl.replace(/(page=).*?(&)/, '&');
                newUrl = newUrl.replace(/\&date_from=.*\&/, '');
                newUrl = newUrl + '&date_from=' + $(this).val();
                newUrl = newUrl.replace(/\&\&\&/g, '&');
                newUrl = newUrl.replace(/\&\&/g, '&');
                // Update search results list and pagination
                updateResults(newUrl);
            // Push value of second input
            } else {
                var currentUrl = window.location.href;
                var newUrl = currentUrl + '&';
                newUrl = newUrl.replace(/\&date_to=.*\&/, '');
                newUrl = newUrl + '&date_to=' + $(this).val();
                newUrl = newUrl.replace(/\&\&\&/g, '&');
                newUrl = newUrl.replace(/\&\&/g, '&');
                history.pushState(null, null, newUrl);
                // Update search results list and pagination
                updateResults(newUrl);
            }
            $x++;
        });
    });

    // Types and Categories
    $(document).on('click', '.search-form .filter-nav li', function(event) {
        // Prevent page reload
        event.preventDefault();

        // Get URL with parameters
        var currentUrl = window.location.href;
        currentUrl = currentUrl + '&';
        currentUrl = currentUrl.replace(/(page=).*?(&)/, '&');

        // Get label value of selected filter
        var selectedType = $(this).children('label').children('.type-name').text();

        // Replace spaces and ampersands
        selectedType = selectedType.replace(/\s/g,'+').replace('&', '%26');

        // Add parameter for content type or category
        if ($(this).parent().hasClass('types')) {
            selectedType = '&content_types=' + selectedType;
        } else {
            selectedType = '&categories=' + selectedType;
        }

        // Check checkbox and push URL parameters
        if ($(this).children('input').is(':checked')) {
            $(this).children('input').prop('checked', false);
            var newUrl = currentUrl.replace(selectedType, '');

            //history.pushState(null, null, newUrl);
        } else {
            $(this).children('input').prop('checked', true);
            var newUrl = currentUrl + selectedType;
            newUrl = newUrl.replace(/\&\&\&/g, '&');
            newUrl = newUrl.replace(/\&\&/g, '&');
            //history.pushState(null, null, newUrl);
        }

        // Update search results list and pagination
        updateResults(newUrl);
    });

    // Sort nav
    $(document).on('click', '#Sort-Nav .filter-nav div', function(event) {
        // Prevent page reload
        event.preventDefault();

        // Add/remove active class
        $('#Sort-Nav .filter-nav .nav-btn').removeClass('active');
        $(this).addClass('active');

        // Get current URL with parameters
        var currentUrl = window.location.href;
        currentUrl = currentUrl + '&';
        currentUrl = currentUrl.replace(/(page=).*?(&)/g, '&');
        currentUrl = currentUrl.replace(/(sort=).*?(&)/, '');

        // Get href value
        var sortOption = $(this).attr('data-url');
        sortOption = sortOption + '&';
        sortOption = sortOption.replace(/(page=).*?(&)/g, '&');
        sortOption = sortOption.replace(/(q=).*?(&)/, '&');
        sortOption = sortOption.replace(/(date_from).*(to=)/, '');
        sortOption = sortOption.replace('?','');

        // Create date range parameters and remove additional keyword parameter
        var newUrl = currentUrl + sortOption;
        newUrl = newUrl.replace(/\&\&\&/g, '&');
        newUrl = newUrl.replace(/\&\&/g, '&');

        // Update search results list and pagination
        updateResults(newUrl);
    });



    // Prevent page refresh on link click
    $(document).on('click', '#searchRefreshWrapper .pagination .pages .page', function(e) {
        e.preventDefault();

        var currentUrl = window.location.href.split('&page=')[0];
        var pageNumber = '&page=' + $(this).text();
        var newUrl = currentUrl + pageNumber;

        // Scroll to top of page
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        updateResults(newUrl);
    });

    // Mobile filters
    $('.narrow-nav .nav-btn').on('click', function() {
        $('#searchFiltersWrapper #Search-Filters').slideToggle(800, "swing").toggleClass('active');
    });

});
/* -----------------------------------------------------------------------
*  End site search AJAX refresh
* --------------------------------------------------------------------- */

/* -----------------------------------------------------------------------
*  Museum Day dashboard - remove custom select wrappers
* --------------------------------------------------------------------- */
$('.manage-museum-form select').each(function() {
  $(this).unwrap();
  $(this).show();
});

/* -----------------------------------------------------------------------
*  Ensure that billboard slideshow slides fill slideshow container
* --------------------------------------------------------------------- */
$(document).ready(function() {
    setTimeout(function() {
        var slideshowImageWidth = $('#Hero .billboard-desktop').outerWidth();
        var $billboardSlide = $('#Hero .billboard-desktop .one_image figure img');

        if ($billboardSlide.length) {
            $billboardSlide.css('min-width', slideshowImageWidth);
        }
    }, 500);
});

/* -----------------------------------------------------------------------
*  Future Con Schedule Filters
* --------------------------------------------------------------------- */
$(document).ready(function() {
    $('#filters .filter').on('click', function() {
        var filterTitle = $(this).text().toLowerCase();
        filterTitle = filterTitle.replace(' ','-');
        var filterClass = '.' + filterTitle + '-text';

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('table.schedule tr').show();
        } else {
            $('#filters .filter').removeClass('active');
            $(this).addClass('active');
            $('table.schedule tr').hide();
            $('table.schedule tr:first-of-type').show();
            $(filterClass).parent().parent().show();
        }
    });

});
