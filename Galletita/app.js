let p1 = document.querySelector("#p1")
let btn1 = document.querySelector("#btn1")
let galletitas = 0

btn1.onclick = function(){
    galletitas = galletitas + 1
    p1.textContent = galletitas + " galletitas"
    if (galletitas < 10) {
        p1.style.color = "green"
    } else if ((galletitas >= 10) && (galletitas <= 20)) {
         p1.style.color = "yellow"
    } else {
         p1.style.color = "red"
    }
}