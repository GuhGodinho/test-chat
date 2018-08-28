$(document).ready(function(){
	$('button').click(function(){
	  let message = $('textarea').val();
	  let old = $('#content').html();
	  $('#content').html(old +'<p>'+ message + '</p>');
	});
});