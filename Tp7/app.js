// Ejercicio 1
let pedad1 = document.querySelector("#pedad1")
let btnedad1 = document.querySelector("#btnedad1")
let edad1 = 18

btnedad1.onclick = function(){
    if(edad1 >= 18)
    {
        pedad1.textContent = "Eres mayor de edad"
    }else{
        pedad1.textContent = "Eres menor de edad"
    }
}

// Ejercicio 2 y 3
let nombreUsuario = "Marcos"
let btnnombre = document.querySelector("#btnnombre")
let pnombre = document.querySelector("#pnombre")

btnnombre.onclick = function(){
    if(nombreUsuario == "Nahuel" || nombreUsuario == "Marcos")
    {
        pnombre.textContent = "Bienvenido " + nombreUsuario + " ¿cómo estás?"
    }   
    else{
        pnombre.textContent = "Bienvenido " + nombreUsuario
    }
}


// Ejercicio 4
let numero1 = 45
let presultado = document.querySelector("#presultado")
let btnresultado = document.querySelector("#btnresultado")

btnresultado.onclick = function(){
if(numero1 > 0){
    presultado.textContent = "El número es positivo"
} 
else if(numero1 < 0){
    presultado.textContent = "El número es negativo"
}
else if(numero1 == 0){
    presultado.textContent = "El número es cero"
}
}


// Ejercicio 5
let edad2 = 46
let pedad2 = document.querySelector("#pedad2")
let btnedad2 = document.querySelector("#btnedad2")
  
btnedad2.onclick = function(){
if((edad2 >= 6) && (edad2 <= 11)){
    pedad2.textContent = "Niño (6 a 11 años)"
}
else if((edad2 >= 12) && (edad2 <= 18)){
    pedad2.textContent = "Adolescente (12 a 18 años)"
}
else if((edad2 >= 19) && (edad2 <= 26)){
    pedad2.textContent = "Joven (19 a 26 años)"
}
else if((edad2 >= 27) && (edad2 <= 59)){
    pedad2.textContent = "Adulto (27 a 59 años)"
} 
else if(edad2 > 60){
    pedad2.textContent = "Anciano (60 años o más)"
}}

// Ejercicio 6
let dia = "lunes"
let pdia = document.querySelector("#pdia")
let btndia = document.querySelector("#btndia")

btndia.onclick = function(){
    if(dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes"){
        pdia.textContent = "Es un día laborable"
    }
    else if(dia == "sabado" || dia == "domingo"){
        pdia.textContent = "Es fin de semana"
    }
}


// Ejercicio 7
let btncontrasenia = document.querySelector("#btncontrasenia")
let pcontrasenia = document.querySelector("#pcontrasenia")
let contrasenia = "sehh"

btncontrasenia.onclick = function(){
    if (contrasenia == "sehh"){
        pcontrasenia.textContent = "Acceso concedido"
    }
    else{
        pcontrasenia.textContent = "Acceso denegado"
    }
}
