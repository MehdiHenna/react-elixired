$(document).ready(function(){

var container = $('.container');
var editor = CodeMirror(container, {
	mode: "markdown",
	lineNumbers : true
	});
editor.getValue();
});
