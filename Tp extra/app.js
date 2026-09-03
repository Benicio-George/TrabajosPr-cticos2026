/*Ejercicio 1 y 2*/
let texto1 = document.querySelector("#texto1");
let monto1 = document.querySelector("#inputmonto1");
let edad = document.querySelector("#inputedad");
let boton1 = document.querySelector("#boton1");
let descuento = 0;

boton1.onclick = function() {
    if (monto1.value >= 50000) {
        descuento = monto1.value * 0.10;
        texto1.textContent = "Se aplico un descuento del 10%: $" + descuento;
        texto1.style.color = "green";
    } else if ((monto1.value < 50000) && (edad.value >= 65)) {
        descuento = monto1.value * 0.15;
        texto1.textContent = "Se aplico un descuento del 15%: $" + descuento;
        texto1.style.color = "green";
    } else {
        texto1.textContent = "El monto ingresado no es suficiente para aplicar el descuento";
        texto1.style.color = "red";
    }
}

/*Ejercicio 3*/
let texto2 = document.querySelector("#texto2");
let año = document.querySelector("#inputaño");
let boton2 = document.querySelector("#btnaño");
let añohoy = 2026;
let edad2;

boton2.onclick = function() {
    edad2 = añohoy - año.value;
    texto2.textContent = "Su edad es: " + edad2;
}

/*Ejercicio 4*/
let texto4 = document.querySelector('#texto4')
let inputHora = document.querySelector('#inputHora')
let botonTurno = document.querySelector('#botonTurno')


botonTurno.onclick = function () {
    if (inputHora.value == 17) {
        texto4.textContent = 'El cliente asignado es: Juan Perez'
    } else if (inputHora.value == 18) {
        texto4.textContent = 'El cliente asignado es: Marco Polo'
    }else if (inputHora.value == 19) {
        texto4.textContent = 'El cliente asignado es: Esteban Suarez'
    }else if (inputHora.value == 20) {
        texto4.textContent = 'El cliente asignado es: Elias Polo'
    }else if (inputHora.value == 21) {
        texto4.textContent = 'El cliente asignado es: Martin Juarez'
    }else{
        texto4.style.color = 'red'
        texto4.textContent= 'No hay turnos cargados a esa hora, probar con horas entre 17 a 21'
    }
}