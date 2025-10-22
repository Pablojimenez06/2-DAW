"use strict";

////////////////////
// FUNCIONES
////////////////////
const calcular1 = () =>{
	//Crea un array que contenga 3 valores y haz que se muestre el contenido.
    let arr1 = ["pepe" , "juan" , "alfonso"];
    let solution = arr1;
    const divResultado1 = document.querySelector("#divResultado1");
    divResultado1.innerHTML = solution;
    return solution;
}



const sumaArray = a =>{
    let suma = 0;
    for (let i = 0 ; i < a.length ; i++){
        suma += a[i];
    }
    return suma;
}

const calcular2 = () =>{
    //Creamos un array de Ejemplo
    let arrNumeros = [1,2,3,4,5,6,1];
    
    //Llamamos a la función sumaArray y guardamos el resultado
    let resultado = sumaArray(arrNumeros);

    //Mostramos el resultado en el div con id "divResultado2"
    const divResultado2 = document.querySelector("#divResultado2");
    divResultado2.innerHTML= "La suma del array es: " +resultado;

}


const quitarOcurrencias = (a, q) =>{
    return a.filter(numero => numero !== q);//si numero !== q , devuelve true el elemento se incluye en el nuevo array si devuelve false no se inculye    
}



const calcular3 = () =>{
    let arrayNumeros = [1,2,3,4,5,6,8,3,2,4,6,2,4,5,2];
    let numeroProhibido = 2;
    const divResultado3 = document.querySelector("#divResultado3");
    divResultado3.innerHTML = quitarOcurrencias(arrayNumeros,numeroProhibido);
}



const calcular4 = () =>{
    let array1 = [1,2,3,4,5,6,7,8,9,10];
    let cuadrados = array1.map(numero => numero * numero);

    const divResultado4 = document.querySelector("#divResultado4");
    divResultado4.innerHTML = "El array de los numeros normales es " +array1  +"\n y el array de los numeros al cuadrado es "+cuadrados;


}

const calcular5 = () =>{
    let nombres = ["Ana" , "Paco" , "Lucas"];
    let longitudesNombre = nombres.map(nombre => nombre.length);
    const divResultado5 = document.querySelector("#divResultado5");
    divResultado5.innerHTML = "Array de Nombres:" +nombres +"<br> Longitudes de los nombres " +longitudesNombre; 
}

const calcular6 = () =>{
    let notas = [5,1,10,5,2,3,7,3,9,4,9];
    let boletin = notas.map(nota => nota>=5 ? "aprodado" : "suspenso");
    const divResultado= document.querySelector("#divResultado6");
    divResultado.innerHTML = "Las notas son las siguientes " +notas + "y sus calificaciones son las siguientes "+boletin;

}
////////////////////
// MAIN
////////////////////

//1.- Recuperamos las etiquetas que vamos a utilizar
let btnCalcular1   = document.querySelector("#btnCalcular1");
let divResultado1  = document.querySelector("#divResultado1");
let btnCalcular2   = document.querySelector("#btnCalcular2");
let divResultado2  = document.querySelector("#divResultado2");
let btnCalcular3   = document.querySelector("#btnCalcular3");
let divResultado3  = document.querySelector("#divResultado3");
let btnCalcular4   = document.querySelector("#btnCalcular4");
let divResultado4  = document.querySelector("#divResultado4");
let btnCalcular5   = document.querySelector("#btnCalcular5");
let divResultado5  = document.querySelector("#divResultado5");
let btnCalcular6   = document.querySelector("#btnCalcular6");
let divResultado6  = document.querySelector("#divResultado6");

//2.- Añadimos los event listener a los botones
btnCalcular1.addEventListener("click", calcular1 );
btnCalcular2.addEventListener("click", calcular2 );
btnCalcular3.addEventListener("click", calcular3 );
btnCalcular4.addEventListener("click", calcular4 );
btnCalcular5.addEventListener("click", calcular5 );
btnCalcular6.addEventListener("click", calcular6 );
