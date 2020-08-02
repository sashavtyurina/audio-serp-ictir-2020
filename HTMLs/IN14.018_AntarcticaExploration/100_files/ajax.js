// owl stuff fires once ajax is loaded
jQuery(document).ajaxComplete(function(){

	var owl = jQuery('.owl');

	owl.owlCarousel({
		items : 4,
		itemsDesktop : [1199,4],
	    itemsDesktopSmall : [980,3],
	    itemsTablet: [768,3],
	    itemsTabletSmall: false,
	    itemsMobile : [479,1],
	    pagination: false,
	});

	jQuery('.next').click(function(){
		owl.trigger('owl.next');
	});

	jQuery('.prev').click(function(){
		owl.trigger('owl.prev');
	});
});

var pathname = getBaseURL();

jQuery(document).ready(function(){
	// load latest News into canvas
	jQuery('#homepage-canvas #latestCanvas').load(pathname + '/wp-content/themes/baspress/homepage-ajax-news.php', function() {
		jQuery(this).hide().fadeIn('slow');
	});

	// load latest Images into img library canvas
	jQuery('#img-library-canvas #latestCanvas').load(pathname + '/wp-content/themes/baspress/imagelibrary-ajax-images.php', function() {
		jQuery(this).hide().fadeIn('slow');
	});
});

// perform our ajax request etc.
jQuery(document).on('click', '.ajax-tabs a', function(e) {
	e.preventDefault();
	jQuery('.latestBandTabs a').removeClass('active');
    jQuery(this).addClass('active');
	href = jQuery(this, 'a').attr('href');
	height = jQuery('#latestCanvas').height();
	jQuery('#latestCanvas').css('height', height).html("<div class='text-center spinner'><img src='https://www.bas.ac.uk/wp-content/themes/baspress/img/ajax-rotation.gif' alt='loading...' /></div>");
		jQuery('#latestCanvas').load(jQuery(this).attr('href'), function() {
		jQuery(this).hide().fadeIn('slow');
	});
});
