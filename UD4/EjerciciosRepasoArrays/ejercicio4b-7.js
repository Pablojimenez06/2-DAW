"use strict";

//////////////////
///FUNCTIONS
//////////////////

function agregar(){
    //1.Eliminar mensajes de error
    document.querySelector("#errores").innerHTML = '';

    //Obtenemos los valores de los textboxes
    const nombre = document.querySelector("#nombretxt").value.trim();
    const apellido = document.querySelector("#apellidotxt").value.trim();

    //Validamos que al menos uno este relleno
    if ( nombre === '' && apellido === ''){
        document.querySelector("#errores").innerHTML='<b>Error:</b>Debes rellenar al menos un campo';
        return;
    }

    //Añadir al array sino esta vacio

    if(nombre !== ''){
        nombres.push(nombre);
    }
    if(apellido !== ''){
        apellidos.push(apellido);
    }

    //Limpiamos los textboxes
    document.querySelector("#nombretxt").value='';
    document.querySelector("#apellidotxt").value='';

}

function generar(){
    //Limpiar mensajes de error y resultado usando innerHTML
    document.querySelector("#errores").innerHTML='';
    document.querySelector("#resultado").innerHTML='';

    //Validar que haya al menos un nombre y un apellido

    if(nombres.length === 0 || apellidos.length === 0 ){
        document.querySelector("#errores").innerHTML = '<b>Error:</b>No hay suficientes nombres o apellidos para generar';
        return;
    }

    //Generamos numeros aleatorios
    const numNombre = Math.floor(Math.random() * nombres.length);
    const numApellido = Math.floor(Math.random() * apellidos.length);

    //Construimos el nombre completo
    const nombreCompleto = nombres[numNombre] + ' ' + apellidos[numApellido];

    //Mostramos el resultado 

    document.querySelector("#resultado").innerHTML = '<b> Nombre generado:</b> ' + nombreCompleto;

}


//////////////////
//MAIN
//////////////////

let nombres = [];
let apellidos = [] ;

//Añadimos funcionalidad a los botones

document.querySelector("#btnAñadir").addEventListener("click" , agregar);
document.querySelector("#btnGenerar").addEventListener("click" , generar);

