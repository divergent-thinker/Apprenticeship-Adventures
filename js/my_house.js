


	
function doodle (processing) {

  /* This is an impure function as it affects what is outside of it i.e. it has side-effects. 
function starBrighter () {
    star.R = star.R + 0.005;
    star.G = star.G + 0.005;
    star.B = star.B + 0.005;
  }
  starBrighter();
*/

/* 
This is a pure function i.e. it has no side-effects.
*/ 
function brighten (col){
  var inc = 0.005;
  var newcol = {
    R: col.R + inc,
    G: col.G + inc,
    B: col.B + inc
  }
  return newcol;
}

var starPositions = [
    [20, 20], 
    [70, 80], 
    [90, 30],
    [120, 90],
    [40, 140],
    [120, 150],
    [190, 170],
    [65, 190],
    [170, 5],
    [260, 60],
    [300, 30],
    [300, 90],
    [420, 140],
    [460, 5],
    [480, 60],
    [500, 110],
    [490, 150],
    [380, 20],
    [250, 20]
  ];

function drawStar(x, y) {
  processing.noStroke();
  processing.fill (star.R, star.G, star.B);
  processing.ellipse (x, y, 5, 5);
}

function drawStarField (starPositions) {
  /*.length is the number of elements in an array, however the index of the last element is one less 
  than the length e.g. array 0, 1, 2 has three elements, not 2. This is not true in all languages, just most.*/
  for (var index=0; index < starPositions.length; index++) {
    var coord = starPositions[index]; // coord = [3,5];
    var x = coord[0];
    var y = coord[1];
    drawStar(x, y);
  }
}

function drawStarField2 (starPositions) {
/*
  function drawStarAtCoord(coord){
    var x = coord[0];
    var y = coord[1];
    drawStar (x, y);
  }
  starPositions.forEach(drawStarAtCoord);
*/

/*The below code is a way of simplifying how to write the above function, using 
 *the .forEach Javascript method on arrays.
 *See this article for more information:
 *https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
*/
starPositions.forEach(function(bob){
    var x = bob[0];
    var y = bob[1];
    drawStar (x, y);
  }); 
}

var sky = {
    R: 138,
    G: 153,
    B: 245
  };

/*An object 'star' created with Javascript object notation
 *
*/
var star = {
    R: 138,
    G: 153,
    B: 245
  };

  /*
function fadeSky 
  */  
var topLight = 0;

var bottomLight = 0;
    
var doorPositions = [
    [20, 40, 20, 0],
    [20, 40, 20, 0],
    [20, 40, 20, 0],
    [19, 40, 18, 0],
    [18, 41, 16, -1],
    [17, 43, 18, -2],
    [16, 43, 17, -3],
    [15, 44, 15, -4],
    [15, 44, 15, -4],
    [13, 46, 13, -6],
    [12, 47, 12, -7],
    [11, 47, 11, -7],
    [10, 48, 10, -8],
    [10, 48, 10, -8],
    [9, 49, 9, -9],
    [-8, 50, -8, -10],
    [-8, 50, -8, -10],
    [0, 50, 0, -10],
    [0, 50, 0, -10],
    [-15, 46, -15, -6],
    [-15, 46, -15, -6],
    [-20, 40, -20, 0], 
 ];

var doorStates = {
  OPEN: 1,
  SHUT: 2,
  OPENING: 3, 
  CLOSING: 4
};

var doorPositionIndex;

var doorCurrentState = doorStates.SHUT;


function onDoor () {
  return (mouseX>280 && mouseX<310 && mouseY>400 && mouseY<440);
}


function drawDoor () {
  switch (doorCurrentState){ 
    case doorStates.SHUT: 
      doorPositionIndex = 0;
      break; 
    case doorStates.OPEN: 
      doorPositionIndex = doorPositions.length -1;
      break; 
    case doorStates.OPENING: 
      if(doorPositionIndex === doorPositions.length -1) {
        doorCurrentState = doorStates.OPEN;
      } else {
        doorPositionIndex++; //same as =doorPositions +1;
      }
      break; 
    case doorStates.CLOSING: 
      if(doorPositionIndex === 0){
        doorCurrentState = doorStates.SHUT;
      }else{
        doorPositionIndex--;
      }
      break; 
  }

  processing.pushMatrix();
    processing.translate (290, 400);
    processing.fill (0);
    processing.quad (0, 0, 0, 40, 20, 40, 20, 0);
    processing.fill (127, 22, 55);
    processing.quad (0, 0, 0, 40, 
          doorPositions[doorPositionIndex][0], 
          doorPositions[doorPositionIndex][1],
          doorPositions[doorPositionIndex][2],
          doorPositions[doorPositionIndex][3]);
  processing.popMatrix();
}

/*This first line defines an object. This is a particular datastructure, 
  also referred to as a dictionary, associative array or a map. 
  */
  var clickedTransitions = {};
  /*This line associates a key, in this case doorStates.SHUT with a value, which
  is in this case doorState.OPENING. Here we are adding new values in the dictionary
  DICTIONARY        [KEY]               [VALUE]*/
  clickedTransitions[doorStates.SHUT] = doorStates.OPENING;
  clickedTransitions[doorStates.OPEN] = doorStates.CLOSING;
  clickedTransitions[doorStates.OPENING] = doorStates.CLOSING;
  clickedTransitions[doorStates.CLOSING] = doorStates.OPENING;
  

function doorClicked () {
   /*Here we're accessing a value (clickedTransitions) through it's key.
   It checks what doorCurrentState is then matches this key with it's value
   pair. 
   This is a much more elegant way of writing state machines.*/
  var new_state = clickedTransitions[doorCurrentState];
  
  /*
  So here we change the current state to whatever the new state is as defined by
  the dictionary. 
  */
  doorCurrentState = new_state;
}


function drawSails () {
  var now = processing.millis();
  processing.pushMatrix(); //adding a matrix
    processing.translate (300, 180);
    processing.rotate(now/1000); //rotate and translate are on the same matrix. 
    processing.fill (255, 183, 51, 200);
    
    //blade++ (shorthand)
    var numblades = 5;
    for (var blade=0; blade<numblades; blade=blade+1) {
      processing.noStroke();
      processing.quad(30,-29, 30,29, 170,29,170,-29);
      processing.stroke (0);
      processing.line(0,0,170,0);
      processing.rotate (processing.TWO_PI/numblades);
    }
  processing.popMatrix(); //removes a matrix
}

  processing.setup = function () {
	/* processing.size: Size is a method (CHECK) of the object
	 * processing and the arguments passed in here set the
	 * size of the canvas.
	 */
		processing.size (420, 420);
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
	  
	/* canvas background
	*/
	processing.background (sky.R, sky.G, sky.B);	
	sky.R = sky.R - 0.1
	sky.G = sky.G - 0.1
	sky.B = sky.B - 0.1

	/* moon
	*/
	processing.noStroke();
	processing.fill (star.R, star.G, star.B);
	processing.ellipse (330, 60, 40, 40);
	  
	drawStarField2 (starPositions);

	star = brighten(star);
	
	
	/* main building
	 * .fill is a function. The arguments are inside the
	 * parantheses, separated by commas.
	 * The fourth value in fill is for transparency.
	 */
  processing.fill (154, 121, 83);
	processing.quad (350, 200, 400, 440, 200, 440, 250, 200);

	/* roof
	 */
	processing.fill (118, 62, 207);
	processing.triangle (300, 150, 250, 200, 350, 200);

	 /* balcony
	 */
	processing.fill (4, 120, 120);
	processing.quad (190, 360, 200, 380, 400, 380, 410, 360);
	 
  	drawDoor();

	/* top window
	*/
  processing.fill (topLight);
  processing.stroke (255);
	processing.rect (290, 260, 20, 20);

	/* bottom window
	*/
	processing.fill (bottomLight);	
	processing.stroke (255);
	processing.rect (290, 320, 20, 20); 
	
	drawSails ();
	}
	
	/* when the user clicks the mouse (an event), 
	 *the code here is executed
   	 */  
  
  function inTopWindow () {
    var intop = (mouseX>290 && mouseX<310 && mouseY>260 && mouseY<280);
    return intop;
  }
  
  function inBottomWindow () {
    var inBottom = (mouseX>290 && mouseX<310 && mouseY>320 && mouseY<340);
    return inBottom;
  } 
  
  function toggleTopLight() {
    if (topLight===0) {
  	  topLight = color (255, 183, 51);
  	} else {
  	  topLight = 0;
    }
  }
  
  function toggleBottomLight() {
    if (bottomLight===0) {
      bottomLight = color (255, 183, 51);
    } else {
      bottomLight = 0;
    }
  }
  
	processing.mouseClicked = function () {
   if (inTopWindow()) {   
  	  toggleTopLight();
    }
	  
	  if (inBottomWindow()) {
	      toggleBottomLight();
	  }
	  
	  if (onDoor()) {
	     doorClicked ();
	  }
	} 
}

var bottom = 0;
var canvas = document.getElementById('sketch');
new Processing (canvas, doodle);	
