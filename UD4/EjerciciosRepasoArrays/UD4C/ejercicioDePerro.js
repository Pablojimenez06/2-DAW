"use strict";
/*<p>Crea una web que contenga tres textboxes, uno para el nombre del perro, 
        otro para la edad y otro para la raza. 
        Además habrá los siguientes botones con estos comportamientos:</p>


        <p>Botón de Añadir: Se creará un objeto de tipo Perro y se añadirá a un array de perros.</p>
        <p>Botón de Ordenar por inserción: 
            Se mostrarán todos los perros con sus datos en una lista no ordenada (&lt;ul&gt;) 
            en el orden en el que se insertaron.</p>
        <p>Botón de Ordenar por edad: 
            Se mostrarán todos los perros con sus datos en una lista (&lt;ol&gt;) ordenados por edad.</p>
        <p>Botón de Ordenar por raza: 
            Se mostrarán todos los perros con sus datos en una lista (&lt;ul&gt;) ordenados por la raza alfabéticamente.</p>
        <p>Tendrás que crear un constructor de objetos de tipo Perro que 
            devuelva un objeto de tipo Perro que incluya también un método llamado mostrarDatos() 
            que muestre los datos del perro.</p>

        <p>Nota: la función de array toSorted() puede ser necesaria para no perder el orden original.
            Nota: para comparar dos cadenas se puede usar string1.localeCompare(string2, "es");</p>*/

////////////////
///FUNCTIONS
////////////////

/*Constructor */

function Perro(nombre, edad ,raza ){
    this.nombre=nombre;
    this.edad=edad;
    this.raza=raza;

    this.mostrarDatos = function (){
        return `Nombre: ${this.nombre} , Edad: ${this.edad} , Raza: ${this.raza}`;
    }
}

function añadir(){

    let nombre = document.querySelector("#txtNombreDelPerro").value;
    let edad = document.querySelector("#txtEdadDelPerro").valueAsNumber;
    let raza = document.querySelector("#txtRazaDelPerro").value;

    if(!nombre || !edad || !raza){
        document.querySelector("#resultado").innerHTML="<p>Rellena todos los campos!!</p>"
        return;
    }

    arrayDePerros.push(new Perro(nombre,edad,raza));

    document.querySelector("#txtNombreDelPerro").value="";
    document.querySelector("#txtEdadDelPerro").valueAsNumber="";
    document.querySelector("#txtRazaDelPerro").value="";

}

function ordenarPorInsercion(){
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML="<ul>"+
        arrayDePerros.map(p => `<li>${Perro.mostrarDatos()}<li>`).join("")+
        "</ul>"
}


/////////////////
///MAIN
/////////////////

//1.Recuperamos botones y damos funcionalidad

let arrayDePerros = [];

document.querySelector("#añadir").addEventListener("click" , añadir);
document.querySelector("#ordenarPorInsercion").addEventListener("click", ordenarPorInsercion);
document.querySelector("#ordenarPorEdad").addEventListener("click" , ordenarPorEdad);
document.querySelector("#ordenarPorRaza").addEventListener("click" , ordenarPorRaza);

