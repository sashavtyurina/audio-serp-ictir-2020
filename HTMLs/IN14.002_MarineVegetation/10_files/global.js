/*global jQuery*/
/**
 * dpi-cutup-2015
 * Global JS
 *
 * version: 0.1.0
 * file:    global.min.js
 * author:  Squiz Australia
 * change log:
 *     22-05-2019 11:37 - First revision
 */

/*
 * Table of Contents
 *
 * - Global
 * - Modules
 *    accordion (0.0.12)
 *    typeahead (0.1.3)
 */

/*
--------------------
Global
--------------------
*/
//  Declare JS Enabled.
(function($) {
  'use strict';
  $('body').removeClass('no-js').addClass('js-enabled');

  // Placeholder fallback for ie8 and ie9
  if(!Modernizr.input.placeholder){
    $('[placeholder]').focus(function() {
      var input = $(this);
      if (input.val() === input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() === '' || input.val() === input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $('[placeholder]').parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() === input.attr('placeholder')) {
          input.val('');
        }
      });
    });
  }

  var $insideSlider = $('.inside-slider');
  $insideSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    asNavFor: '.inside-slider-nav'
  });
  $('.inside-slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.inside-slider',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var $insideNavItems = $('.inside-slider-nav .inside-slider-nav__item.slick-active');
  $insideNavItems.eq(0).addClass('current');

  $insideSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.inside-slider-nav .inside-slider-nav__item').removeClass('current');
    $('.inside-slider-nav .inside-slider-nav__item[data-id="'+(nextSlide+1)+'"]').addClass('current');
  });

  var $homeSlider = $('.home-slider');
  $homeSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 5000,
     onAfterChange:function(slickSlider,i){
      $('.home-slider-nav .slick-slide').removeClass('slick-active');
      $('.home-slider-nav .slick-slide').eq(i).addClass('slick-active');
     }
  });

  $homeSlider.slick('slickPlay');

  // Add play / pause button in slider
  var $playButton = $('<a class="play-slider" style="display: none;">Play slider</a>');
  var $pauseButton = $('<a class="pause-slider">Pause slider</a>');
  var $playPauseWrap = $('<div class="play-pause__wrap"></div>');
  $playPauseWrap.append($playButton).append($pauseButton);

  $('.home-slider-nav-container').append($playPauseWrap);

  $playButton.click(function(){
    $homeSlider.slick('slickPlay');
    $playButton.hide();
    $pauseButton.show();
  });

  $pauseButton.click(function(){
    $homeSlider.slick('slickPause');
    $playButton.show();
    $pauseButton.hide();
  });

  var $navItems = $('.home-slider-nav .home-slider-nav__item');
  $navItems.eq(0).addClass('slick-active');

  $homeSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $navItems.removeClass('slick-active');
    $navItems.eq(nextSlide).addClass('slick-active');
  });

  $navItems.each(function(index,item){
    $(this).click(function(){
      $homeSlider.slick('slickGoTo',index);
    });
  });

  // Blur back image in the home page slider, only for IE
  $(function(){

    // our iteration
    $('[data-canvas]').each(function(){
      var $el = $(this);

      var BLUR_RADIUS = 20;
      var canvas = this; // canvas is the element we're iterating over
      var canvasContext = canvas.getContext('2d');

      var image = new Image();

      // I changed the line below of theirs to refer to the canvases attributes
      // we're iterating over above
      image.src = $el.attr('data-src');

      var drawBlur = function() {
        var w = canvas.width;
        var h = canvas.height;
        canvasContext.drawImage(image, 0, 0, w, h);

        var id = $el.attr('id'); // use the id from the canvas
        stackBlurCanvasRGBA( id, 0, 0, w, h, BLUR_RADIUS);
      };

      image.onload = function() {
        drawBlur();
      }

    });
  });

  // Accordions

   function delay_transition(param) {
     console.log("fuction working");
     //param.closest('.panel').find('.panel-collapse').addClass('in');		
     setTimeout(
       function () {
         param.closest('.panel').find('.panel-collapse').addClass('in');
         $("html, body").animate({
           scrollTop: 400
         }, 1000);
       }, 800);
   }

   var accor_this;
  //Initiate accordions
  //loop through all accordion title links
  $('.content-wrapper .panel-title a').each(function (i, el) {
    //setup click event for title links
    $(this).on('click', function(e) {
      //remove default behaviour
      e.preventDefault();
      e.stopPropagation();
      //if this accordion is already active
      if($(this).hasClass('active')) {
        //remove active state and close accordion
        $(this).closest('.panel').find('.panel-collapse').removeClass('in');
        $(this).removeAttr('class');
      } else {
        //if this accordion isn't active close the rest of the panels and open the selected
        $(this).closest('.panel-group').find('.in').removeClass('in');
         accor_this = $(this);
          if (document.querySelector("#accordion-805770")) {
            delay_transition(accor_this);
          } else {
            $(this).closest('.panel').find('.panel-collapse').addClass('in');
          }
          //$(this).closest('.panel').find('.panel-collapse').addClass('in');
        $(this).closest('.panel-group').find('.active').removeAttr('class');
        $(this).addClass('active');
      }
    });
      if (i === 0) {
        $(this).closest('.panel-group').find('.in').removeClass('in');
        $(this).closest('.panel').find('.panel-collapse').addClass('in');
        $(this).closest('.panel-group').find('.active').removeAttr('class');
        $(this).addClass('active');
      }
  });

  // Masonry layout on landing page
  $('.landing-toc__list').masonry({
      itemSelector: '.landing-toc__grid',
      columnWidth: '.landing-toc__sizer',
      percentPosition: true
  });

  // Toggler class: Menu button for mobile
  $('.menu__btn').sqClassToggler({
    'slaves': '.main-nav__wrap',
    'grouped': false,
    'outside': false
  });
  // Toggler class: Menu button activate shadow
  $('.menu__btn').sqClassToggler({
    'slaves': '.shadow-mobile',
    'grouped': false,
    'outside': false
  });

  // Toggler class: Search button for mobile
  $('.search__btn').sqClassToggler({
    'slaves': '.quick-search__box',
    'grouped': false,
    'outside': false
  });
  // Toggler class: Search button activate shadow
  $('.search__btn').sqClassToggler({
    'slaves': '.shadow-mobile',
    'grouped': false,
    'outside': false
  });

  // Dynamic page ToC for inside pages
  // Check if ToC container and Level 2 headings exist
  if ($('.toc__box').length && $('.content-wrapper h2').length) {
    var pageToC = $('<nav role="navigation" class="toc"></nav>'),
        pageToCList;
    // Add ToC heading
    pageToC.append('<h6>Table of contents</h6>');
    // Add ToC list
    pageToCList = $('<ul class="toc__list"></ul>').appendTo(pageToC);
    // Generate ToC links based on existing Level 2 headings
    $('.content-wrapper h2').each(function(i, el) {
      var tocID = $(el).attr('id'),
          tocText = $(el).text(),
          tocSlug = s.slugify(tocText),
          tocLink,
          tocItem;
      // Skip headings with no text
      if (tocSlug === '') {
        return true;
      }
      // Generate IDs for headings that don't currently have one
      if (typeof tocID === 'undefined') {
        tocID = tocSlug;
        $(el).attr('id', tocID);
      }
      tocLink = '#' + tocID;
      // Generate ToC list item
      tocItem = '<li class="toc-lev2_item"><a href="' + tocLink + '" class="toc-lev2__link">' + tocText + '</a></li>';
      pageToCList.append(tocItem);
    });
    // Add generated ToC to placeholder container
    $('.toc__box').prepend(pageToC);
  }

    // Youtube video
    $('iframe[src*="youtube.com"]').not('.override-yt-wrap').each(function() {
      $(this).wrap( '<div class="video-container-inside"></div>' );
      $(this).attr('src','' + $(this).attr('src') + '?enablejsapi=1');
    });

     function addCaptions(location) {

       // Wrap images with DIV and add special classes if added by editor
       $(location).each(function () {

         var captionText = $(this).attr('title');
         var imageClasses = $(this).attr('class');


         //add image classes to parent DIV
         if ($(this).hasClass('caption') ||
           $(this).hasClass('quarter-width') ||
           $(this).hasClass('full-width') ||
           $(this).hasClass('pull-left') ||
           $(this).hasClass('pull-right')
         ) {
           $(this).wrap('<div />');
           $(this).parent('div').addClass(imageClasses);
           $(this).addClass('full-width');
         }

         //add no-padding class to parent P
         if ($(this).hasClass('quarter-width') ||
           $(this).hasClass('pull-left') ||
           $(this).hasClass('pull-right')
         ) {
           $(this).closest('p').addClass('no-padding');
         }

         // Create image caption if image has a title attribute
         if ($(this).hasClass('caption') && (typeof captionText !== 'undefined' || captionText !== '')) {
           $(this)
             // Add caption wrapper and text
             .after('<p class="p-caption">' + captionText + '</p>')
             .parent('div').addClass('image-caption');
         }

         //Clean up unwanted classes
         $(this)
           .removeClass('pull-left')
           .removeClass('pull-right')
           .removeClass('quarter-width')
           .removeClass('caption')
           .removeClass('print-img-float-left')
           .removeClass('print-img-float-right');
       });
     }

     addCaptions('img');
     addCaptions('.modal img');

    //find all videos with a caption class
    $('.content-wrapper iframe.caption').each(function() {
      //set variable to element title attribute
      var captionText = $(this).attr('title');
      //add a paragraph for the element with the title text as the content
      $(this).after('<p class="p-caption">' + captionText + '</p>');
    });
    $('.video-container-inside').each(function() {
      var captionClasses = $(this).find('.caption');
      if ($(captionClasses).hasClass('pull-left')) {
        //if the element has a class of pull-left remove the class and add it to the newly created parent div
        $(captionClasses).removeClass('pull-left');
        $(captionClasses).parent('div').wrap('<div class="video__pull-left"></div>');
      }
      if ($(captionClasses).hasClass('pull-right')) {
        //if the element has a class of pull-left remove the class and add it to the newly created parent div
        $(captionClasses).removeClass('pull-right');
        $(captionClasses).parent('div').wrap('<div class="video__pull-right"></div>');
      }
      $(this).find('.p-caption').addClass('for-video').insertAfter($(this));
    });

  // Set explicit dimensions for caption wrapper
  if ($('body').hasClass('lt-ie10')) {
    $('iframe', '.video__pull-left, .video__pull-right').each(function() {
      var height = $(this).attr('height'),
          width = $(this).attr('width');
      $(this).css({'height': height + 'px','width': width + 'px'});
      $(this).parent().parent().next('.p-caption.for-video').css({'width': width + 'px'});
    });
  };

  // Content external link
  $('.main a[target="_blank"], .footer a[target="_blank"]').append('<span class="ext"></span');
  $('a').each(function() {
    var $this = $(this);
    var thisHref = $this.attr('href');

    if (thisHref != '#' && thisHref != null) {
      if ((thisHref.match(/^https?\:/i)) && (!thisHref.match(document.domain))) {
        var toolTipText = $this.attr('title');
        if (toolTipText) {
          $this.attr('title', toolTipText + ' - Redirects to external website');
        } else {
          $this.attr('title','Redirects to external website');
        }
      }
    }
  });

  // Top and bottom modules: add a class "last" to clear float on rows
  $('.module-3-col .module__item:nth-child(3n+4)').addClass('last-item');
  $('.module-2-col .module__item:nth-child(2n+3)').addClass('last-item');

  // Fix accessibility errors on form markup generated by Matrix
  $('#search_page_573949_extra_field').attr('title','search_page_573949_extra_field');
  $('#queries_topics_query_posted').attr('title','queries_topics_query_posted');
  $('#queries_region_query').attr('title','queries_region_query');
  $('#search_page_572528_extra_field').attr('title','search_page_572528_extra_field');
  $('#queries_topics_query_posted').attr('title','queries_topics_query_posted');

  // Responsive tables
  $('.content-wrapper table').not('.not-responsive , .table-responsive-all').wrap('<div class="table-responsive"></div>');
  $('.content-wrapper table.table-responsive-all').not('.not-responsive').wrap('<div class="table-responsive-all"></div>');

  // Form
    $('select', '.sq-form-question, .rhs-column, .layout-sidebar').wrap('<div class="style-select"></div>');

  // Form validation {
    $('.main form').not('.disable-validate').validate();

  // Back to top buttons
    $('.js-back-to-top').on( 'click', function( evt ) {
      evt.preventDefault();
      $( 'html, body' ).animate({ scrollTop: 0 });
    });

  //Initialize tablesorter
  $('table.sort').each(function(){
    $(this).tablesorter({ selectorHeaders: 'thead th.sortable' } );
  });

  /* Generate ToC for alphabetical listing, since native %page_list% doesn't produce nice markup */
  if ($('#az-index__toc').length && !$('#az-index__toc').children().length) {
    var azToCGroups = ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      azToCList = $('<ul class="az-index__toc-list"></ul>');
    // Generate A-Z ToC links depending on whether letter group anchor exists on page
    $(azToCGroups).each(function(tocIndex, tocChar) {
      var anchor = $('.az-index__title a[name="letter_' + tocChar + '"]'),
        tocLink = '',
        tocText = tocChar !== '@' ? tocChar : 'Other';
      if (anchor.length) {
        tocLink = '<li class="az-index__toc-item"><a href="#letter_' + tocChar + '" class="az-index__toc-link">' + tocText + '</a></li>';
      }
      else {
        tocLink = '<li class="az-index__toc-item"><span class="az-index__toc-link-inactive">' + tocText + '</span></li>';
      }
      azToCList.append(tocLink);
    });
    // Append ToC list to placeholder container
    $('#az-index__toc').append(azToCList);

  }

  // Smooth scroll anchor links
  $('.content-wrapper, .more-topics').on('click', 'a[href*=#]', function(ev) {
    var speed = 1000,
        href  = $(this).attr('href'),
        $el,
        visible,
        scrollTo;
    if (href === undefined
    || href === '#'
    || $(ev.currentTarget).is('*[data-toggle="tab"], *[data-toggle="collapse"]')
    ) {
      return;
    }
    if (href.charAt(0) === '#') {
      ev.preventDefault();
      $el = $(href);
      visible = $el.is(':visible');
      // Checks element exists and isn't hidden (doesn't scroll if hidden)
      if ($el.length > 0 && visible) {
        scrollTo = $el.offset().top;
        $('html, body').animate({scrollTop: scrollTo}, speed);
      }
    }
  });

  /*-- Media Queries --*/

  var mobileFunc = function() {

    // Move top navigation in the mobile menu
    $('.top-nav__list').appendTo('.main-nav');

    // Main navigation mobile: Add a class if there is a level 2 navigation
    $('.main-nav__item').has('ul').addClass('has-lev2');

    // Listener on class changes to toggle the dark overlay on mobile
    $(function() {
      (function($) {
          var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

          $.fn.attrchange = function(callback) {
              if (MutationObserver) {
                  var options = {
                      subtree: false,
                      attributes: true
                  };

                  var observer = new MutationObserver(function(mutations) {
                      mutations.forEach(function(e) {
                          callback.call(e.target, e.attributeName);
                      });
                  });

                  return this.each(function() {
                      observer.observe(this, options);
                  });

              }
          }
      })(jQuery);

      //Now you need to append event listener
      $('.main-nav__wrap').attrchange(function(attrName) {
        if(attrName=='class'){
          $('.menu__btn').toggleClass('close-menu__btn');
        };
      });

      //Now you need to append event listener
      $('.quick-search__box').attrchange(function(attrName) {
        var searchButton = $('.search__btn').eq(0),
            searchInput = document.getElementById('quick-search__query');
        if (attrName === 'class') {
          searchButton.toggleClass('close-search__btn');
        };
        /* Kludgy hack - if search button has "close" icon, that means
         * header search is visible, so apply focus to search input
         */
        if (searchButton.hasClass('close-search__btn')) {
          searchInput.focus();
        }
        else {
          searchInput.blur();
        }
      });

    });

    $('.video__pull-left iframe , .video__pull-right iframe').each(function() {
      $(this).css({'height': '100%','width': '100%'});
      $(this).parent().next('.p-caption.for-video').css({'width': '100%'});
    });

  };

  var desktopFunc = function() {

    // Remove specific mobile design items - menu button, close, shadow etc...
    $('.shadow-mobile').removeClass('sq-active');
    $('.main-nav__wrap').removeClass('sq-active');

    // Move top navigation in the header
    $('.top-nav__list').insertBefore('.quick-search__box');

    $('.video__pull-left iframe , .video__pull-right iframe').each(function() {
      var  height = $(this).attr('height');
      var  width = $(this).attr('width');
      $(this).css({'height': height + 'px','width': width + 'px'});
      $(this).parent().next('.p-caption.for-video').css({'width': width + 'px'});
    });

  };

  //Desktop
  var mqls = [ // list of window.matchMedia() queries
      window.matchMedia('(min-width: 60em)')
  ];

  function mediaqueryresponse() {
    if (mqls[0].matches){ //Desktop
        // do something
        desktopFunc();
    }
    else { //Mobile
        // do something
        mobileFunc();
    }
  }

  if(!($('body').hasClass('lt-ie10') || $('body').hasClass('lt-ie9'))) {
    for (var i=0; i<mqls.length; i++){ // loop through queries
        mediaqueryresponse(mqls[i]); // call handler function explicitly at run time
        mqls[i].addListener(mediaqueryresponse); // call handler function whenever the media query is triggered
    }
  }

  
   // Toggle tooltip feature		
   $('[data-toggle="tooltip"]').tooltip();
   // Toggle popover feature		
   $('[data-toggle="popover"]').popover();
   // Add Event Listeners to modal buttons to move the modal background		
   function moveModalBackdrop() {
     setTimeout(function () {
       var modalBackdrop = document.querySelector(".modal-backdrop");
       var modalsParent = document.querySelector(".modal").parentNode;
       modalsParent.appendChild(modalBackdrop);
     }, 100);
   }
   var modalButtons = document.querySelectorAll('button');
   for (var i = 0; i < modalButtons.length; i++) {
     modalButtons[i].addEventListener("mouseup", moveModalBackdrop);
   }
   $('.dropdown-toggle').dropdown()
   $('#myDropdown').on('show.bs.dropdown', function () {
     // do something…		
   })

}(jQuery));

