
//the (document).ready function is executed only
//once the page is fully loaded (instead of window.onload)
$(document).ready(function() {
	$('#name').focus();

	$('#contactForm').submit(function () {
		var abort = false;
		$("div.error").remove();
    	$(":input[required]").each(function() {
    		if ($(this).val()==="") {
    		   $(this).after('<div class="error">This is a required field</div>');
    		   abort=true;
    		}
    	}); //go through each required value
    	if (abort) { //if abort is true
    		return false; 
    	} else {
    		return true; //what do these feed into?
    	}
    }) //end su bmit
}); //end ready

//to set css: $("h1").css("color, "red");

//FOCUS refers to the event when the user clicks 
//into a field i.e. it has become their focus.

//This line selects the field and 
//assigns the function to the focus event
$('#contactForm :input').focus(function() {
	//This creates a variable, field, that stores
	//a reference to the jQuery selection
	//'this' refers to the currently selected element.
	var field = $(this);
	//this ensures the field is only set to empty
	//if it is displaying the default value when it
	//comes into focus.
	if (field.val()==field.prop('defaultValue')) {
	//This line erases the field & sets it to empty
		field.val('');
	}
});

$('#name').blur(function() {
	var field = $(this);
	if (field.val()==('')) {
		field.val('name');
	}
});

$('#email').blur(function() {
	var field = $(this);
	if (field.val()==('')) {
		field.val('email');
	}
});
