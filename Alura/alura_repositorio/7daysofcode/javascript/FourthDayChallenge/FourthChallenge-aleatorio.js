document.addEventListener('DOMContentLoaded', function() {
    const botaoIniciarAleatorio = document.getElementById('botao-iniciar2'); // Para o botão de Desafio Aleatório
    const botaoReiniciar = document.getElementById('botao-reiniciar');
    const instrucoes = document.querySelector('.mensagem');

    botaoIniciarAleatorio.addEventListener('click', function() { // Usando a variável correta
        instrucoes.innerHTML = `
            <p>Desafio iniciado! Tente adivinhar o número correto.</p>
        `;
        botaoIniciarAleatorio.style.display = 'none'; // Esconde o botão de iniciar
        botaoReiniciar.style.display = 'inline-block'; // Mostra o botão de reiniciar

        // Gera um número aleatório entre 0 e 10 para ser adivinhado
        const numeroAdivinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);

        // Inicializa a variável 'chute' que irá armazenar a tentativa do usuário
        let chute = "";

        // Inicializa a variável 'acertou' como falso, indicando que o usuário ainda não acertou
        let acertou = false;

        // Inicia um laço de repetição que permite 3 tentativas para adivinhar o número
        for(let contador = 0; contador < 3; contador++) {    
            // Solicita ao usuário que tente adivinhar o número, digitando um valor entre 0 e 10
            chute = prompt("Tente adivinhar o número de 0 a 10:");
            
            // Verifica se o chute do usuário é igual ao número correto
            if(chute == numeroAdivinhacao) {
                // Se o usuário acertar, exibe uma mensagem de parabéns
                alert(`Parabéns, você acertou! O número era ${numeroAdivinhacao}.`);
                
                // Define a variável 'acertou' como verdadeira, indicando que o usuário acertou
                acertou = true;
                
                // Encerra o laço de repetição
                break;
            }
            
            // Se o chute estiver errado, exibe uma mensagem informando que o chute foi incorreto
            alert("Errado!");
        }

        // Após o laço, verifica se o usuário não acertou o número
        if(!acertou) {
            // Se o usuário não acertou, exibe uma mensagem informando o número correto
            alert(`Infelizmente, você não acertou. O número era ${numeroAdivinhacao}!`);
        }
    });
});
