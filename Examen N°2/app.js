let input1 = document.querySelector("#input1")
let parrafo1 = document.querySelector("#parrafo1")
let boton1 = document.querySelector("#boton1")

boton1.onclick = function(){
    if (input1.value < 10) {
        parrafo1.textContent = "Hace frío 🥶"
        document.body.style.backgroundColor = "aqua"
    } else if ((input1.value >= 10) && (input1.value <= 25)) { 
        parrafo1.textContent = "Clima agradable 🙂"
        document.body.style.backgroundColor = "green"
    }
    else if (input1.value > 25){ 
    parrafo1.textContent = "Hace calor 🥵"
        document.body.style.backgroundColor = "red"
    }
}

let input2 = document.querySelector("#input2")
let parrafo2 = document.querySelector("#parrafo2")
let boton2 = document.querySelector("#boton2")
 
boton2.onclick = function(){
    if ((input2.value == "lunes" || input2.value == "miercoles" || input2.value == "viernes")) {
        parrafo2.textContent = "Residuos secos."
    } else if ((input2.value == "martes" || input2.value == "jueves" || input2.value == "domingo")){
        parrafo2.textContent = "Residuos húmedos."
    }
      else if (input2.value == "sabado"){
          parrafo2.textContent = "No hay recolección de residuos."
      }
}

let input3 = document.querySelector("#input3")
let input4 = document.querySelector("#input4")
let parrafo3 = document.querySelector("#parrafo3")
let boton3 = document.querySelector("#boton3")

boton3.onclick = function(){
    if ((input3.value == "admin" && input4.value == 1234)) {
        parrafo3.textContent = "Acceso permitido"
    } else {
        parrafo3.textContent = "Usuario o contraseña incorrectos"
    }
}

let input5 = document.querySelector("#input5")
let parrafo4 = document.querySelector("#parrafo4")
let boton4 = document.querySelector("#boton4")

boton4.onclick = function(){
    if ((input5.value == "Benja" || input5.value == "Alejo" || input5.value == "Ramiro" || input5.value == "Maxi" || input5.value == "Nahuel")) {
        parrafo4.textContent = "✅ " + input5.value + " está presente"
    } else {
     parrafo4.textContent = "❌ " + input5.value + "está ausente" 
    }
}
