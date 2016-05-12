$(document).ready(function(){
 

var editor = CodeMirror.fromTextArea(document.getElementById('block-code'), {
	mode: "markdown",
	lineNumbers : true,
	lineWrapping: true,
	theme: "default",
	extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}

	});

$(".push").on('click', function(){
$(".translation-result").append(editor.getValue());
});



});
