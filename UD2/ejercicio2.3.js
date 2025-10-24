"use strict";

/////////////////
///FUNCTION
////////////////

function calcularVolumen(radio){
    return 4/3*(Math.PI)*(radio**3)
}

function recuperarDatosyCalcular(){
    const radio = document.querySelector("#txtRadio").valueAsNumber;

    const resultado = calcularVolumen(radio);

    //4.Presentamos el resultado al usuario
    

}

presentar(){

}
/////////////////
///MAIN
/////////////////


const btnCalcular = document.querySelector("#btnCalcular");
btnCalcular.addEventListener("click", recuperarDatosyCalcular);

