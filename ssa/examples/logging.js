
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html="<html><body><div><h2>Logging Example</h2><p>";
    html += content;
    html +=  '</p></div></body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}

dhisScriptContext.logInfo("Saying hello in the log");
dhisScriptContext.logInfo(JSON.stringify({'some':'data','structure':[]},null,"\t"));
dhisScriptContext.logInfo("Script Execution context = " + dhisScriptContext);
display("sent data to log");
