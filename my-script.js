$(document).ready(function() {
    columnSwitch ();
});

$(window).resize(function() {
	columnSwitch ();
});

function columnSwitch() {
	if ($(window).width() < 767) {
	    $('.choice').hide();
	    $('.one').show();
	    $('#sel').on('change', function() {
	        var val = $(this).val(),
	            target = '.' + val;
	        $('.choice').hide();
	        $(target).show();
	    });
	} else {
		$('.choice').show();
	}
}
