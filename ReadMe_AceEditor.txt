to add an editor to an html page, add a div:

		<div id="editor">

		</div>

Then at the bottom put this script:
<script type="text/javascript">
	{% include ace_errorSuccess.js %}
	
    $.ajax("../js/NameOfMyJSfile.js", {
      error: handleError,
      success: handleSuccess
    });
  });
 </script> 

 **Note that you'll need to change NameOfMyJSfile.js to the name of the js file you want to display inside the Ace editor.

 **Note that the JS code will need to actually work in order for it to display. 
