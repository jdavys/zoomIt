var headerHeight = $('header').outerHeight(true);
var wasntrun = true;
$('nav').css('margin-top', $('header').outerHeight(true));
$(window).resize(function() {
	headerHeight = $('header').outerHeight(true);
	$css('nav {margin-top: ' + headerHeight + 'px}');
}).scroll(function() {
	if ($(this).scrollTop() >= headerHeight) {
		if (wasntrun) {
			$css([['nav {position: fixed; top: -' + headerHeight + 'px; z-index: 2'],['section {margin-top: calc(' + headerHeight + 'px + 64px)}']]);
			$('header').addClass('active');
			wasntrun = false;
		}
	} else {
		$css([['nav {position: relative; margin: 0; top: 0px}'],['section {margin: 0}']]);
		$('header').removeClass('active')
		wasntrun = true;
	}
});