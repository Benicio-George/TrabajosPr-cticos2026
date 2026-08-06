let texto = document.querySelector("#texto")
let btn1 = document.querySelector("#btn1")
let edad = 14

btn1.onclick = function(){
texto.textContent = "resultado"
    if(edad >= 18)
    {
        alert("Eres mayor de edad")
    }else{
        alert("Eres menor de edad")
    }
}

let nombreusuario = "Nahuel"
let btn2 = document.querySelector("#btn2")
let nombre = document.querySelector("#nombre")

btn2.onclick = function(){
    if(nombreusuario = "Nahuel"){nombre.textContent = "Bienvenido Nahuel, ¿cómo estás?"}
    else{
        nombre.textContent = "Bienvenido usuario"
    }
}