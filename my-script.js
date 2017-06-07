

$(document).ready(function (){
	$('.choice').hide();
	$('.one').show();
	$('#sel').on('change', function () {
	
  	var val = $(this).val(),
    target = '.' + val;
	$('.choice').hide();
	$(target).show();
	});
});