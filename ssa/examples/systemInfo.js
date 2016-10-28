
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html="<html><body><div><h2>System Info</h2><pre>";
    html += content;
    html +=  '</pre></div></body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}

sysInfo = new SystemInfo(dhisScriptContext);
out = JSON.stringify(sysInfo.getData("json"),null,'\t');
display(out);


