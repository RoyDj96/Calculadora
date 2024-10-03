function limpiar(){
   document.getElementById("resultado").innerHTML = "";
}

function CalcularResul(){
   var resultado = eval(document.getElementById("resultado").innerHTML);
   document.getElementById("resultado").innerHTML = resultado;
}

//variables

var borrar = document.getElementById("borrar");
var suma = document.getElementById("suma");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var division = document.getElementById("division");
var igual = document.getElementById("igual");
var uno = document.getElementById('uno');
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document.getElementById("seis");
var siete = document.getElementById("siete");
var ocho = document.getElementById("ocho");
var nueve = document.getElementById("nueve");
var cero = document.getElementById('cero');

// eventos
cero.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "0";
})

uno.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "1";
})
dos.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "2";
})
tres.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "3";
})
cuatro.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "4";
})
cinco.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "5";
})
seis.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "6";
})
siete.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "7";
})
ocho.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "8";
})
nueve.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "9";
})
//Operadores
suma.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "+";
})
resta.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "-";
})
multiplicacion.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "*";
})
division.addEventListener ("click", function(){
   resultado.textContent = resultado.textContent + "/";
})
igual.addEventListener ("click", function(){
   CalcularResul();
})

borrar.addEventListener ("click", function(){
   limpiar();
})