$(function(){
		var editor = ace.edit("editor");
		editor.setTheme("ace/theme/monokai");
		editor.getSession().setMode("ace/mode/javascript");
		editor.setOptions({maxLines: 40});
		function handleError(jqXHR, textStatus, errorThrown){
      alert (textStatus + ' ' + errorThrown);
    }

    function handleSuccess(data, textStatus, jqXHR){
      console.log (data, textStatus, jqXHR);
      editor.setValue(data);
    }