$(document).ready(function(){
    const TEXTO_ORIGINAL_BOTON = "PERSONAJES";
    let turno = 1;
    let jugadasPlayer1=[],
        jugadasPlayer2=[];
    let ganador = "",
        perdedor = "";
    const COMBINACION_GANADORA = [[1,2,3],[4,5,6],[7,8,9],
                    [1,4,7],[2,5,8],[3,6,9],
                    [1,5,9],[3,5,7]];

    function siGano(){
        if(turno % 2 == 1 ){
//            console.log("Player 1 ganó");
            ganador = "#player1";
            perdedor = "#player2";
        }else{
//            console.log("Player 2 ganó");
            ganador = "#player2";
            perdedor = "#player1";
        }
        $(ganador).addClass("winner");
        $(perdedor).addClass("oculto");
        for (let i = 0; i < 3; i++){
            $(ganador).children().animate({height: '20%'}, 300);
            $(ganador).children().animate({height: '100%'}, 300);
        }
    };



    function ganar(listaJugadas){
        listaJugadas.sort();
        for(let i=0; i<8; i+=1){
            if(listaJugadas.includes(COMBINACION_GANADORA[i][0])){
                if(listaJugadas.includes(COMBINACION_GANADORA[i][1])){
                    if(listaJugadas.includes(COMBINACION_GANADORA[i][2])){
                        siGano();
//                        console.log("Alguien ya ganó");
                        break;
                    }
                }
            }
        }
    };
// Hacer que juegue de vuelta
    function comPlayer(){
        // primera jugada al azar if(turno < 3)
        // luego se usa la discriminación de ganar()
        // *para elegir una de las posibles jugadas
        // *según las cantidad de coincidencias
        // evaluar si la casilla está disponible
        // *-repetir proceso
        // en paralelo revisar las posibilidades
        // *de ganar que tiene el jugador y priorizar bloquearlo
    }

    function cambio(){
        $("#personajes").removeClass("oculto");
        $("#zonaJuego").addClass("oculto");
    }


// aquí marcamos las jugadas
    $(".casilla").on({
        mouseenter: function(){
            $(this).stop(false, true);
            if ( $(this).text() != 'X' && $(this).text() != 'O' ){
//                $(this).css('background-color',"#f0f0f080");
                $(this).css('background-color',"rgb(240,240,240)");
                $(this).animate({
                    "border-width" : '0'
                }, 250);
                }
            },
        mouseleave: function(){
            $(this).stop(false, true);
            $(this).animate({
                "border-width" : '4'
            }, 250, function(){
                        $(this).removeAttr('style');
                        if ( $(this).text() == 'X'
                                || $(this).text() == 'O' ){
                            $(this).css("color" , "black");
                            $(this).css('background-color',"#f0f0f0");
                        }
                    }
            );
        },
        click: function(){
            $(this).animate({
                "border-width" : '4'
            }, 250, function(){
                        $(this).removeAttr('style');
                        if ( $(this).text() == 'X'
                                || $(this).text() == 'O' ){
                            $(this).css("color" , "black");
                            $(this).css('background-color',"#f0f0f0");
                        }
                    }
            );
            switch($(this).text()){
                case 'X':
                case 'O':
                    break;
                default:
                    if(turno % 2 == 1 ){
//                        console.log("Pushea jugadasPlayer1");
                        jugadasPlayer1.push(parseInt($(this).text()));
                        $(this).text('X');
                        if(jugadasPlayer1.length > 2){
                            ganar(jugadasPlayer1);
                        }
                    }else{
//                        console.log("Pushea jugadasPlayer2");
                        jugadasPlayer2.push(parseInt($(this).text()));
                        $(this).text('O');
                        if(jugadasPlayer2.length > 2){
                            ganar(jugadasPlayer2);
                        }
                    }
                    $(this).css("color" , "black");
                    //console.log("\nturno: "+turno);
//                    console.log(turno);
                    if (turno == 1){
                        $("#btnReset").text("Reset Game");
                    }
                    if (turno == 9 && ganador == null){
                        // empate
//                        console.log("Empatados");
                    }
                    ++turno;
            }
//            console.log("jugadasPlayer1: "+jugadasPlayer1);
//            console.log("jugadasPlayer2: "+jugadasPlayer2);
        }
    });
// Clickear Reset
    $("#btnReset").click(function(){
        if (ganador != ""){
            $(ganador).children().stop(true,true);
        }

        $(perdedor).removeClass("oculto");
        if( $(this).text() == TEXTO_ORIGINAL_BOTON){
            cambio();
        }else{
            $(this).text(TEXTO_ORIGINAL_BOTON);
        }

        let casillas = $(".casilla").toArray();
        for(var i = 0; i < 9; i++){
            casillas[i].innerText = i+1;
            // poner color de letra transparente
//            $(".casilla").css("color" , "transparent");
            $(".casilla").removeAttr('style');
        }

        $("#player1").removeClass("winner");
        $("#player1").children().removeAttr('style');
        $("#player1").removeAttr('style');
//        $("#player1").css("height" , "100%");
        $("#player2").removeClass("winner");
        $("#player2").children().removeAttr('style');
        $("#player2").removeAttr('style');
//        $("#player2").css("height" , "100%");
        $(".personaje").next().removeAttr('style');
        
        ganador = "";
        perdedor = "";
        jugadasPlayer1=[];// NO juntar
        jugadasPlayer2=[];// NO juntar
        turno = 1;
    });
    
// Animacion Footer
    $(".footer").on({
        mouseenter: function(){
            $(this).animate({height: '10vh'}, 750);
            $(".disclaimer").animate({fontSize:'3rem'}, 750,
                function(){
                    setTimeout(function(){
                        $(".footer").animate({height: '4vh'}, 750);
                        $(".disclaimer").animate({fontSize:'0rem'}, 750);
                        $(this).stop(true,true); // Detener animaciones que pudiesen encolarse
                    }
                    ,1500);
                }
            );
        }
    });
});

