// Função para organizar o texto
function organizarTexto() {
    // Obtém o texto digitado na área de texto
    const inputText = document.getElementById('inputText').value;

    // Organiza o texto adicionando novas linhas após pontuação seguida de letra maiúscula,
    // removendo linhas em branco extras e adicionando nova linha entre palavras que começam com letra maiúscula
    let organizedText = inputText
        .replace(/([.!?])\s*(?=[A-Z])/g, '$1\n') // Adiciona nova linha após pontuação seguida de letra maiúscula
        .replace(/(\r\n|\r|\n){2,}/g, '\n\n') // Remove linhas em branco extras
        .replace(/([a-z])([A-Z])/g, '$1\n$2'); // Adiciona nova linha entre palavras que começam com letra maiúscula

    // Copia o texto organizado para a área de transferência
    navigator.clipboard.writeText(organizedText).then(() => {
        // Exibe mensagem de sucesso
        document.getElementById('mensagem').innerText = 'Texto copiado com sucesso!';
        // Remove a mensagem após 2 segundos
        setTimeout(() => {
            document.getElementById('mensagem').innerText = '';
        }, 2000);
    }).catch(err => {
        // Exibe mensagem de erro
        document.getElementById('mensagem').innerText = 'Erro ao copiar para a área de transferência.';
        // Remove a mensagem após 2 segundos
        setTimeout(() => {
            document.getElementById('mensagem').innerText = '';
        }, 2000);
    });
}

// Função para limpar o texto da área de texto
function limparTexto() {
    // Limpa o texto da área de texto
    document.getElementById('inputText').value = '';
    // Exibe mensagem de sucesso
    document.getElementById('mensagem').innerText = 'Área de texto limpa com sucesso!';
    // Remove a mensagem após 2 segundos
    setTimeout(() => {
        document.getElementById('mensagem').innerText = '';
    }, 2000);
}