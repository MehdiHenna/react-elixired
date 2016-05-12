$(document).ready(function(){
var marked = require('marked'); 

var editor = CodeMirror.fromTextArea(document.getElementById('block-code'), {
	mode: "markdown",
	lineNumbers : true,
	lineWrapping: true,
	theme: "default",
	extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}

	});

$(".push").on('click', function(){

var tanslation = marked(editor.getValue());

$(".translation-result").append(tanslation);
});



});
