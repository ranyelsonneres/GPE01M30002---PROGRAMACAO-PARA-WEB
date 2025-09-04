//valores dos combustiveis
const precoGasolina = 6.09;
const precoEtanol = 5.20;
const precoDiesel = 5.80;

//funcao
function atualizaValor(){
    //lógica de negocio
    let tipo = document.getElementById("combustivel").value;
    console.log(tipo);
    let precoPorLitro;
    let litros = document.getElementById("litros").value;

    switch (tipo) {
        case "gasolina":
            precoPorLitro = precoGasolina;
            break;
        case "etanol":
            precoPorLitro = precoEtanol;
            break; 
        case "diesel":
            precoPorLitro = precoDiesel;
             break; 
    }
    console.log(precoPorLitro);

    //chamar a segunda funcao
     calcularValorAbastecimento(precoPorLitro, litros);

}

//evento
let tipoCombustivel = document.getElementById("combustivel");
tipoCombustivel.addEventListener("change", atualizaValor);

//funcao
function calcularValorAbastecimento(precoCombustivel, litros){
    //lógica
    let valorTotal = precoCombustivel * litros;
    //document.getElementById("resultado").textContent = formatarMoeda(valorTotal);

    //não calcular para números negativos
    if (litros <= 0){
        document.getElementById("resultado").textContent = "Insira um valor válido";
    } else {
        document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
    }
}

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizaValor);

//formatar o valor
function formatarMoeda(valor){
    return "R$ " + valor.toLocaleString("pt-br", 
    {minimumFractionDigits: 2, maximumFractionDigits: 2})
}
