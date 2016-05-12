$(document).ready(function(){


var editor = CodeMirror.fromTextArea(document.getElementById('container'), {
	mode: "markdown",
	lineNumbers : true,
	lineWrapping: true,
	theme: "default",
	extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}

	});

$(".push").on('click', function(){
$(".result").append(editor.getValue());
});



});
