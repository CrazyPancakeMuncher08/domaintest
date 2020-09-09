function SendPHP() {
    var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      alert(xmlhttp.responseText);
    }
  }
  xmlhttp.open("GET","testdata.php",true);
  xmlhttp.send();
}
