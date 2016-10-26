
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html=
	"<html><body>"
	+ "<div id='content'>"
	+ content
	+ '</div>'
        + '<p><h3>Other Examples</h3></p>'
	+ '<ul>'
	+ ' <li>'
        + '  Using a global counter <a href="examples/count.js">examples/count.js</a> '
        + '  <a href="https://github.com/openhie/dhis-ssa-hello-world/blob/master/ssa/examples/count.js">(Source)</a>'
        + '   </li>'
	+ ' <li>'
	+ '  Extracting DHIS2 System info <a href="examples/systemInfo.js">examples/sytemInfo.js</a>'
	+ '  <a href="https://github.com/openhie/dhis-ssa-hello-world/blob/master/ssa/examples/systemInfo.js">(Source)</a>'
	+ '  </li>'
	+ '</ul>'
        + '</p>'
	+ '</body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}


out = "Hello World";
display(out);
