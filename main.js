function Vote(integer) {
    var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      alert(this.responseText)
      //document.getElementById("poll").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","vote.php?vote="+integer,true);
  xmlhttp.send();
}
