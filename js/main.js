$('#js1').click(function(){
	window.open("https://tictaco.glitch.me/");
});

$('#js2').click(function(){
	window.open("https://github.com/thomasnguyen/meerkat_momentum");
});

$('#js3').click(function(){
	window.open("http://neighborhood.gomix.me/");
});

$('#js4').click(function(){
	window.open("https://thomasnguyen.github.io/instagrocery/");
});


$('nav.mobile').click(function(){
	$(this).toggleClass('open');
	$('.mobileNav_content').toggleClass('open');
});

$('.mobile_nav_item').click(function(){
	$('nav.mobile').toggleClass('open');
	$('.mobileNav_content').toggleClass('open');
});

