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
    console.table(FOTO_AVATAR_PERSONAJE);
    console.table(FOTO_AVATAR_PERSONAJE_ARRAY);
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
        personajeCOM = Math.round(Math.random()*2);
        casillaJugador.attr("src", FOTO_AVATAR_PERSONAJE_ARRAY[personajeCOM]);
    }

    function asignarAvatares(selectedPersonaje){
        asignarAvatarElegido($("#player1 img"), selectedPersonaje);
        asignarAvatarRandom($("#player2 img"));
    }

// Se selecciona al personaje y pasamos al juego
    $(".personaje").on({
        click: function(){
            let personajePlayer;
            // enviar imagen correspondiente a la selección
            // animación de selección
            animarSeleccion();
            asignarAvatares($(this));
        },
        mouseenter: function(){
            positionPersonaje = $(this).position();
            positionName = $(this).next().position();

            //  Agrandar imagen
            $(this).animate({
                height: '100%'
            }, 500,
            function(){
                // Detener animaciones que pudiesen encolarse
                $(this).stop(true,false);
            }
            );
        //  Mover texto con nombre
            $(this).next().children().css({"position" : "absolute"});

            $(this).next().children().animate({
                    top : positionPersonaje.top-30,
                    left : positionPersonaje.left,
                    fontSize: "5rem",}, 500,
                function(){
                    // Detener animaciones que pudiesen encolarse
                    $(this).stop(true,false);
                }
            );
        },
        mouseleave: function(){
        //  Volver al tamaño original
            $(this).animate({
                    height: '90%'
                },500,
                function(){
                    $(this).removeAttr('style');
                }
            );
        //  Regresar texto a Bolivia
            $(this).next().children().animate({
                    top : positionName.top,
                    left : positionName.left,
                    fontSize: "0rem"
                }, 500,
                function(){
                    // Detener animaciones que pudiesen encolarse
                    $(this).stop(true,true);
                    // Remueve atributos para resetear encasillado
                    $(this).removeAttr('style');
                }
            );
        }
    });
});