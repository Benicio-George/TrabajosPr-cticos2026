let botoncambiarfondo = document.querySelector ("#botoncambiarfondo")
let botoncambiartexto = document.querySelector ("#botoncambiartexto")
let botoncambiarcolor = document.querySelector ("#botoncambiarcolor")
let botoncambiarletra = document.querySelector ("#botoncambiarletra")
let p = document.querySelector('p')

botoncambiarfondo.onclick = function () {
    p.style.backgroundColor = "red" 
}

botoncambiartexto.onclick = function () {
    p.textContent = "Buenaaassss"
}

botoncambiarcolor.onclick = function () {
    p.style.color = "green"
}