$(document).ready(function(){
	var marked = require('marked'); 
	var block_code = document.getElementById('block-code');
	var translation_result = document.getElementById('translation-result');
	var editor = CodeMirror.fromTextArea(block_code, {
		mode: "markdown",
		lineNumbers : true,
		lineWrapping: true,
		theme: "default",
		extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}

	});

	editor.on('change', function(){
		$('#translation-result').html(marked(editor.getValue()));
	});


});
