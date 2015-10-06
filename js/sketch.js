


/*here, processing is a library of functions 
				that we're passing in. 
				*/
function doodle (processing) {

	var tick = 0;

	/*
	 * This fubction does abcd...
	 * Setup gets called only once, whereas draw 
	 gets called repeatedly, it loops many times a second, by default 
	 60 times a second. THerefore any action goes under draw, 
	 any initialisation goes under draw. 
	 */
	processing.setup = function () {

/*size is a method, you can pass in x and y pixels to give the
size for the canvas
*/
		processing.size (500, 500);

	}



	processing.mouseClicked = function () {
		processing.background (255, 255, 255);
	}


	processing.draw = function () {
		processing.fill (138, 153, 245); 
		processing.rect (250,250,100,100);
		processing.line(tick + 10, tick + 10, 
						tick + 20,
						tick + 20); 
		tick = tick + 1;
		console.log ("hello");
	}

}

var canvas = document.getElementById('sketch');
new Processing (canvas, doodle);
