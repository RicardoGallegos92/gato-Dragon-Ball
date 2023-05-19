$(document).ready(function(){
    let positionName, positionPersonaje;
    let personajeCom;

    function cambio(){
        $("#personajes").addClass("oculto");
        $("#zonaJuego").removeClass("oculto");
    }
    
    function seleccionado(){
        $(".personaje").animate({height: '0', width: '0'},1000,
            function(){
                cambio();
                $(this).removeAttr('style');
            }
        );
        $(".personaje").next().fadeOut();
    }

    function selectPersonajeCom(personajePlayer){
        do{
            personajeCom = Math.round((Math.random()*2)+1);
            console.log(personajeCom);
        }while(personajePlayer == personajeCom);
        return personajeCom;
    }

// Se selecciona al personaje y pasamos al juego
    $(".personaje").on({
        click: function(){
            let personajePlayer;
            // enviar imagen correspondiente a la selección
            switch($(this).attr("alt")){
                case "Goku":
                    $("#player1 img").attr("src", "./images/player-goku.png");
                    personajePlayer = 1;
                    break;
                case "Vegeta":
                    $("#player1 img").attr("src", "./images/player-vegeta.png");
                    personajePlayer = 2;
                    break;
                case "Gohan":
                    $("#player1 img").attr("src", "./images/player-gohan.png");
                    personajePlayer = 3;
                    break;
            }
            switch (selectPersonajeCom(personajePlayer)){
                case 1:
                    $("#player2 img").attr("src", "./images/player-goku.png");
                    break;
                case 2:
                    $("#player2 img").attr("src", "./images/player-vegeta.png");
                    break;
                case 3:
                    $("#player2 img").attr("src", "./images/player-gohan.png");
                    break;
            }
            // animación de selección
            seleccionado();
        },
        mouseenter: function(){
            positionPersonaje = $(this).position();
            positionName = $(this).next().position();

            $(this).next().children()
                .css({"position" : "absolute"});

            $(this).animate({height: '100%'}, 500, "swing",
                    function(){
                        $(this).stop(true,false); // Detener animaciones que pudiesen encolarse
                    }
            );

            $(this).next().children()
                .animate({top : positionPersonaje.top-30,
                        left : positionPersonaje.left,
                        fontSize: "5rem",}, 500,
                function(){
                    $(this).stop(true,false); // Detener animaciones que pudiesen encolarse
                }
            );
        },
        mouseleave: function(){
            
            $(this).animate({height: '90%'},500,
                    function(){
                        $(this).removeAttr('style');
                    }
            );
            
            $(this).next().children()
                .animate({top : positionName.top,
                        left : positionName.left,
                        fontSize: "0rem"}, 500,
                    function(){
                        $(this).stop(true,true); // Detener animaciones que pudiesen encolarse
                        $(this).removeAttr('style'); // Remueve atributos para resetear encasillado
                    }
            );
        }
    });
});