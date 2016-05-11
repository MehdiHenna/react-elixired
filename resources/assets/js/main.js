$(document).ready(function(){


var editor = CodeMirror.fromTextArea(document.getElementById('container'), {
	mode: "markdown",
	matchBracket: true,
	lineNumbers : true

	});

$(".push").on('click', function(){
$(".result").append(editor.getValue());
});

});
