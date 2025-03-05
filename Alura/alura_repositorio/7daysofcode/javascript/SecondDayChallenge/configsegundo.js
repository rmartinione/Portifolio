document.addEventListener('DOMContentLoaded', function() {
    const botaoIniciar = document.getElementById('botao-iniciar');
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const instrucoes = document.querySelector('.mensagem');

    botaoIniciar.addEventListener('click', function() {
        instrucoes.innerHTML = `
            <p>Desafio iniciado! Complete a tarefa e clique em "Jogar Novamente" para reiniciar.</p>
        `;
        botaoIniciar.style.display = 'none';
        botaoReiniciar.style.display = 'inline-block';

        // Carrega o script do desafio
        const script = document.createElement('script');
        script.src = 'secondchallenge.js';
        document.body.appendChild(script);
    });

    botaoReiniciar.addEventListener('click', function() {
        instrucoes.innerHTML = `
            <p>Desafio reiniciado! Complete a tarefa e clique em "Jogar Novamente" para reiniciar.</p>
        `;
        botaoIniciar.style.display = 'inline-block';
        botaoReiniciar.style.display = 'none';
    });
});
