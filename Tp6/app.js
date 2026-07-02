let p = document.querySelector('p')
let botoncambiarfondo = document.querySelector ("#botoncambiarfondo")
let botoncambiartexto = document.querySelector ("#botoncambiartexto")
let botoncambiarcolor = document.querySelector ("#botoncambiarcolor")
let botoncambiarletra = document.querySelector ("#botoncambiarletra")
let botoncambiartamaño = document.querySelector ("#botoncambiartamaño")
let botonreiniciar = document.querySelector ("#botonreiniciar")

botoncambiarfondo.onclick = function () {
    p.style.backgroundColor = "red" 
}

botoncambiartexto.onclick = function () {
    p.textContent = "Buenaaassss"
}

botoncambiarcolor.onclick = function () {
    p.style.color = "green"
}

botoncambiarletra.onclick = function () {
    p.style.fontFamily = "IMPACT"
}

botoncambiartamaño.onclick = function () {
    p.style.fontSize = "30px"
}

botonreiniciar.onclick = function () {
    p.style.color = "orange"
    p.style.backgroundColor = "aqua"
    p.style.fontSize = "20px"
    p.textContent = "Primera"
    p.style.fontFamily = "Arial, Helvetica, sans-serif"
}