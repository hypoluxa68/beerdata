$(document).ready(function() {
	// copyright
	$('#copy-footer').html('<p>&copy;' + new Date().getFullYear() + ' | me.</p>');
	
	// navigation
	// open
	$('#open-nav-bar i').click(function(){
		$('#main-nav').css('width', '35%');
		$('#site').css('margin-left', '35%');
	});	
	
	// close
	$('#close-nav-bar i').click(function(){
		$('#main-nav').css('width', '0');
		$('#site').css('margin-left', '0');
	});
});