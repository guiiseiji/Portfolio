// Passo a passo do JS 
// - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
//   Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
//   Passo 2 - identificar o clique no botão 
//   Passo 3 - adicionar a classe ativo nos projetos escondidos 

// - Objetivo 2 - esconder o botão de mostrar mais 
//   Passo 4 - pegar o botão e esconder ele *

// Passo 1

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-mais');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); //excluindo uma classe dentro de uma seleção (quero os PROJETOS exceto os ATIVOS)

//Passo 2
botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();

    // Objetivo 2 - esconder o botão de mostrar mais
    // Passo 4 - pegar o botão e esconder ele
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}