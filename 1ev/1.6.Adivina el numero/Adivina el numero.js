let numero = alert("Intenta adivinar un numero entre el 1 y el 10");
let acertar = false;

let encontrar = Math.floor(Math.random() * 10) + 1;
let buscar = Math.floor(Math.random() * 10) + 1;



while (acertar == false) {

    let pregunta = prompt("¿Que numero crees que es?");


    if (pregunta == null) {
        alert("Cancelado");
        acertar = true;
    }

    else if (pregunta > 10 || pregunta < 1) {
        alert("Ese numero no esta entre 1 y 10")
    }

    else if (pregunta > encontrar) {
        alert("El numero es menor que " + pregunta);


    }
    else if (pregunta < encontrar) {
        alert("El numero es mayor que " + pregunta);
    }
    else if (pregunta == encontrar) {
        alert("Acertaste,el numero es " + encontrar);
        acertar = true;
    }
    else {
        alert("Introduce una respuesta valida");
    }


}



