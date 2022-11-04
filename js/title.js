let titulo = "The Z Warriors";
let titulo_clon;
letra = '...........................';
iteracion = -1;
document.title = titulo;
largo_titulo = titulo.length;
document.title = titulo;
var time_shooter = null; //por los lol-es
retraso_ms = 500; //espacio de tiempo entre cambio de letras en milisegundos

function mover_titulo(){
	if(iteracion < largo_titulo){
		titulo_clon = letra.substring(0,iteracion+1) + titulo.substring(iteracion+1);
		iteracion +=1;
	}
	else{
		iteracion = -1;
	}
	document.title = titulo_clon;
	time_shooter = setTimeout("mover_titulo()", retraso_ms);  //llamada recursiva con retraso
};

window.addEventListener('load', mover_titulo)