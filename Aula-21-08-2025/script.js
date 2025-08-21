//buscar os elementos da página HRML
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(typeof meuElemento);
console.log(meuElemento.textContent);

let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
//impressão de todos esses elementos da colecao
for (let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

let paragrafo2 = document.getElementsByTagName("h2");
console.log(paragrafo2);

//criarmos o elemento via javascript
let destino = document.getElementById("elemento");
let p1 = document.createElement("p");
p1.textContent = "Paragrafo criado via javascript";
destino.append(p1);

//criar uma lista não ordenada
let ul = document.createElement("ul");
let itens = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
for(let i=0; i<itens.length;i++){
    let li = document.createElement("li");
    li.textContent = itens[i];
    ul.append(li);
}
destino.append(ul);

//funcao somar()
function somar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);

    let soma = n1 + n2;
    console.log(soma);
    let saida = `<strong>Resultado: </strong> ${soma}`;
    document.getElementById("resultado").innerHTML = saida;
}

//evento
let botao = document.getElementById("botao");
botao.onclick = function() {
    alert("Clicou!");
    botao.style.backgroundColor = "red";
    botao.textContent = "clicou sim!";
};
