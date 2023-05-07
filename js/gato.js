$(document).ready(function(){
    let positionName, positionPersonaje;
    let turno = 1;
    let p1=[];
    let p2=[];
    const winners = [[1,2,3],[4,5,6],[7,8,9],
                    [1,4,7],[2,5,8],[3,6,9],
                    [1,5,9],[3,5,7]];

    function yagano(){
        let ganador, perdedor;
        if(turno % 2 == 1 ){
//            console.log("Player 1 ganó");
            ganador = $("#player1");
            perdedor = $("#player2");
        }else{
//            console.log("Player 2 ganó");
            ganador = $("#player2");
            perdedor = $("#player1");
        }
        $(ganador).toggleClass("winner");
        for (let i = 0; i < 3; i++){
            $(ganador).animate({height: '100px'}, "slow");
            $(ganador).animate({height: '500px'}, "slow");
        }
    };

    function ganar(player){
        player.sort();
        for(let i=0; i<8; i+=1){
            if(player.includes(winners[i][0])){
                if(player.includes(winners[i][1])){
                    if(player.includes(winners[i][2])){
                        yagano();
                    }
                }
            }
        }
    };
// Hacer que juegue de vuelta
    function comPlayer(){
        // primera jugada al azar
        // luego se usa la discriminación de ganar()
        //* para elegir una de las posibles jugadas
        // evaluar si la casilla está disponible
        // *-repetir proceso
        // en paralelo revisar las posibilidades
        //* de ganar que tiene el jugador y priorizar bloquearlo
    }

    function cambio(){
        $("#personajes").toggleClass("oculto");
        $("#zonaJuego").toggleClass("oculto");
    }
// Se selecciona al personaje y pasamos al juego
    $(".personaje").on({
        click: function(){
            // animación de selección
            // enviar imagen correspondiente a la selección
            cambio();
        },
        mouseenter: function(){
            positionPersonaje = $(this).position();
            positionName = $(this).next().position();

            $(this).next().children().css({"color" : "yellow",
                            "position" : "absolute",
                            "-webkit-text-stroke-color" : "rgb(0, 0, 0)",
                            "-webkit-text-stroke-width" : "1.75px"});
            
            $(this).next().children().animate({top : positionPersonaje.top-50,
                                                left : positionPersonaje.left,
                                                fontSize: "5rem",}, 500, "swing");
        },
        mouseleave: function(){
            $(this).next().children().animate({top : positionName.top,
                                                left : positionName.left,
                                                fontSize: "0rem"}, 500, "swing",
                                            function(){
                                                $(this).removeAttr('style');
                                            }
            );
            //detener toda animación !!!!!!!!
        }
    });
// aquí marcamos las jugadas
    $(".casilla").click(function(){
        switch($(this).text()){
            case 'X':
            case 'O':
                break;
            default:
                if(turno % 2 == 1 ){
                    p1.push(parseInt($(this).text()));
                    $(this).text('X');
                    if(p1.length > 2){
                        ganar(p1);
                    }
                }else{
                    p2.push(parseInt($(this).text()));
                    $(this).text('O');
                    if(p2.length > 2){
                        ganar(p2);
                    }
                }
                $(this).css("color" , "black");
            turno += 1;
        }
        $("#btnReset").text("Reset Game");
//        console.log("p1: "+p1);
//        console.log("p2: "+p2);
    });
// Clickear Reset
    $("#btnReset").click(function(){

        if( $("#btnReset").text() == "PERSONAJES"){
            cambio();
        }else{
            $("#btnReset").text("PERSONAJES");
        }
        let casillas = $(".casilla").toArray();
        for(var i = 0; i < 9; i++){
            casillas[i].innerText = i+1;
            // poner color de letra transparente
            $(".casilla").css("color" , "transparent");
        }
        p1=[];
        p2=[];
        turno = 1;
        $("#player1").removeClass("winner");
        $("#player2").removeClass("winner");
        $("#player1").css("height" , "100px");
        $("#player2").css("height" , "100px");
        
    });
// Animacion Footer
    $("footer").on({
        mouseenter: function(){
            $(this).animate({height: '10vh'}, 1000);
            $(".disclaimer").animate({fontSize:'3rem'}, 1000,
                function(){
                    setTimeout(function(){
                        $("footer").animate({height: '4vh'}, 800);
                        $(".disclaimer").animate({fontSize:'0rem'}, 1000);
                    }
                    ,3000);
                }
            );
        }
    });
});