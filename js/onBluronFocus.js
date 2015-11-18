var emailField = document.getElementById("email");

/*Then we just need to add two event handlers
 *In the first function it's saying, if the 
 *value of the text field is "your email" then we're going to set it to 
 *blank, i.e. "" so that someone can type in an e-mail. Note that we use .value to grab the contents of that text field, not innerHTML. That's the same for nearly all form fields.
 */
emailField.onfocus = function() {
	if (emailField.value === "your email") 		{ 
		emailField.value = "";
	}
};

/*However, when they leave and we kick off 
 *the onblur event and they've left the value blank i.e. "", then we're going to
 *change it to "your email".
 */
emailField.onblur = function() {
	if (emailField.value === "") { 
		  emailField.value = "your email";
	}
};