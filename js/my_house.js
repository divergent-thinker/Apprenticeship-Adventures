


/*here, processing is a library of functions 
 *that we're passing in. 
 */
function doodle (processing) {

	/*
	 * This function is to set up the canvas on which to draw.
	 * Setup gets called only once, whereas draw 
	 gets called repeatedly, it loops many times a second, 
	 by default 60 times a second. Therefore any action goes 
	 under draw, any initialisation goes under setup. 
	 */
		processing.setup = function () {
	/* processing.size: Size is a method (CHECK) of the object
	 * processing and the arguments passed in here set the
	 * size of the canvas.
	 */
		processing.size (500, 500);
	/* processing.background: Background is another method (CHECK)
	 * of the object processing. The arguments passed in 
	 * here are the RGB values and set the background
	 * colour of the canvas.
	 */
		processing.background (138, 153, 245);
	}

	/* processing.mouseclicked: Mouseclicked is another
	 * method of the object processing. It is defined by 
	 * a function which sets various properties/methods? (?CHECK).
	 */


	processing.draw = function () {
		
	/* main building
	 * .fill is a function. The arguments are inside the
	 * parantheses, separated by commas.
	 */
	processing.fill (154, 121, 83);
	processing.quad (350, 200, 400, 440, 200, 440, 250, 200);

	/* roof
	 */
	processing.fill (118, 62, 207);
	processing.triangle (300, 150, 250, 200, 350, 200);

	/* sails
	 */
	processing.fill (255, 183, 51);
	processing.quad (300, 140, 400, 40, 440, 80, 340, 180);
	processing.quad (340, 180, 440, 280, 400, 320, 300, 220);
	processing.quad (300, 220, 200, 320, 160, 280, 260, 180);
	processing.quad (260, 180, 160, 80, 200, 40, 300, 140);

	/* sails - cross-lines
	 */
	processing.line (180, 60, 420, 300);
	processing.line (180, 300, 420, 60);

	 /* balcony
	 */
	processing.fill (4, 120, 120);
	processing.quad (190, 360, 200, 380, 400, 380, 410, 360);
	 

	/* door
	 */
	processing.fill (127, 22, 55);
	processing.rect (290, 400, 20, 40);

	
	/* top window
	*/
	processing.fill (0);
	processing.rect (290, 260, 20, 20);


	/* bottom window
	*/
	processing.fill (bottom);	
	processing.rect (290, 320, 20, 20); 

	}

	/* && mouseX>290 && mouseX<290+20 && mouseY>320 && mouseY<320+20
	*/
	processing.mouseClicked = function () {
		if 
			(bottom == color(0)); {
			bottom = color(255, 183, 51);
		} else {
			bottom = color(0);
		}
	}

}


var bottom = 0;
var canvas = document.getElementById('sketch');
new Processing (canvas, doodle);	
