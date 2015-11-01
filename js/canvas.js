function doodle (processing) {

	processing.setup = function () {
		processing.size (410, 410);
		processing.background (138, 153, 245);
	}

}

var canvas = document.getElementById('sketch');
new Processing (canvas, doodle);