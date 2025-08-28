let botao1 = document.getElementById("botao1");
//evento = propriedade
botao1.onclick = function(){
    //lógica de negócio
    console.log("Clique");
}
botao1.ondblclick = function(){
    console.log("Duplo Clique");
}
let botao2 = document.getElementById("botao2");
botao2.onmouseover = function(){
    console.log("Registro");
    botao2.style.backgroundColor = "yellow";
}
botao2.onmouseout = function(){
    botao2.style.backgroundColor = "";
}

campoEntrada = document.getElementById("input1");
let resultado = document.getElementById("resultado");
campoEntrada.onkeydown = function(event){
    ///console.log("Captura de teclas");
    if(event.key == "Enter"){
       console.log(typeof campoEntrada);
       resultado.innerHTML = campoEntrada.value;
       campoEntrada.value = "";
    }
};

let botao3 = document.getElementById("botao3");
botao3.addEventListener("click", function(){
    resultado.textContent = "";
});
