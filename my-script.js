$(document).ready(function() {
    columnSwitch ();
});

$(window).resize(function() {
	columnSwitch ();
});

function columnSwitch() {
	if ($(window).width() < 767) {
		var selected = $('#sel option:selected').val();
		$(".choice").hide();
		$('.'+selected).show();
	    $('#sel').on('change', function() {
	    	var val = $(this).val(),
            	target = '.' + val;      	
	    	$(".choice").hide();
            $(target).show();      	
	    });
	} else {
		$(".choice").show();
	}
}
