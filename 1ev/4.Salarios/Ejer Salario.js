/*Crear una aplicaciOn web que pida,en sendos cuadros de lectura de datos
, el nombre, los apellidos, el salario (nOmero con decimales) y la edad de una persona
(un nUmero).
La pAgina mostrara el nombre, los apellidos, la edad introducidos por el cliente
y el salario recalculado en arreglo a los siguientes puntos:/*
/*Salario mayor de 2000 no cambia.
Salario entre 1000 y 2000:
si mayor de 45 años se sube un 3%.
si menor de 45 o igual, se sube un 10%.
Salario menor de 1000:
si menor de 30 se le asigna 1100.
si edad entre 30 y 45, el salario sube un 3%.
Si mayor de 45 sube un 15%. */



let nombre = prompt("Introduce tu nombre");

let apellido1 = prompt("Introduce tu primer apellido");

let apellido2 = prompt("Introduce tu segundo apellido");

let salario = prompt("Introduce tu salario"); /* decimal */

let edad = parseInt(prompt("Introduce tu edad"));  /* int */


if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
    }
    else if (edad >= 30 && edad <= 45) {
        salario *= 1.03;
    }
    else if (edad > 45) {
        salario *= 1.15;
    }


}
else if (salario >= 1000 && salario <= 2000) {

    if (edad > 45)
        salario *= 1.03;

    else if (edad <= 45) {
        salario *= 1.1;
    }


}
else {

    /*No hace nada*/
}



salario = salario.toFixed(2);




document.write("La persona " + nombre + " " + apellido1 +
    " " + apellido2 + " de edad " + edad + " gana " + salario);

