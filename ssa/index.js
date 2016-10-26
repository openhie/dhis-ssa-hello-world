
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html=
	"<html><body>"
	+ "<div id='content'>"
	+ content
	+ '</div>'
	+ '<ul>'
	+ ' <li><a href="examples/count.js">examples/count.js</a></li>'
	+ '</ul>'
	+ '</body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}


out = "hello world";
display(out);
