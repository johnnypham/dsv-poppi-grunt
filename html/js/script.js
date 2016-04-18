$(document).ready(function () {
	$("#infoUser-tabs").tabs();
	$("#tabs-settings").tabs();
	$("#tabs-conversation-profile").tabs();
	$( ".show-hide-nav" ).click(function(event) {
		event.preventDefault();
		$(this).toggleClass( "navActive" );
		$('.sidebar-left').toggleClass( "navActive" );
	});
	$('#accordion-conversation-profile').accordion();
	$( "#infoUser-Show" ).click(function(event) {
		event.preventDefault();
		$('#toggleUser').toggleClass( "fadeInDown" );
	});
	$( "#toggleEmailUser-Show" ).click(function(event) {
		event.preventDefault();
		$('#toggleEmailUser').toggleClass( "fadeInDown" );
	});


	$('.toggle-Details-conversation').on('click',function(){
		$(this). closest('.tabs-conversations-content-user').addClass('show-conversations')
	});
	$('.close-conversation').on('click',function(){
		$(this). closest('.tabs-conversations-content-user').removeClass('show-conversations')
	})
});
