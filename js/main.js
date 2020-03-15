$(document).ready(function() {

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

    // function creaMessaggio(testoMessaggio, inviatoRicevuto) {
    //     var templateMsg = $('.template .messaggio').clone();
    //     templateMsg.children('.testo-messaggio').text(testoMessaggio);
    //     templateMsg.children('#time-mex').text(x);
    //     templateMsg.addClass(inviatoRicevuto);
    //     $('.corpo-chat.active').append(templateMsg);
    // }

    function scroll() {
        var pixelScroll = $('.corpo-chat').height();
        $('.corpo-chat').scrollTop(pixelScroll);
    }

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
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var x = hours + "." + minutes;


    $('.profilo-amico').click(function(){
        $('.profilo-amico').removeClass('active');
        $('.profilo-amico').css('background-color', 'white');
        $(this).addClass('active');
        var utenteData = $(this).data('conversazione');
        $('.profilo-amico[data-conversazione="' + utenteData + '"]').css('background-color', '#ededed');
        var chatCorrispondente = $('.corpo-chat[data-conversazione="' + utenteData + '"]');
        $('.corpo-chat').removeClass('active');
        chatCorrispondente.addClass('active');
        var nomeContatto = $(this).find('.contact-name').text();
        $('.nome-contatto-right').text(nomeContatto);
        var srcContatto = $(this).find('.faccia-amico').children('img').attr('src');
        $('#faccia-attiva').attr('src', srcContatto);
    });

    $('.corpo-chat').on('click', '#menu-tendina', function() {
        $('.info-messaggio').not(this).children('#menu-tendina').removeClass('displayflex');
        $(this).children('.info-messaggio').toggleClass('displayflex');
    });

    $(document).on('click', '#cancella', function() {
        $(this).closest('.messaggio-ricevuto').remove();
    });

    $(document).on('click', '#cancella', function() {
        $(this).closest('.messaggio-inviato').remove();
    });



    // BoolzApp con Handlebars
    // # RICORDA di linkare la libreria di handlebars
    // #2 Costruiamo il template in HTML
    // #Scelgo nel template dove inserire le variabili {{}}

    var source = $('#messaggio-template').html();       //Clono il template messaggio
    var template = Handlebars.compile(source);          //funzione standard di handlebars per il template clonato

    function creaMessaggio(testoMexaggio, inviatoRicevuto) {
        var datiMessaggio = {
            testoMessaggio: testoMexaggio,
            direzione: inviatoRicevuto
        };

        var templateMessaggio = template(datiMessaggio);
        $('.corpo-chat.active').append(templateMessaggio);
    }











});
//
