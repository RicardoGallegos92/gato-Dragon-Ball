///Sonido-----------------------------------------------------------
var selectsound = document.getElementById("selectsound");
selectsound.volume= 0.2;
//------------cambio dee vista--------------------------------------
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
player_goku.setAttribute('width', '100px');
player_goku.setAttribute('height', '100px');
const player_vegeta = document.createElement('img');
player_vegeta.setAttribute('src','./images/player-vegeta.png');
player_vegeta.setAttribute('width', '100px');
player_vegeta.setAttribute('height', '100px');
const player_gohan  = document.createElement('img');
player_gohan.setAttribute('src','./images/player-gohan.png');
player_gohan.setAttribute('width', '100px');
player_gohan.setAttribute('height', '100px');
//------------------------------------------------------------------
function ins_jugador(playerX, elZ){
    banner.style.display = "none" ;
    gato.style.display = "block";
    selectsound.play();
    playerX.innerHTML="";
    playerX.appendChild(elZ);
};
//selección de player 1 y 2
//Eliges a Goku------------------------------------------------------
gokusound.onclick=function(){
    ins_jugador(player_one, player_goku);

    player_one.innerHTML+= '<div>Goku</div>';
    //random entre 0 y 9
    if((Math.floor(Math.random()*10))%2 == 0){
        ins_jugador(player_two, player_vegeta);
        player_two.innerHTML+= '<div>Vegeta</div>';
    }
    else{
        ins_jugador(player_two, player_gohan);
        player_two.innerHTML+= '<div>Gohan</div>';
    }
};
//Eliges a Vegeta-----------------------------------------------------
vegsound.onclick=function(){
    ins_jugador(player_one, player_vegeta);
    player_one.innerHTML+= '<div>Vegeta</div>';
    if((Math.floor(Math.random()*10))%2 == 0){
        ins_jugador(player_two, player_goku);
        player_two.innerHTML+= '<div>Goku</div>';
    }
    else{
        ins_jugador(player_two, player_gohan);
        player_two.innerHTML+= '<div>Gohan</div>';
    }
};
//Eliges a Gohan------------------------------------------------------
gohsound.onclick=function(){
    ins_jugador(player_one, player_gohan);
    player_one.innerHTML+= '<div>Gohan</div>';
    if((Math.floor(Math.random()*10))%2 == 0){
        ins_jugador(player_two, player_goku);
        player_two.innerHTML+= '<div>Goku</div>';
    }
    else{
        ins_jugador(player_two, player_vegeta);
        player_two.innerHTML+= '<div>Vegeta</div>';
    }
};
