"use strict";

///////////////
///FUNCIONES
///////////////

function analizarPH(){
    //1.Recuperamos el valor de PH que ha escrito el usuario
    const valorPH = document.querySelector("#txtPH").valueAsNumber;

    //2.Analizamos el valor y creamos la solucion
    let solucion= `<p>El valor de ph del agua es ${valorPH}</p>`

    /*ph neutro (entre 6.5 y 8.5) ,ligeramente alcalino (entre 8.5 y 11), muy alcalino (mayor que 11),
    ligeramente ácido (entre 3.5 y 6.5) o muy ácido (menor que 3.5).*/

    if(valorPH < 3.5){
        solucion += "<p> El PH es muy ácido </p>";
    }
    else if (valorPH > 11){
        solucion += "<p>El PH es muy alcalino</p>";
    }
    else if(valorPH >= 3.5 && valorPH < 6.5){
        solucion += "<p>El PH es ligeramente ácido</p>"
    }
    else if(valorPH >= 6.5 && valorPH < 8.5){
        solucion +="<p>El PH es neutro</p>";
    }else{
        solucion +="<p>El PH es ligeramente alcalino</p>";
    }

    //Mostramos la solucion en la división el id Divsolucion
    document.querySelector("#divSolucion").innerHTML= solucion;

}

///////////////
///MAIN
///////////////

//1.Recuperamos el botón del html
const btnCalcular = document.querySelector("#btnCalcular");

//2.Añadimos funcionalidad cuando de click 
btnCalcular.addEventListener("click" , analizarPH);