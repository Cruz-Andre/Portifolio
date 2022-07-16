var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var imc = peso / (altura * altura);

tdImc.textContent = imc;

console.log(paciente); // contem o tr
console.log(tdPeso); // td que tem o peso
console.log(peso); // o texto
console.log(tdAltura); // td que tem a altura
console.log(altura); // o texto
console.log(imc);