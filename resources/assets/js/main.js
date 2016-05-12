$(document).ready(function(){
var marked = require('marked'); 

var editor = CodeMirror.fromTextArea(document.getElementById('block-code'), {
	mode: "markdown",
	lineNumbers : true,
	lineWrapping: true,
	theme: "default",
	extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}

	});

$("#block-code").keyup(function(){
	var text = $(this).val();
	var translate = marked(text);
	$(".translation-result").append(translate);
});
});
