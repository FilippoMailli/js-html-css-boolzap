$(document).ready(function() {
//     $('#invia-messaggio').click(function() {
//         var messaggioInput = $('#mex-bar').val();
//         $('#mex-bar').val('');
//         var messaggio = $('.template .messaggio-inviato').clone();
//         messaggio.children('.testo-messaggio').text(messaggioInput);
//         messaggio.children('#time-mex').text(x);
//         $('.corpo-chat').append(messaggio);
//         setTimeout(mexOuput, 1000);
//     });

    $('#mex-bar').focus(function() {
        $('#invia-messaggio').toggleClass('fa fa-microphone fas fa-paper-plane');
    }).blur(function () {
        $('#invia-messaggio').toggleClass('fa fa-microphone fas fa-paper-plane');
    });

    $('#invia-messaggio').click(function() {
        invioMessaggio();
    });

    $('#mex-bar').keypress(function(event) {
        if(event.keyCode == 13) {
            invioMessaggio();
        }
    });

    function invioMessaggio() {
        var messaggioInput = $('#mex-bar').val();
        if(messaggioInput.trim().length > 0) {
            $('#mex-bar').val('');
            creaMessaggio(messaggioInput, 'messaggio-inviato');
            scroll();
            setTimeout(function() {
                creaMessaggio('ok', 'messaggio-ricevuto');
                scroll();
            }, 1000);
        }
    }

    function creaMessaggio(testoMessaggio, inviatoRicevuto) {
        var templateMsg = $('.template .messaggio').clone();
        templateMsg.children('.testo-messaggio').text(testoMessaggio);
        templateMsg.children('#time-mex').text(x);
        templateMsg.addClass(inviatoRicevuto);
        $('.corpo-chat').append(templateMsg);
    }

    function scroll() {
        var pixelScroll = $('.corpo-chat').height();
        $('.corpo-chat').scrollTop(pixelScroll);
    }

//
//
//     function mexOuput() {
//         var messaggioOut = $('.template-ricevuto .messaggio-ricevuto').clone();
//         messaggioOut.children('.testo-ricevuto');
//         messaggioOut.children('#time-mex').text(x);
//         $('.corpo-chat').append(messaggioOut);
//     };
//
//     $('#search-bar').keyup(function(event) {
//         var carattereFiltro = $(this).val().toLowerCase();
//         $('.testo-amico h3').each(function() {
//             if ($(this).text().toLowerCase().includes(carattereFiltro)) {
//                 $(this).closest(".profilo-amico").show();
//             } else {
//                 $(this).closest(".profilo-amico").hide();
//             }
//         });
//     });
//
    var d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var x = hours + "." + minutes;

});
