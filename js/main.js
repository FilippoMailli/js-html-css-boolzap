$(document).ready(function() {
    $('#invia-messaggio').click(function() {
        var messaggioInput = $('#mex-bar').val();
        $('#mex-bar').val('');
        var messaggio = $('.template .messaggio-inviato').clone();
        messaggio.children('.testo-messaggio').text(messaggioInput);
        messaggio.children('#time-mex').text(x);
        $('.corpo-chat').append(messaggio);
        setTimeout(mexOuput, 1000);
    });


    function mexOuput() {
        var messaggioOut = $('.template-ricevuto .messaggio-ricevuto').clone();
        messaggioOut.children('.testo-ricevuto');
        messaggioOut.children('#time-mex').text(x);
        $('.corpo-chat').append(messaggioOut);
    };

    $('#search-bar').keyup(function(event) {
        var carattereFiltro = $(this).val().toLowerCase();
        $('.testo-amico h3').each(function() {
            if ($(this).text().toLowerCase().includes(carattereFiltro)) {
                $(this).closest(".profilo-amico").show();
            } else {
                $(this).closest(".profilo-amico").hide();
            }
        });
    });

    var d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    var x = hours + "." + minutes;
    if (minutes < 10){
        minutes = "0" + minutes; }
});
