// Função de cadastro
document.getElementById('form-cadastro')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário de cadastro
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o CPF já foi cadastrado no LocalStorage
    if(localStorage.getItem(cpf)) {
        alert("CPF já cadastrado!");
        return;
    }

    // Cria um objeto de usuário com os dados
    const usuario = { nome, senha };

    // Salva o usuário no LocalStorage, com o CPF como chave
    localStorage.setItem(cpf, JSON.stringify(usuario));

    alert('Cadastro realizado com sucesso!');
});

// Função de login
document.getElementById('form-login')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Coleta os dados do formulário de login
    const cpf = document.getElementById('cpf').value;
    const senha = document.getElementById('senha').value;

    // Recupera o usuário do LocalStorage usando o CPF
    const usuario = JSON.parse(localStorage.getItem(cpf));

    // Verifica se o CPF existe e se a senha está correta
    if (usuario && usuario.senha === senha) {
        alert('Login bem-sucedido!');
        // Redireciona ou faz alguma outra ação após o login bem-sucedido
    } else {
        alert('CPF ou senha inválidos!');
    }
});
