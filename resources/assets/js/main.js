$(document).ready(function(){
	var marked = require('marked'); 
	var block_code = document.getElementById('block-code');
	// insert codeMirror dans le textArea block-code
	var editor = CodeMirror.fromTextArea(block_code, {
		mode: "markdown",
		lineNumbers : true,
		lineWrapping: true,
		theme: "default",
		extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
	});
	//  traduit le code de textArea et fait une previsualiton automatiquement lorsque l'utilisateur tape son code 
	editor.on('change', function(){
		$('#translation-result').html(marked(editor.getValue()));
	});
});
