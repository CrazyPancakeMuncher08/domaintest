function Vote(integer) {
    $.ajax({
  url: 'vote.php',
  type: 'GET',
  data: 'vote='+integer,
  success: function(data) {
	//called when successful
	$('#poll').html(data);
  },
  error: function(e) {
	//called when there is an error
	console.log(e.message);
  }
});
}
