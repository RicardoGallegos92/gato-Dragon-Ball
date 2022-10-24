///Sonido-----------------------------------------------------------
var selectsound = document.getElementById("selectsound");
selectsound.volume= 0.2;
//------------cambio de vista---------------------------------------
var banner = document.querySelector("banner");
var gato = document.querySelector("gato");
//------------------------------------------------------------------
const gokusound=document.querySelector("[alt=Goku]");
const vegsound=document.querySelector("[alt=Vegeta]");
const gohsound=document.querySelector("[alt=Gohan]");
//zona de variables para players------------------------------------
const player_one = document.querySelector("player1");
const player_two = document.querySelector("player2");
//imagenes----------------------------------------------------------
const player_goku=document.createElement('img');
player_goku.setAttribute('src','./images/player-goku.png');

const player_vegeta = document.createElement('img');
player_vegeta.setAttribute('src','./images/player-vegeta.png');

const player_gohan  = document.createElement('img');
player_gohan.setAttribute('src','./images/player-gohan.png');
//---------inserta la selección--------------------------------------
function ins_jugador(playerX, pers_selected, pers_nombre, izq_der){
    banner.style.display = "none" ;
    gato.style.display = "block";
    gamezone.classList.remove('ocultar');
    selectsound.play();
    playerX.innerHTML="";
    pers_selected.setAttribute('width', '100px');
    pers_selected.setAttribute('height', '100px');
    pers_selected.style.transform= "scaleX("+izq_der+")";
    pers_selected.style.borderRadius = "50%";
    playerX.appendChild(pers_selected);
    playerX.innerHTML+='<div>'+pers_nombre+'</div>';
};
//selección de player 1 y 2 *****************************************
//Eliges a Goku------------------------------------------------------
gokusound.onclick=function(){
    //setTimeout("ins_jugador(player_one, player_goku, 'Goku', 1)", 1000);
    ins_jugador(player_one, player_goku, 'Goku', 1);
    if((Math.floor(Math.random()*10))%2 == 0){
        ins_jugador(player_two, player_vegeta, 'Vegeta', -1);
    }
    else{
        ins_jugador(player_two, player_gohan, 'Gohan', -1);
    }
};
//Eliges a Vegeta-----------------------------------------------------
vegsound.onclick=function(){
    ins_jugador(player_one, player_vegeta, 'Vegeta',1);
    if((Math.floor(Math.random()*10))%2 == 0){
        ins_jugador(player_two, player_goku, 'Goku',-1);
    }
    else{
        ins_jugador(player_two, player_gohan, 'Gohan',-1);
    }
};
//Eliges a Gohan------------------------------------------------------
gohsound.onclick=function(){
    ins_jugador(player_one, player_gohan, 'Gohan',1);
    if((Math.floor(Math.random()*10))%2 == 0){
        ins_jugador(player_two, player_goku, 'Goku',-1);
    }
    else{
        ins_jugador(player_two, player_vegeta, 'Vegeta',-1);
    }
};
