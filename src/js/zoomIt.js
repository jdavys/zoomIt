var $candozoom = true;
function activeZoom () {
	if ($candozoom) {
		$('.zoomit').click(function() {
			$candozoom = false;
			$coord = getWindowCoord($(this).next()[0])
			$(this).parent().append('<div id="thezoom" style="top: ' + $coord.top + 'px;right: ' + $coord.right + 'px;bottom: ' + $coord.bottom + 'px;left: ' + $coord.left + 'px;position: fixed;display:flex;justify-content:center;align-items:center;margin:0 auto;background-color:rgba(0,0,0,.5);box-sizing:border-box;cursor:pointer;user-select:none;z-index:5"></div>');
			$('#thezoom').append($(this).next().clone());
			$('#thezoom').animate({top: 0, right: 0, bottom: 0, left: 0}, 400, 'easeOutBack');
			$('#thezoom').children().css({
				position: 'relative',
				display: 'block',
				width: '75%',
				height: '75%',
				'object-fit': 'contain',
				'z-index': 5,
				'border-radius': 0,
				'background-size': 'contain',
				'background-repeat': 'no-repeat',
				margin: 0
			});
			$('#thezoom').click(function() {
				$('#thezoom').hide('300', function() {
					$(this).remove();
					$candozoom = true;
				});
			});
		});
	}
}
function getWindowCoord(elem) {
	var r = elem.getBoundingClientRect();
	return {top: r.top, right: ($(window).width() - r.right), bottom: ($(window).height() - r.bottom), left: r.left}
}
$(document).ready(function() {
	var $original;
	var thezooms = $('*[zoomit]')
	for (var i = 0; i < thezooms.length; i++) {
		$original = thezooms[i];
		$this = $($original);
		const $constructor = '<div class="zoomcont" style="width:' + $this.width() + 'px;height:' + $this.height() + 'px;margin:' + $this.css('margin') + ';border-radius:' + $this.css('border-radius') + ';position:relative;user-select:none"><div class="zoomit" style="border-radius:' + $this.css('border-radius') + ';display:flex;justify-content:center;align-items:center;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.5);opacity:0;overflow:hidden;transition:.3s all ease-out;cursor:pointer"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiID8+PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj48c3ZnIHdpZHRoPSIxNTBwdCIgaGVpZ2h0PSIxNTBwdCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBpZD0iI2ZmZmZmZmZmIj48cGF0aCBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxLjAwIiBkPSIgTSA1NS4zMiAxLjEzIEMgNjUuNTIgMC4xMyA3NS44NyAyLjcxIDg1LjE0IDYuOTMgQyA5OC4zNSAxMy41MyAxMDkuMjUgMjUuMTUgMTE0LjE0IDM5LjE3IEMgMTIwLjUxIDU1LjY5IDExOC40OCA3NS4xNCAxMDkuMTEgOTAuMTQgQyAxMDAuMzggMTA0LjM4IDg1LjMzIDExNC4zNCA2OC44OCAxMTcuMTIgQyA2MC4wOCAxMTguMTMgNTAuOTUgMTE4LjExIDQyLjQ2IDExNS4yNyBDIDIzLjU1IDEwOS42OSA4LjA5IDkzLjc0IDMuMDggNzQuNjYgQyAtMC42NSA2MS42NSAwLjY5IDQ3LjQ4IDYuMjkgMzUuMTkgQyAxNC44MCAxNS45OSAzNC4zNyAyLjQzIDU1LjMyIDEuMTMgTSA1MS4zOCAxOC42NiBDIDM0LjMyIDIxLjg1IDIwLjExIDM2LjczIDE4LjM2IDU0LjA4IEMgMTUuNzMgNzAuOTkgMjUuMjYgODguNzcgNDAuNTYgOTYuMzQgQyA0OC4zNSAxMDAuNjcgNTcuNTIgMTAxLjQ1IDY2LjIzIDEwMC40MCBDIDgxLjM3IDk4LjAwIDk0LjYwIDg2LjQ0IDk5LjA4IDcxLjgwIEMgMTAxLjE4IDY1LjQ3IDEwMS4xMCA1OC42NCAxMDAuMzQgNTIuMDkgQyA5OC4zMyA0MC41MCA5MS4wNSAzMC4wMCA4MS4wMSAyMy45MCBDIDcyLjIxIDE4LjY0IDYxLjQ1IDE2LjU1IDUxLjM4IDE4LjY2IFoiIC8+PHBhdGggZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMS4wMCIgZD0iIE0gNTEuNzYgMzUuODEgQyA1Ni45NyAzNS41NCA2Mi4zMyAzNS4xMiA2Ny40NyAzNi4xNiBDIDY3LjYyIDQxLjEyIDY3LjQ0IDQ2LjA4IDY3LjU2IDUxLjA0IEMgNzIuMzAgNTEuOTggNzcuMzEgNTEuMDkgODIuMTUgNTEuNDEgQyA4Mi40NSA1MS44MCA4My4wMyA1Mi41NyA4My4zMiA1Mi45NiBDIDgzLjM4IDU3LjI4IDgzLjQ2IDYxLjYxIDgzLjI4IDY1LjkyIEMgODMuMDQgNjYuMjggODIuNTcgNjYuOTggODIuMzQgNjcuMzMgQyA3Ny40MyA2Ny43NyA3Mi40NyA2Ny4zNyA2Ny41NCA2Ny41MyBDIDY3LjUyIDcyLjU0IDY3LjU0IDc3LjU0IDY3LjUyIDgyLjU0IEMgNjUuMTQgODMuNjAgNjIuNTMgODMuMzQgNjAuMDAgODMuMzUgQyA1Ny4wOSA4My4yNyA1NC4wNCA4My43OCA1MS4zNCA4Mi4zOSBDIDUxLjU0IDc3LjQ0IDUxLjM3IDcyLjQ5IDUxLjQ2IDY3LjU0IEMgNDYuMzggNjcuMTggNDAuOTggNjguMjQgMzYuMTEgNjYuOTQgQyAzNS4xNyA2Mi4wMyAzNS42MCA1Ni44MCAzNS44NiA1MS44MCBDIDQwLjk4IDUwLjkzIDQ2LjI5IDUxLjU4IDUxLjQ4IDUxLjQ3IEMgNTEuNTggNDYuMjYgNTEuMDMgNDAuOTggNTEuNzYgMzUuODEgWiIgLz48cGF0aCBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxLjAwIiBkPSIgTSAxMTQuNjcgOTAuOTUgQyAxMjMuMDYgOTguNjcgMTMwLjg2IDEwNy4wMiAxMzkuMDAgMTE1LjAwIEMgMTQyLjI3IDExOC44NCAxNDYuOTggMTIxLjk0IDE0OC4xNiAxMjcuMTQgQyAxNDguNzIgMTMwLjk1IDE0OS40MCAxMzUuMDUgMTQ3LjUwIDEzOC42MiBDIDE0NC42OCAxNDUuODIgMTM2LjE4IDE1MC4yMyAxMjguNjkgMTQ4LjI5IEMgMTI1Ljg2IDE0Ny4yNyAxMjIuNzUgMTQ2LjU4IDEyMC41MiAxNDQuNDQgQyAxMTAuNTggMTM0LjYyIDEwMC44MiAxMjQuNjEgOTAuODEgMTE0Ljg3IEMgMTAwLjc4IDEwOS4zNiAxMDkuMjcgMTAxLjAwIDExNC42NyA5MC45NSBNIDk3Ljk4IDExNy44OSBDIDEwNi42NiAxMjUuOTIgMTE0LjUxIDEzNC44NCAxMjMuMzQgMTQyLjcwIEMgMTI3LjI1IDE0Ni40OSAxMzMuMDYgMTQ1LjQ5IDEzNy44NiAxNDQuNDAgQyAxMzkuNTggMTQyLjk4IDE0MS4yMiAxNDEuNDIgMTQyLjM5IDEzOS41MCBDIDEzNy4wMiAxNDAuNzggMTMwLjY0IDE0MS45NSAxMjYuMDkgMTM3LjkyIEMgMTE4LjE0IDEzMC41NSAxMTAuOTkgMTIyLjMyIDEwMi45NyAxMTUuMDUgQyAxMDEuMDUgMTE1LjQ2IDk5LjU2IDExNi44MyA5Ny45OCAxMTcuODkgWiIgLz48L2c+PC9zdmc+" style="width:20%;height:20%;object-fit:contain;margin:0;padding:0"></div>' + $original.outerHTML + '</div>';
		$(thezooms[i]).replaceWith($constructor);
		$('.zoomit').hover(function() {
			$(this).css('opacity', '1');
		}, function() {
			$(this).css('opacity', '0');
		});
		$('*[zoomit]'[0]).removeAttr('zoomit');
	}
	activeZoom();
});