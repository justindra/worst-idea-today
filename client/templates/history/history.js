Template.history.onRendered(function(){
  	window.scrollTo(0, 0);
	$('#all').DataTable( {
	  "pageLength": 50
	} );
});


