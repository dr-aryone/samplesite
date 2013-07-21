// Flips the right-floated drop-down menu around
$('.menu .right ul').css({ 
	'right' : 0 + 'px'
});

// Slide mobile menu down 
$('.menu-main').on('click', '.menu-mobile a', function() {
	$('.menu li:not(:first-child)').slideToggle();
})