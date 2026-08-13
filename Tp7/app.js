let p1 = document.querySelector("#p1")
let btn1 = document.querySelector("#btn1")
let edad1 = 14
let nombreusuario1 = "Nahuel"
let nombreusuario2 = "Marc"
let btn2 = document.querySelector("#btn2")
let p2 = document.querySelector("#p2")

btn1.onclick = function(){
p1.textContent = "resultado"
    if(edad1 >= 18)
    {
        p1.textContent = "Eres mayor de edad"
    }else{
        p1.textContent = "Eres menor de edad"
    }
}
btn2.onclick = function(){
    if((nombreusuario1 == "Nahuel") || (nombreusuario2 == "Marcos"))
    {
        p2.textContent = "bienvenido " + nombreusuario1 + " ¿Como estas?"
    }   
    else{
        p2.textContent = "Bienvenido " + nombreusuario2 
    }
}

let numero1 = 67
let p3 = document.querySelector("#p3")
let btn3 = document.querySelector("#btn3")

btn3.onclick = function(){
if(numero1 > 0){
    p3.textContent = "El número es positivo"
} 
else if(numero1 < 0){
    p3.textContent = "El número es negativo"
}
else if(numero1 == 0){
    p3.textContent = "El número es cero"
}
}

let edad2 = 46
let p4 = document.querySelector("#p4")
let btn4 = document.querySelector("#btn4")
  
btn4.onclick = function(){
if((edad2 >= 6) && (edad2 <= 11)){
    p4.textContent = "Niño (6 a 11 años)"
}
else if((edad2 >= 12) && (edad2 <= 18)){
p4.textContent = "Adolescente (12 a 18 años)"
}
else if((edad2 >= 19) && (edad2 <= 26)){
    p4.textContent = "Joven (19 a 26 años)"
}
else if((edad2 >= 27) && (edad2 <= 59)){
    p4.textContent = "Adulto (27 a 59 años)"
} 
else if(edad2 > 60){
    p4.textContent = "Anciano (60 años o más)"
}}

let dia = "sabado"
let p5 = document.querySelector("#p5")
let btn5 = document.querySelector("#btn5")

btn5.onclick = function(){
    if(dia == "lunes" || "martes" || "miercoles" || "jueves" || "viernes"){
        p5.textContent = "Es un día laborable"
    }
    else if(dia == "sabado" || "domingo"){
        p5.textContent = "Es fin de semana"
    }
}

let btn6 = document.querySelector("#btn6")
let p6 = document.querySelector("#p6")
let contrasenia = "sehh"

btn6.onclick = function(){
    if (contrasenia == "sehh"){
        p6.textContent = "Acceso concedido"
    }
    else{
        p6.textContent = "Acceso denegado"
    }
}
