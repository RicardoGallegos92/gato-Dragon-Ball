const TITULO = "The Z Warriors";
const LARGO_TITULO = TITULO.length;
const RETRASO_MS = 250;
paso = 0;
//  espacio de tiempo entre cambio de letras en milisegundos

function moverTitulo() {
    if( paso <= LARGO_TITULO ){
        document.title = '.'.repeat(paso) + TITULO.substring(paso);
        ++ paso;
    }
    else{
        paso = 0;
    }
    setTimeout(moverTitulo, RETRASO_MS);  //llamada recursiva con retraso
}

moverTitulo();