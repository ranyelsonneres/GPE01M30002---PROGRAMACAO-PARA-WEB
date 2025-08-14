//variaveis
var v1 = 10; //global e permite reatribuição
v1 = 15;
console.log(v1); //impressão no console
console.log(typeof v1); //verufucar o tipo
var v2 = "10";

let v3 = 10;
v3 = "casa";

const v4 = 15;
//v4 = "carro";

//operadores
//* ** / % + < <= >= != = == ===
console.log(5 == "5"); //igualdade
console.log(5 === "5"); //estritamente igual

//entrada de dados (DOM)
var nome = window.prompt("Nome: ");
var idade = parseInt(window.prompt("Idade: "));

var resultado = idade + 10;
console.log("Resultado: " + resultado);

console.log(typeof nome);
console.log(typeof idade);

//impressão
console.log(`A sua idade ${idade}`); //template literal

//escrever diretamente no HTML
document.writeln("Escrevendo no HTML");
document.writeln(idade);

//estruturas de controle
//if-else; for; while; do-while; switch-case
