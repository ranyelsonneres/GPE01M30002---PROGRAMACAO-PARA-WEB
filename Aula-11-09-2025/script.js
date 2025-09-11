//função arrow (=>)
//sem parametros
const saudacao  = () => console.log("Olá mundo!");
saudacao(); //chamar a função

//apenas um parâmetro
const dobrar = numero => numero * 2;
console.log(dobrar(2));

//mais de um parâmetro
const somar = (a, b) => a + b;
console.log(somar(2,8));

//mais de uma linha
const calcularArea = (base, altura) => {
    const area = (base * altura) / 2;
    return area;
}
console.log(calcularArea(10,5));

//não precisa escrever (função tradicional)
saudacao2();
function saudacao2(){
    console.log("Olá mundo 2");
}

//refatoramento
//função tradicional
function verificarIdade(idade){
    if (idade >=18) {
        return true;
    } else {
        return false;
    }
}

//função arrow
const verificarIdade2 = idade => idade >=18;

//toString()
let nome = "CAsa";
let nomeCorrigido = nome.toLocaleLowerCase();
console.log(nomeCorrigido);

//Objetos (POO)
//criar um objeto
const pessoa = {
    //propriedade: valor
    nome: "Naria",
    idade: 12
}
console.log(pessoa);
console.log(pessoa.nome);

//const pessoa = {}

//construtor
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    //metodos (ações/comportamentos)
    imprimirNome(){
        return `Nome digitado: ${this.nome}`;
    }

}
const p1 = new Pessoa("Ana", 12);
const p2 = new Pessoa("Pedro", 15);
console.log(p1.imprimirNome());
console.log(p2.idade);

//herança
class Estudante extends Pessoa {
    constructor(nome, idade, curso){
        super(nome, idade) //chama o construtor da classe Pai
        this.curso = curso;
    }

    //metodo
    estudar() {
        console.log(`${this.nome} está estudando ${this.curso}`);
    }
}

const aluno = new Estudante("André", 21, "Matemática");
aluno.imprimirNome(); //classe pai
aluno.estudar();

//Arrays - armazenar vários valores em uma única variável
let carrinho = [];
carrinho.push("meia")//push - adicional ao final
carrinho.push("calça");
carrinho.push(1);
//pop - remove ao final
carrinho.pop();
//unshit - adiciona ao inicio
carrinho.unshift("blusa");
//shift - remove do inicio
//splice
carrinho.splice(1,1); //remover / adicionar
carrinho.splice(1, 0, "gravata");
console.log(carrinho.includes("Gravata"));//busca simples

console.log(carrinho);
