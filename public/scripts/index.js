$(document).ready(function () {
	$('#purpose').on('change', function () {
		if (this.value == '1') {
			$("#business").show();
		}
		else {
			$("#business").hide();
		}
	});

	$("#birthdate").change(function () {
		var today = new Date();
		var birthDate = new Date($('#dob').val());
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return $('#age').html(age + ' years old');
	});

});