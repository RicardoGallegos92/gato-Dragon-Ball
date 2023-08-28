$(document).ready(function(){
    let positionName, positionPersonaje;
    let personajeCom;
    const FOTO_AVATAR_PERSONAJE = {
        'Goku': './images/player-goku.png',
        'Vegeta': './images/player-vegeta.png',
        'Gohan': './images/player-gohan.png'
    };
    const FOTO_AVATAR_PERSONAJE_ARRAY = Object.values(FOTO_AVATAR_PERSONAJE);
//  --------------------------------------------
//    console.table(FOTO_AVATAR_PERSONAJE);
//    console.table(FOTO_AVATAR_PERSONAJE_ARRAY);
//  --------------------------------------------

    function cambio(){
        $("#personajes").addClass("oculto");
        $("#zonaJuego").removeClass("oculto");
    }
    
    function animarSeleccion(){
        $(".personaje").animate({height: '0', width: '0'},1000,
            function(){
                cambio();
                $(this).removeAttr('style');
            }
        );
        $(".personaje").next().fadeOut();
    }

    function asignarAvatarElegido(casillaJugador, selectedPersonaje){
        casillaJugador.attr("src",
            FOTO_AVATAR_PERSONAJE[selectedPersonaje.attr("alt")]);
    }
    
    function asignarAvatarRandom(casillaJugador) {
        personajeCOM = Math.round(Math.random()*100 % 3);
        casillaJugador.attr("src", FOTO_AVATAR_PERSONAJE_ARRAY[personajeCOM]);
    }

    function asignarAvatares(selectedPersonaje){
        asignarAvatarElegido($("#player1 img"), selectedPersonaje);
        asignarAvatarRandom($("#player2 img"));
    }

// Se selecciona al personaje y pasamos al juego
    $(".personaje").on({
        click: function(){
            // enviar imagen correspondiente a la selección
            // animación de selección
            animarSeleccion();
            asignarAvatares($(this));
        }
    });
});