document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if (nome && email && senha) {
        let usuario = {
            nome: nome,
            email: email,
            senha: senha
        };

        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.push(usuario);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        // Exibir lista de usuários
        exibirUsuarios();
    }
});

function exibirUsuarios() {
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let listaUsuarios = document.getElementById('listaUsuarios');
    listaUsuarios.innerHTML = '';

    usuarios.forEach(function(usuario, index) {
        let li = document.createElement('li');
        li.textContent = `Nome: ${usuario.nome}, Email: ${usuario.email}`;
        listaUsuarios.appendChild(li);
    });
}

// Mostrar usuários ao carregar a página
document.addEventListener('DOMContentLoaded', exibirUsuarios);