/*
--------------------
Modules
--------------------
*/

//Typeahead and Funnelback Concierge

(function ($) {
  //added
  jQuery('#search, #home-search__query').autocompletion({

    // program: 'https://bnsw-search.squiz.cloud/s/suggest.json', 
    program: 'https://search.business.nsw.gov.au/s/suggest.json',
    //added
    datasets: {
      organic: {
        collection: 'nsw-dpi-web-meta',
        profile: '_default',
        format: 'extended',
        alpha: '0.5',
        show: '5',
        sort: '0',
        group: true,
        template: {
          header: $('<h5>').text('Suggestions').addClass('tt-category tt-category--organic'),
          notFound: $('<div>').html('<em>No suggestions found</em>')
        }
      },

      researchers: {
        name: 'researchers',
        collection: 'nsw-dpi-web-researcher',
        profile: 'researcher',
        show: '5',
        format: 'extended',
        group: true,
        template: {
          header: $('<h5>').text('Researchers').addClass('tt-category tt-category--researchers'),
          suggestion: '<div class="researchers"><a href="#"><div class="researchers__details"><div class="researchers__details--name">{{label.title}}</div><div class="researchers__details researchers__details--dept">{{label.metaData.ResearchUnit}}</div></a></div>',
          notFound: $('<div>').html('<em>No suggestions found</em>')
        }
      }
    },

    horizontal: false,
    typeahead: {
      hint: true
    },
    length: 2

  });

  ////////////////////////////////////////////////////////////////////////////////////



  $(window).on('resize', function () {

    $('.quick-search__box').removeClass('sq-active');
    $('.search__btn mobile').removeClass('close-search__btn');
    $('.shadow-mobile').removeClass('sq-active');
    $('#home-search__query').typeahead('val', '');
  });


}(jQuery));

