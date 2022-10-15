const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const reset   = document.getElementById("reset");
const gamezone= document.getElementById("tiktaktoe");

var x='X';
var o='O';
var turno = 1;
var p1=[];
var p2=[];
// Combinaciones victoriosas
var winners = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

// Funciones de marcar casillas
button1.onclick = function(){marca(button1, 1)};
button2.onclick = function(){marca(button2, 2)};
button3.onclick = function(){marca(button3, 3)};
button4.onclick = function(){marca(button4, 4)};
button5.onclick = function(){marca(button5, 5)};
button6.onclick = function(){marca(button6, 6)};
button7.onclick = function(){marca(button7, 7)};
button8.onclick = function(){marca(button8, 8)};
button9.onclick = function(){marca(button9, 9)};

// Reseteamos el contador de turnos y las variables de las jugadas
reset.onclick=function(){
    p1=[];
    p2=[];
    turno=1;
    button1.innerText ='';
    button2.innerText ='';
    button3.innerText ='';
    button4.innerText ='';
    button5.innerText ='';
    button6.innerText ='';
    button7.innerText ='';
    button8.innerText ='';
    button9.innerText ='';
};

// agregamos la nueva casilla marcada al jugador actual
function marca(buttonplayer, casilla){
    switch(buttonplayer.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                buttonplayer.innerText = x;
                p1.push(casilla);
                if(p1.length > 2){
                    ganar(p1);
                }
            }else{
                buttonplayer.innerText = o;
                p2.push(casilla);
                if(p2.length > 2){
                    ganar(p2);
                }
            }
        turno += 1;
    }
};

// Comprobamos si el player actual ganó
function ganar(player){
    player.sort();
    for(i=0; i<8; i+=1){
        if(player.includes(winners[i][0])){
            if(player.includes(winners[i][1])){
                if(player.includes(winners[i][2])){
                    yagano();
                }
            }
        }
    }
};

// cambiamos la zona de juego completa por el texto de anuncio de ganador
function yagano(){
    if(turno % 2 == 1 ){
        gamezone.innerHTML="Player 1 ganó";
    }else{
        gamezone.innerHTML="Player 2 ganó";
    }
};