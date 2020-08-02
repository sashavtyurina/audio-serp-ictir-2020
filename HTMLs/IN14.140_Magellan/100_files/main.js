jQuery( document ).ready( function( $ ) {
	// Handle the AJAX field on change action
	$( '#sbaw-select').on( 'change', function( e ) {
		e.preventDefault();
		
		var author_url = $( '#sbaw-select' ).val();
		
		$.post(sbawAjax.ajaxurl, {
	 		data: { 'author_url': author_url },
			 }, function( status ) {
			 	 window.location.href = author_url;
           }
         );
	});
});