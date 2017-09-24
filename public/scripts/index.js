$('#us-citizen-0').click(function() {
    $(this).addClass('isClicked');
    $('#us-citizen-1').removeClass('isClicked');
});

$('#us-citizen-1').click(function() {
    $(this).addClass('isClicked');
    $('#us-citizen-0').removeClass('isClicked');
});