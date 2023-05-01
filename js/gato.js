$(document).ready(function(){
    let turno = 1;
    let p1=[];
    let p2=[];
    const winners = [[1,2,3],[4,5,6],[7,8,9],
                    [1,4,7],[2,5,8],[3,6,9],
                    [1,5,9],[3,5,7]];

    function yagano(){
        let ganador;
        if(turno % 2 == 1 ){
//            console.log("Player 1 ganó");
            ganador = $("#player1");
        }else{
//            console.log("Player 2 ganó");
            ganador = $("#player2");
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
        console.log("p1: "+p1);
        console.log("p2: "+p2);
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
            $(this).animate({height: '10vh'}, 2000);
            $(".disclaimer").animate({fontSize:'3rem'}, 2000);
        },
          click: function(){
            $(this).animate({height: '4vh'}, 800);
            $(".disclaimer").animate({fontSize:'0rem'}, 1000);
        }
    });
});