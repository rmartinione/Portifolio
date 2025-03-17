/* Exibe uma mensagem de boas-vindas ao carregar a página */
alert('🎉 Bem-vindo ao Amigo Secreto! Vamos começar?');

/* Solicita o nome do moderador e exibe no console */
const moderador = prompt('Qual é o seu nome?');
console.log(`Moderador: ${moderador}`);

/* Pergunta qual modo de sorteio será utilizado */
const modoSorteio = confirm('Você deseja sortear AO VIVO (um por um)? Clique em "OK" para AO VIVO ou "Cancelar" para sortear todos de uma vez.');

/* Inicializa a lista vazia de amigos */
let amigos = [];

/* Define os caracteres proibidos para os nomes */
const caracteresProibidos = ["@", "#", "$", "%", "&", "*", "!", "?", "/", "\\", "+", "=", "<", ">"];

/* Função para adicionar um amigo à lista */
function adicionarAmigo() {
  const amigoInput = document.getElementById('amigo');
  const amigoNome = amigoInput.value.trim();

  if (amigoNome === "") {
    alert("⚠️ Digite um nome válido!");
    return;
  }
  if (amigos.includes(amigoNome)) {
    alert("⚠️ Este nome já foi adicionado!");
    return;
  }
  if (/\d/.test(amigoNome)) {
    alert("⚠️ Números não são permitidos! Digite apenas letras.");
    return;
  }
  for (let i = 0; i < caracteresProibidos.length; i++) {
    if (amigoNome.includes(caracteresProibidos[i])) {
      alert(`⚠️ O caractere "${caracteresProibidos[i]}" não é permitido!`);
      return;
    }
  }

  amigos.push(amigoNome);
  atualizarLista();
  amigoInput.value = "";
  amigoInput.focus();
}

function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("⚠️ Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  let sorteio;
  let valido = false;
  while (!valido) {
    sorteio = embaralharArray([...amigos]);
    valido = true;
    for (let i = 0; i < amigos.length; i++) {
      if (amigos[i] === sorteio[i]) {
        valido = false;
        break;
      }
    }
  }

  let resultados = amigos.map((amigo, i) => `${amigo} 🎁 → ${sorteio[i]}`);
  document.getElementById('sortearBtn').disabled = true;

  if (modoSorteio) {
    mostrarResultadosUmPorUm(resultados);
  } else {
    mostrarTodosDeUmaVez(resultados);
  }
}

function mostrarResultadosUmPorUm(resultados) {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";
  let i = 0;

  function revelarProximo() {
    if (i < resultados.length) {
      setTimeout(() => {
        let li = document.createElement("li");
        li.innerHTML = `🎊 ${resultados[i]}`;
        resultadoElement.appendChild(li);
        alert(`🔮 Revelando... ${resultados[i]}`);
        i++;
        if (i < resultados.length) {
          alert("🎤 Chame o próximo participante!");
          revelarProximo();
        } else {
          alert("🎊 Fim do sorteio! Obrigado por participar!\n\n🔄 Caso deseje alterar o modo de sorteio, atualize a página.\n❌ Para finalizar, feche o navegador.");
          document.getElementById('reiniciarBtn').style.display = "block";
        }
      }, 1500);
    }
  }
  revelarProximo();
}

function mostrarTodosDeUmaVez(resultados) {
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.innerHTML = "";
  resultados.forEach(resultado => {
    let li = document.createElement("li");
    li.innerHTML = `🎊 ${resultado}`;
    resultadoElement.appendChild(li);
  });
  alert("🎉 Sorteio concluído! Veja os pares na tela.\n\n🔄 Caso deseje alterar o modo de sorteio, atualize a página.\n❌ Para finalizar, feche o navegador.");
  document.getElementById('reiniciarBtn').style.display = "block";
}

function reiniciarSorteio() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById('sortearBtn').disabled = false;
  document.getElementById('reiniciarBtn').style.display = "none";
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}