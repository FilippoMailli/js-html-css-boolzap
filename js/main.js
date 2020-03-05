$(document).ready(function() {
    $('#invia-messaggio').click(function() {
        var messaggioInput = $('#mex-bar').val();
        $('#mex-bar').val('');
        var messaggio = $('.template .messaggio-inviato').clone();
        messaggio.children('.testo-messaggio').text(messaggioInput);
        messaggio.children('#time-mex').text(x);
        $('.corpo-chat').append(messaggio);

    });

    var d = new Date();
    var x = d.getHours() + "." + d.getMinutes();

});
