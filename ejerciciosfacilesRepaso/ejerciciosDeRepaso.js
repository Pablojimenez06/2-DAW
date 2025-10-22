"use strict";

////////////////
///FUNCIONES
////////////////

function numerosImpares(){
    let impares = [];
    let numero = 1;

    while(impares.length < 20 ){//Mientras no tengamos 20 números en el array 
        impares.push(numero);//Añadimos el número al final , es lo recomendable utilizar el push
        numero += 2;//Se le suma 2 para que vaya mostrando los impares;
    }

   let solution = "<ol type=number>";
    for (let x = 0 ; x<impares.length ; x++){
        solution += `<li>${impares[x]}</li>`
    }

    solution += "</ol>"

    //Mostramos la lista en el div
    const resultado = document.querySelector("#resultado").innerHTML= solution;
}

////////////////
///MAIN
////////////////

//1.Recuperamos el botón
const mostrarNumerosImpares = document.querySelector("#mostrarNumerosImpares");

//2.Le damos funcionalidad al botón

mostrarNumerosImpares.addEventListener("click" , numerosImpares)