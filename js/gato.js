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

var x='X';
var o='O';
var turno = 1;
var p1=0;
var p2=0;
var winners = [123,456,789,147,258,369,159,357];
/*
var winners = [132,465,798,174,285,396,195,375];
var winners = [213,546,879,417,528,639,519,537];
var winners = [231,564,897,471,582,693,591,573];
var winners = [312,645,978,714,825,936,915,735];
var winners = [321,654,987,741,852,963,951,753];
*/

reset.onclick=function(){
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

button1.onclick = function(){
    switch(button1.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button1.innerText = x;
                p1=p1*10+1;
            }else{
                button1.innerText = o;
                p2=p2*10+1;
            }
        turno = turno+1;
    }
    console.log(turno);
};

button2.onclick=function(){
    switch(button2.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button2.innerText = x;
                p1=p1*10+2;
            }else{
                button2.innerText = o;
                p2=p2*10+2;
            }
        turno = turno+1;
    }
};

button3.onclick=function(){
    switch(button3.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button3.innerText = x;
                p1=p1*10+3;
            }else{
                button3.innerText = o;
                p2=p2*10+3;
            }
        turno = turno+1;
    }
};

button4.onclick=function(){
    switch(button4.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button4.innerText = x;
                p1=p1*10+4;
            }else{
                button4.innerText = o;
                p2=p2*10+4;
            }
        turno = turno+1;
    }
};

button5.onclick=function(){
    switch(button5.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button5.innerText = x;
                p1=p1*10+5;
            }else{
                button5.innerText = o;
                p2=p2*10+5;
            }
        turno = turno+1;
    }
};

button6.onclick=function(){
    switch(button6.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button6.innerText = x;
                p1=p1*10+6;
            }else{
                button6.innerText = o;
                p2=p2*10+6;
            }
        turno = turno+1;
    }
};

button7.onclick=function(){
    switch(button7.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button7.innerText = x;
                p1=p1*10+7;
            }else{
                button7.innerText = o;
                p2=p2*10+7;
            }
        turno = turno+1;
    }
};

button8.onclick=function(){
    switch(button8.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button8.innerText = x;
                p1=p1*10+8;
            }else{
                button8.innerText = o;
                p2=p2*10+8;
            }
        turno = turno+1;
    }
};

button9.onclick=function(){
    switch(button9.innerText){
        case x:
        case o:
            break;
        default:
            if(turno % 2 == 1 ){
                button9.innerText = x;
                p1=p1*10+9;
            }else{
                button9.innerText = o;
                p2=p2*10+9;
            }
        turno = turno+1;
    }
};

function ganar(casillas){
    var numeros=[];
    for (i=0;i<5;i=i+1){
        numeros[i]=casillas%10;
        casillas=casillas/10;
    }
    numeros.sort();
}
