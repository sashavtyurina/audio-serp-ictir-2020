// get base URL
function getBaseURL() {
    var url = location.href;  // entire url including querystring - also: window.location.href;
    var baseURL = url.substring(0, url.indexOf('/', 15));


    if (baseURL.indexOf('https://localhost') != -1) {
        // Base Url for localhost
        var url = location.href;  // window.location.href;
        var pathname = location.pathname;  // window.location.pathname;
        var index1 = url.indexOf(pathname);
        var index2 = url.indexOf("/", index1 + 1);
        var baseLocalUrl = url.substr(0, index2);

        return baseLocalUrl + "/";
    }
    else {
        // Root Url for domain name
        return baseURL + "/";
    }

}

jQuery(document).ready(function() {

	// document icons
	jQuery("a[href]").filter(function(){
	   	return jQuery(this).attr("href").match(/\.(pdf|doc|docx|ppt|pptx|xls|slxs|epub|odp|ods|txt|rtf)$/i);
	}).prepend('<span class="doc-icon glyphicon glyphicon-file mr-3"></span>');

	// fades
	jQuery('.fadeIn').delay(1000).fadeTo("1000", 1);
	jQuery('.fadeOut').delay(100).fadeTo(750,0);

	// equal heights
	jQuery('.equalHeight').matchHeight();
	jQuery('.gallery figure figcaption').matchHeight();

	// owl controls
	jQuery('.next').click(function(){ owl.trigger('owl.next'); });
	jQuery('.prev').click(function(){ owl.trigger('owl.prev'); });

	// focus on input via main search button
	jQuery(function() {
		jQuery('#navsearchbtn-lg').click(function(e) {
			setTimeout(function(){
					jQuery('#navsearchinput-lg').focus();
				},0);
		});
		jQuery('#navsearchinput-lg').keypress(function(e) {
	        e.stopPropagation();
	    });
	});

	// remove inline style from content caption/img wrapper
	jQuery('.col-sm-8.wide-gutter-col figure.alignnone').removeAttr('style');

	// resize videos
	jQuery('.container').fitVids();

	// standfirst
	if(!jQuery('.wrapper').hasClass('standfirst-disabled')) {
		console.log('no');
		jQuery('.single .col-sm-8 p:not(".lead"), .page-template-page-php .col-sm-8 p:not(".lead")').first().addClass('lead');
	} else if(jQuery('.wrapper').hasClass('standfirst-disabled')) {
		jQuery('.entry-content p:first-of-type').css('font-size','16px').css('font-weight','400').css('line-height','25px');
		console.log('yes');
	}

	jQuery('.no-lead').removeClass('lead');

	// last paragraph of landing-main-content
	jQuery('.landing-main-content p').last().addClass('margin-bottom-none');


	// img-purchase
	var pathname = getBaseURL();
	jQuery('.img-library-purchase').parent().css({'position': 'relative', 'display': 'block'});
	jQuery('.img-library-purchase').parent().append('<img src="'+pathname+'/wp-content/themes/baspress/img/cart.png" alt="Purchase image" class="img-purchase-button" width="30" height="30">');

	// on load of the page: switch to the currently selected tab
    var hash = window.location.hash;
    jQuery('.standard-tabs .nav.nav-tabs > li > a[href="' + hash + '"]').tab('show');
    console.log(hash);

    // Append URL with tab's ID #
	jQuery('.standard-tabs .nav.nav-tabs > li > a').click(function (e) {
		var scrollmem = jQuery('body').scrollTop();
		window.location.hash = this.hash;
		jQuery('html,body').scrollTop(scrollmem);
	});

	jQuery(window).on('hashchange', function(e) {
		console.log(window.location.hash);
    });

});
