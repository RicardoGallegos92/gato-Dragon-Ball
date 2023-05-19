$(document).ready(function(){
    let turno = 1;
    let p1=[],
        p2=[];
    let ganador = null,
        perdedor = null;
    const winners = [[1,2,3],[4,5,6],[7,8,9],
                    [1,4,7],[2,5,8],[3,6,9],
                    [1,5,9],[3,5,7]];

    function yagano(){
        if(turno % 2 == 1 ){
//            console.log("Player 1 ganó");
            ganador = $("#player1");
            perdedor = $("#player2");
        }else{
//            console.log("Player 2 ganó");
            ganador = $("#player2");
            perdedor = $("#player1");
        }
        $(ganador).addClass("winner");
        $(perdedor).addClass("oculto");
        for (let i = 0; i < 3; i++){
            $(ganador).animate({height: '100px'}, 300);
            $(ganador).animate({height: '500px'}, 300);
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
    $(".casilla").click(function(){
        switch($(this).text()){
            case 'X':
            case 'O':
                break;
            default:
                if(turno % 2 == 1 ){
                    console.log("Pushea p1");
                    p1.push(parseInt($(this).text()));
                    $(this).text('X');
                    if(p1.length > 2){
                        ganar(p1);
                    }
                }else{
                    console.log("Pushea p2");
                    p2.push(parseInt($(this).text()));
                    $(this).text('O');
                    if(p2.length > 2){
                        ganar(p2);
                    }
                }
                $(this).css("color" , "black");
                //console.log("\nturno: "+turno);
                turno += 1;
        }
        $("#btnReset").text("Reset Game");
        console.log("p1: "+p1);
        console.log("p2: "+p2);
    });
// Clickear Reset
    $("#btnReset").click(function(){
        if (ganador != null){
            $(ganador).stop(true, true);
        }
        if( $(this).text() == "PERSONAJES"){
            cambio();
        }else{
            $(this).text("PERSONAJES");
        }
        let casillas = $(".casilla").toArray();
        for(var i = 0; i < 9; i++){
            casillas[i].innerText = i+1;
            // poner color de letra transparente
            $(".casilla").css("color" , "transparent");
        }
        p1=[];// NO juntar
        p2=[];// NO juntar
        turno = 1;
        $(".nombrePersonaje").removeAttr('style');
        $("#player1").removeClass("winner");
        $("#player2").removeClass("winner");
        $("#player1").css("height" , "100px");
        $("#player2").css("height" , "100px");
        $(".personaje").next().removeAttr('style');
        $(perdedor).removeClass("oculto");
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

