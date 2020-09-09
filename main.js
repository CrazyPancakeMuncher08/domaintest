function SendPHP() {
    $.get("test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
}
