$(document).ready(function () {

	$("select").change(function () {
		$("input[type=text]").val($(this).val());
	});

	$('input[type="radio"]').on('click change', function (e) {
		if (this.value == 'yes') {
			$("#us-citizen").show();
		}
		else {
			$("#us-citizen").hide();
		}
	});

	$("#birthdate").change(function () {
		var today = new Date();
		var birthDate = new Date($('#birthdate').val());
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		if (age < 18) {
			$('#age-notice').show();
		}
		else {
			$("#age-notice").hide();
		}
	});

	$('#us-citizen-0').click(function() {
			$(this).addClass('isClicked');
			$('#us-citizen-1').removeClass('isClicked');
	});

	$('#us-citizen-1').click(function() {
			$(this).addClass('isClicked');
			$('#us-citizen-0').removeClass('isClicked');
	});

});