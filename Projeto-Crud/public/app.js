//lógica do front
const form = document.getElementById('user-form');

//função para capturar os dados
form.addEventListener('submit', e=>{
    e.preventDefault();

    //pegar os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    
    //funcao cadastrar
    cadastrarUsuario(nome, email);
});

function cadastrarUsuario(nome, email) {
    //fetch()
    fetch('/api/users/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({nome, email})
    })
    .then(()=>{
        form.reset();
    })
}
