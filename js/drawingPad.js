
/*If we missspell something in a string in Javascript then then the 
 * interpreter will still read the code as it will see it's a string
 * and assume it's correct, but the code won't execute due to 
 * incorrect spelling. However, if we spell a non-string incorrectly
 * then it won't run. Therefore, it is good practice to subsistute
 * strings for non-strings as then if we make a typo the interpreter
 * will no run the code and we will know immediately that there is a 
 * mistake and be able to detect more quickly where precisely the 
 * error is.
 */
var editorID = "editor"; 
var containerID = "sketch";
var sketchChanged = false;
var sketch = null;

var editor = ace.edit(editorID);
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.setOptions({maxLines: 80});

// Passing in a function as an argument by creating a named function
function onEditorChange (object) {
	console.log(object);
	sketchChanged = true;
}
editor.on ("change", onEditorChange);

// Passing in a function as an argument as an anonymous function
window.setInterval(function (){
	if (sketchChanged) {
		applyProcessingCodeCanvas();
		sketchChanged = false;
	}
}, 1500);


function applyProcessingCodeCanvas () {
	var sourceCode = editor.getValue();
	var compiledCode = Processing.compile(sourceCode);
	var container = document.getElementById(containerID);
	var canvas = document.createElement("canvas");
	while (container.firstChild) {
  		container.removeChild(container.firstChild);
	}
	container.appendChild(canvas);
	sketch = new Processing (canvas, compiledCode);	
}
applyProcessingCodeCanvas();
