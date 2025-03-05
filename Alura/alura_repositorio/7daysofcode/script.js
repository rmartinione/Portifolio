document.addEventListener('DOMContentLoaded', function() {
    const botoesGradiente = document.querySelectorAll('.botao-gradiente');
    const botaoTemaEscuro = document.getElementById('botao-tema-escuro');
    const botaoTemaClaro = document.getElementById('botao-tema-claro');

    botoesGradiente.forEach(botao => {
        botao.addEventListener('click', function() {
            alert(`Você clicou no ${botao.textContent}`);
        });

        // Animação simples para o botão
        botao.addEventListener('mouseover', function() {
            botao.style.transform = 'scale(1.1)';
        });

        botao.addEventListener('mouseout', function() {
            botao.style.transform = 'scale(1)';
        });
    });

    botaoTemaEscuro.addEventListener('click', function() {
        document.body.classList.toggle('tema-escuro');
    });

    // Responsividade para mobile/tablet
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 480) {
            document.body.style.fontSize = '14px';
        } else {
            document.body.style.fontSize = '16px';
        }
    });

    // Função para o botão de voltar
    const botoesVoltar = document.querySelectorAll('.botao-voltar');
    botoesVoltar.forEach(botao => {
        botao.addEventListener('click', function() {
            window.history.back();
        });
    });
});