Template.home.onRendered(function(){
  	window.scrollTo(0, 0);
	$('#today').DataTable({
		"filter":   false,
		"ordering": false,
		"info":     false,
		"pageLength": 10
	});
	$("#today_wrapper .dataTables_length").css("display","none");
	$('#yesterday').DataTable({
		"length":   false,
		"filter":   false,
		"autoWidth": false,
		"info":     false
	});
	$("#yesterday_wrapper .dataTables_length").css("display","none");
	$('#top').DataTable({
		"filter":   false,
		"paging":   false,
		"autoWidth": false,
		"info":     false
	});
});


Template.home.helpers({
	today: function () {
		return Date.now();
	}
});

Template.registerHelper('compare', function(v1, v2) {
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 === v2;
  }
});

