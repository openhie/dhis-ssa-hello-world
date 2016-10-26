
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html="<html><body><div><h2>Logging Example</h2><p>";
    html += content;
    html +=  '</p></div></body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}

dhisScriptContext.logInfo("Saying hello in the log");
dhisScriptContext.logInfo({'some':'data','structure':[]});
display("sent data to log");
