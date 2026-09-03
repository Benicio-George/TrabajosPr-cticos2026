let texto = document.querySelector('#texto');
let btn = document.querySelector('#btn');
let inputcalificacion = document.querySelector('#inputcalificacion');
let inputkm = document.querySelector('#inputkm');
let inputanos = document.querySelector('#inputanos');

btn.onclick = function() {
    if ((inputcalificacion.value >= 4 && inputkm.value <= 150000 || inputanos.value <= 10)) {
        texto.textContent = "Formas parte de Uber Black";
    } 
    else{ 
        texto.textContent = "Formas parte de Uber X";
    }
}