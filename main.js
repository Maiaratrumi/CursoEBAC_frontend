$(document).ready(function() {
    $('form').on('submit', function(event) {
    event.preventDefault();
    const newText = $('#new-text').val();
    if(newText) {
        $('.tasks').append('<li>' + newText + '</li>');
        $('#new-text').val('');
    }
    });

    $('.tasks').on('click', 'li', function() {
    $(this).toggleClass('strike-through');
    });

    $(document).ready(function() {
        $('#remove-tasks').on('click', function() {
        $('.tasks').empty();
        });
    });  
});
