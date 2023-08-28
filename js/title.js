const TITULO = "Z Warriors";
const RETRASO_MS = 500;
paso = 0;
//  espacio de tiempo entre cambio de letras en milisegundos

// function moverTitulo() {
//     if( paso <= LARGO_TITULO ){
//         document.title = '.'.repeat(paso) + TITULO.substring(paso);
//         ++paso;
//     }
//     else{
//         paso = 0;
//     }
//     console.log("paso: "+paso);
//     setTimeout(moverTitulo, RETRASO_MS);  //llamada recursiva con retraso
// }

// moverTitulo();

const moverTitulo = () => {
    document.title = TITULO.substring(paso);
    paso < TITULO.length ? paso++ : paso = 0;
    console.log("paso: "+paso);
}

const shakeIt = setInterval(moverTitulo, RETRASO_MS);