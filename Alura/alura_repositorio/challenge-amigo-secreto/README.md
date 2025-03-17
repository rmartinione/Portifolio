# Sorteio de Amigo Secreto 🎉

Este repositório contém um código JavaScript interativo para realizar sorteios de Amigo Secreto. O sorteio pode ser feito de duas formas:
1. **Sorteio de uma vez** - Exibe todos os pares de amigos de uma vez.
2. **Sorteio ao vivo** - Revela os pares um por um, como se estivessem tirando os papéis ao vivo.

## Como funciona o código 🧑‍💻

O código foi desenvolvido para ser simples, interativo e fácil de entender. Ele coleta os nomes dos amigos, valida-os e então realiza o sorteio. Abaixo, está a explicação detalhada de como o código funciona.

### 1. Boas-vindas ao Usuário

Logo que a página é carregada, uma mensagem de boas-vindas é exibida.

```javascript
alert('🎉 Bem-vindo ao Amigo Secreto! Vamos começar?');
```

Esse código utiliza o método alert() para exibir uma mensagem de boas-vindas com o ícone 🎉, saudando o usuário antes de iniciar o sorteio.

### 2. Solicitação do Nome do Moderador

O código solicita o nome do moderador, que é registrado no console.

```javascript
const moderador = prompt('Qual é o seu nome?');
console.log(`Moderador: ${moderador}`);
```

### 3. Seleção do Modo de Sorteio

O usuário escolhe entre realizar o sorteio ao vivo ou exibir todos os resultados de uma vez.

```javascript
const modoSorteio = confirm('Você deseja sortear AO VIVO (um por um)? Clique em "OK" para AO VIVO ou "Cancelar" para sortear todos de uma vez.');
```

### 4. Inicialização da Lista de Amigos

Uma lista vazia é criada para armazenar os nomes dos amigos.

```javascript
let amigos = [];
```

### 5. Definição de Caracteres Proibidos

São definidos caracteres que não podem ser usados nos nomes dos amigos.

```javascript
const caracteresProibidos = ["@", "#", "$", "%", "&", "*", "!", "?", "/", "\\", "+", "=", "<", ">"];
```

### 6. Função para Adicionar Amigos

Cada nome inserido passa por validações antes de ser adicionado à lista.

```javascript
function adicionarAmigo() {
  const amigoInput = document.getElementById('amigo');
  const amigoNome = amigoInput.value.trim();
  
  // Validações: nome vazio, duplicado, presença de números ou caracteres proibidos.
  amigos.push(amigoNome);
  atualizarLista();
  amigoInput.value = "";
  amigoInput.focus();
}
```

### 7. Sorteio de Amigos

Ao iniciar o sorteio, o código embaralha a lista e gera os pares, garantindo que nenhum amigo tire a si mesmo.

```javascript
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("⚠️ Adicione pelo menos 2 amigos para sortear.");
    return;
  }
  // Processamento de embaralhamento e geração dos pares de sorteio.
}
```

### 8. Modo Ao Vivo x Modo de Uma Vez

Dependendo do modo selecionado, os resultados são exibidos de forma gradual ou todos de uma vez.

```javascript
if (modoSorteio) {
  mostrarResultadosUmPorUm(resultados);
} else {
  mostrarTodosDeUmaVez(resultados);
}
```

### 9. Reiniciar o Sorteio

Após o sorteio, o usuário pode reiniciar o processo e limpar os resultados.

```javascript
function reiniciarSorteio() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById('sortearBtn').disabled = false;
  document.getElementById('reiniciarBtn').style.display = "none";
}
```

## Personalização de Cores

Foram realizadas atualizações no esquema de cores para garantir contraste adequado. Agora, quando a cor do texto era igual à do fundo, o sistema inverte para garantir legibilidade:  
- Fundo claro com texto escuro;  
- Fundo escuro com texto claro.  

Veja a folha de estilos personalizada em "style.css" para detalhes da implementação.

## Como Testar o Código 🔍

1. Abra a página e verifique o alerta de boas-vindas.
2. Adicione os nomes dos amigos no campo apropriado.
3. Selecione o modo de sorteio (ao vivo ou de uma vez).
4. Inicie o sorteio e observe os resultados.
5. Utilize o botão de reiniciar para limpar os resultados e executar novamente.

## Contribuindo 🚀

Se você deseja contribuir com o projeto:
1. Faça um fork do repositório.
2. Crie uma branch para sua modificação:
   ```bash
   git checkout -b minha-modificacao
   ```
3. Comite suas alterações:
   ```bash
   git commit -am 'Adiciona nova funcionalidade'
   ```
4. Envie a branch para o repositório:
   ```bash
   git push origin minha-modificacao
   ```
5. Abra um pull request.

## Licença 📜

Este projeto é de código aberto, licenciado sob a MIT License.
