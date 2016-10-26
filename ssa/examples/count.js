
function display(content) {
    dhisScriptContext.httpResponse.setContentType("text/html");
    var html="<html><body><div>";
    html += content;
    html +=  '</div></body></html>';
    dhisScriptContext.out.write(html);  // Global variable!
}

var global_count;
if (isNaN(global_count)) {
    global_count =0;
} else {
    global_count++;
}
out = "hello world (user session count: " + global_count + " ) ";
display(out);
