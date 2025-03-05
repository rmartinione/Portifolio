document.addEventListener("DOMContentLoaded", function () {
    const mensagem = document.querySelector(".mensagem");
    const botaoIniciarFixo = document.getElementById('botao-iniciar1'); // Desafio Fixo
    const botaoIniciarAleatorio = document.getElementById('botao-iniciar2'); // Desafio Aleatório
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const botaoVoltar = document.querySelector('.botao-voltar');
    let desafioAtual = null;

    mensagem.textContent = "Bem-vindo ao Quarto Desafio! Escolha o desafio que deseja fazer.";

    function exibirBotoesIniciar() {
        mensagem.style.display = 'block';
        botaoIniciarFixo.style.display = "block"; // Mostra o botão de Desafio Fixo
        botaoIniciarAleatorio.style.display = "block"; // Mostra o botão de Desafio Aleatório
    }

    function limparScript() {
        const scripts = document.querySelectorAll('script[src^="FourthChallenge"]');
        scripts.forEach(script => script.remove());
    }

    // Evento de clique para o botão de Desafio Fixo
    botaoIniciarFixo.addEventListener('click', () => {
        mensagem.style.display = 'none';
        botaoIniciarFixo.style.display = "none";
        botaoIniciarAleatorio.style.display = "none";
        botaoReiniciar.style.display = 'block';
        limparScript();

        const script = document.createElement('script');
        script.src = 'FourthChallenge-fixo.js';
        script.defer = true;
        document.body.appendChild(script);
    });

    // Evento de clique para o botão de Desafio Aleatório
    botaoIniciarAleatorio.addEventListener('click', () => {
        mensagem.style.display = 'none';
        botaoIniciarFixo.style.display = "none";
        botaoIniciarAleatorio.style.display = "none";
        botaoReiniciar.style.display = 'block';
        limparScript();

        const script = document.createElement('script');
        script.src = 'FourthChallenge-aleatorio.js';
        script.defer = true;
        document.body.appendChild(script);
    });

    // Evento para o botão de reiniciar
    botaoReiniciar.addEventListener('click', function () {
        window.location.href = 'quatro.html';
        mensagem.style.display = 'none';
        botaoIniciarFixo.style.display = "none";
        botaoIniciarAleatorio.style.display = "none";
        const novoScript = document.createElement('script');
        const scriptAtual = document.querySelector('script[src^="FourthChallenge"]'); // Seleciona o script carregado.
        if (scriptAtual.src.includes('FourthChallenge-fixo.js')) {
            novoScript.src = 'FourthChallenge-fixo.js';
        } else {
            novoScript.src = 'FourthChallenge-aleatorio.js';
        }
        novoScript.defer = true;
        document.body.appendChild(novoScript);
        botaoReiniciar.textContent = "Jogar Novamente";
    });

    // Evento para o botão Voltar
    botaoVoltar.addEventListener('click', () => {
        limparScript();
        exibirBotoesIniciar();
        botaoReiniciar.style.display = 'none';
        window.location.href = '../../index.html';
    });

    // Exibe os botões de iniciar o desafio
    exibirBotoesIniciar();
});
