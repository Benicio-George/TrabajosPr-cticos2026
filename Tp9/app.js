//Actividad 1

let p1 = document.querySelector("#p1");
let inp1 = document.querySelector("#inp1");
let inp1b = document.querySelector("#inp1b");
let btn1 = document.querySelector("#btn1");
 
function actividad1(n1,n2){
	if (n1 > n2) {
		p1.textContent = "El número mayor es " + n1;
	}
	else if (n2 > n1) {
		p1.textContent = "El número mayor es " + n2;
	}
	else {
		p1.textContent = "Los dos números son iguales";
	}
}

btn1.onclick = function(){
    actividad1(Number(inp1.value), Number(inp1b.value));
}

//Actividad 2

let p2 = document.querySelector("#p2");
let inp2 = document.querySelector("#inp2");
let inp2b = document.querySelector("#inp2b");
let btn2 = document.querySelector("#btn2");

function actividad2(n3,n4){
	if (n3 < n4) {
		p2.textContent = "El número menor es " + n3;
	}
	else if (n4 < n3) {
		p2.textContent = "El número menor es " + n4;
	}
	else {
		p2.textContent = "Los dos números son iguales";
	}
}

btn2.onclick = function(){
    actividad2(Number(inp2.value), Number(inp2b.value));
}

//Actividad 3

let p3 = document.querySelector("#p3");
let inp3 = document.querySelector("#inp3");
let inp3b = document.querySelector("#inp3b");
let btn3 = document.querySelector("#btn3");

function actividad3(n5,n6){
	if (n5 === n6) {
		p3.textContent = "Los numeros son iguales";
	}
	else if (n6 !== n5) {
		p3.textContent = "Los numeros son distintos";
	}
}

btn3.onclick = function(){
    actividad3(Number(inp3.value), Number(inp3b.value));
}

//Actividad 4

let p4 = document.querySelector("#p4");
let inp4 = document.querySelector("#inp4");
let btn4 = document.querySelector("#btn4");

function actividad4(){
let compra = Number(inp4.value) * 1.21;
p4.textContent = "El monto de la compra es: " + compra;
return compra;
}
btn4.onclick = function(){
    actividad4();
}

//Actividad 5

let p5 = document.querySelector("#p5");
let inp5 = document.querySelector("#inp5");
let btn5 = document.querySelector("#btn5");

function actividad5(n8){
    if (n8) {
        let saludo = "Hola " + n8;
        p5.textContent = saludo;
        return saludo;
    }
    else {
        p5.textContent = "Actividad 5";
    }
}
btn5.onclick = function(){
    actividad5(inp5.value);
}

//Actividad 6

let p6 = document.querySelector("#p6");
let inp6 = document.querySelector("#inp6");
let btn6 = document.querySelector("#btn6");

function actividad6(){
    if (inp6.value === "oscuro") {
    document.body.style.backgroundColor = "#1a1a1a";
    document.body.style.color = "#ffffff";
    p6.textContent = "Modo oscuro activado";
    }
    else{
        p6.textContent = "Modo oscuro no activado, ingrese 'oscuro' para activar el modo oscuro";
        p6.style.color = "red";
    }
}
btn6.onclick = function(){
    actividad6();
}

//Actividad 7

let p7 = document.querySelector("#p7");
let inp7 = document.querySelector("#inp7");
let btn7 = document.querySelector("#btn7");

function actividad7(){
    if (inp7.value === "claro") {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
    p7.textContent = "Modo claro activado";
    }
    else{
        p7.textContent = "Modo claro no activado, ingrese 'claro' para activar el modo claro";
        p7.style.color = "red";
    } 
}

btn7.onclick = function(){
    actividad7();
}