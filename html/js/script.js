$(document).ready(function () {
	$("#infoUser-tabs").tabs();
	$( ".show-hide-nav" ).click(function(event) {
		event.preventDefault();
		$(this).toggleClass( "navActive" );
		$('.sidebar-left').toggleClass( "navActive" );
	});
	$( "#infoUser-Show" ).click(function(event) {
		event.preventDefault();
		$('#toggleUser').toggleClass( "fadeInDown" );
	});
});