//Accorions stuff found in Matrix that was manually added but not in repo
/*-- module:squiz-module-accordion --*/
(function ($) {
  // First example is a standard accordion
  /*eslint new-cap: 0*/
  $('.accordion').UberAccordion({
    buttonClass: 'accordion__link',
    autoExpand: '#accordion__target-1',
    toggle: true,
    multiple: true,
    expandOnFocus: false,
    preventDefaultButton: true,
    hashChange: true
  });

  // Second example is a tab-like setup
  $('.tabs').UberAccordion({
    buttonClass: 'tabs__link',

    autoExpand: function () {
      return window.location.hash;
    },

    toggle: false,
    multiple: false,
    preventDefaultButton: true
  });
}(jQuery));

//Bootstrap 4 fix		
//Fix active class on nav tabs		
$(".nav-tabs li").on("click", function () {

  var parent_ul = $(this).closest('ul');
  $(parent_ul).children('li').each(function (i) {
    $(this).removeClass('active');
  });
  $(this).addClass('active');
});



/*-- module:squiz-module-accordion --*/
(function ($) {
    // First example is a standard accordion
    /*eslint new-cap: 0*/
    $('.accordion').UberAccordion({
        buttonClass: 'accordion__link',
        autoExpand: '#accordion__target-1',
        toggle: true,
        multiple: true,
        expandOnFocus: false,
        preventDefaultButton: true,
        hashChange: true
    });

    // Second example is a tab-like setup
    $('.tabs').UberAccordion({
        buttonClass: 'tabs__link',

        autoExpand: function () {
            return window.location.hash;
        },

        toggle: false,
        multiple: false,
        preventDefaultButton: true
    });
}(jQuery));


/*-- module:squiz-module-typeahead --*/
(function($){
    // This example uses funnelback docs as an example of typeahead functionality
    var baseUrl = 'http://docs.funnelback.com',
        suggestPath = '/s/suggest.json',
        collection = 'funnelback_docs_1240',
        searchInput = $('#typeahead-query');

    searchInput.typeahead({
        name:      'site-search',
        minLength: 3,
        highlight: true
    }, {
        name:  'fb-docs',
        async: true,
        limit: 10,

        source: function(query, sync, async) {
            $.ajax({
                url: baseUrl + suggestPath + '?collection=' + collection +
                     '&partial_query=' + encodeURIComponent(query),
                dataType: 'jsonp'
            }).then(function(result) {
                async(result);
            });
        }
    });

}(jQuery));
