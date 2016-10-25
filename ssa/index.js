
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html="<html><body><div>";
    html += content;
    html +=  '</div></body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}


out = "hello world";
display(out);
