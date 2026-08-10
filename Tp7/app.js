let texto = document.querySelector("#texto")
let btn1 = document.querySelector("#btn1")
let edad = 14
let nombreusuario1 = "Nahuel"
let nombreusuario2 = "Marc"
let btn2 = document.querySelector("#btn2")
let nombre = document.querySelector("#nombre")

btn1.onclick = function(){
texto.textContent = "resultado"
    if(edad >= 18)
    {
        texto.textContent = "Eres mayor de edad"
    }else{
        texto.textContent = "Eres menor de edad"
    }
}
btn2.onclick = function(){
    if((nombreusuario1 == "Nahuel") || (nombreusuario2 == "Marcos"))
    {
        nombre.textContent = "bienvenido " + nombreusuario1 + " ¿Como estas?"
    }   
    else{
        nombre.textContent = "Bienvenido " + nombreusuario2 
    }

}

let numero1 = 17
let btn3 = document.querySelector("#btn3")
let resultado = document.querySelector("#resultado")

if(nu)
 
