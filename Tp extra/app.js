/*Ejercicio 1 y 2*/
let texto1 = document.querySelector("#texto1");
let inputmonto = document.querySelector("#inputmonto");
let inputedad = document.querySelector("#inputedad");
let btndescuento = document.querySelector("#btndescuento");
let descuento = 0;

btndescuento.onclick = function() {
    if (inputmonto.value >= 50000) {
        descuento = inputmonto.value * 0.10;
        texto1.textContent = "Se aplico un descuento del 10%: $" + descuento;
        texto1.style.color = "green";
    } else if ((inputmonto.value < 50000) && (inputedad.value >= 65)) {
        descuento = inputmonto.value * 0.15;
        texto1.textContent = "Se aplico un descuento del 15%: $" + descuento;
        texto1.style.color = "green";
    } else {
        texto1.textContent = "El monto ingresado no es suficiente para aplicar el descuento";
        texto1.style.color = "red";
    }
}

/*Ejercicio 3*/
let texto2 = document.querySelector("#texto2");
let inputaño = document.querySelector("#inputaño");
let btnaño = document.querySelector("#btnaño");
let añohoy = 2026;
let edad2;

btnaño.onclick = function() {
    edad2 = añohoy - inputaño.value;
    texto2.textContent = "Tienes " + edad2 + " años";
}

/*Ejercicio 4*/
let texto3 = document.querySelector('#texto3')
let inputHora = document.querySelector('#inputHora')
let btnTurno = document.querySelector('#btnTurno')


btnTurno.onclick = function () {
    if (inputHora.value == 17) {
        texto3.textContent = 'El cliente asignado es: Juan Perez'
        texto3.style.color = '#F1F5F9'
    } else if (inputHora.value == 18) {
        texto3.textContent = 'El cliente asignado es: Marco Polo'
        texto3.style.color = '#F1F5F9'
    }else if (inputHora.value == 19) {
        texto3.textContent = 'El cliente asignado es: Esteban Suarez'
        texto3.style.color = '#F1F5F9'
    }else if (inputHora.value == 20) {
        texto3.textContent = 'El cliente asignado es: Elias Polo'
        texto3.style.color = '#F1F5F9'
    }else if (inputHora.value == 21) {
        texto3.textContent = 'El cliente asignado es: Martin Juarez'
        texto3.style.color = '#F1F5F9'
    }else{
        texto3.style.color = 'red'
        texto3.textContent= 'No hay turnos cargados a esa hora, probar con horas entre 17 a 21'
    }
}