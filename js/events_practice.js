/*The task is to figure out using JQuery 
 * how to change the title or the style of a 
 * text when you double click it.
 * Double click - change style and colour. 
 * Single click - Change the value of the to 
 * one of the elements of an array - cycle 
 * through array with each click. 
 * Use JQuery API to handle these events.
 * Also look up boundary conditions on work 
 * we did with the windmill animation. 
 */

function prepareEventHandlers () {


}

window.onload = function () {
	//prepare anything we need to
	prepareEventHandlers();
}


var firstHeading = document.createElement("h3");
var firstPara = document.createElement("p");

var h3Text = document.createTextNode("JavaScript event handling");
var p1Text = document.createTextNode("This text has been created dynamically using JavaScript")

document.getElementById("insert").appendChild(firstHeading);
document.getElementById("insert").appendChild(firstPara);
firstHeading.appendChild(h3Text);
firstPara.appendChild(p1Text);

firstHeading.onclick = function () {
alert ("You clicked me");
}

