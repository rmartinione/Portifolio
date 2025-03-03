// Declaração de arrays vazios para armazenar os itens de cada categoria
let frutas = [];       // Lista para armazenar frutas
let laticinios = [];   // Lista para armazenar laticínios
let doces = [];        // Lista para armazenar doces
let congelados = [];   // Lista para armazenar congelados

// Declaração das variáveis que armazenarão a comida e a categoria escolhidas pelo usuário
let comida = "";       // Variável para armazenar o nome da comida
let categoria = "";    // Variável para armazenar a categoria escolhida pelo usuário

// Variável de controle para continuar ou interromper o loop de adição de itens
let adicionarMais = "sim";  // Inicialmente definida como "sim" para entrar no loop ao menos uma vez

// Estrutura de repetição para adicionar itens à lista de compras
while (adicionarMais != "não") {  // Enquanto o usuário não responder "não", continuar perguntando
    // Pergunta ao usuário se deseja adicionar um item à lista
    adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");

    // Enquanto a resposta do usuário não for "sim" ou "não", exibir um alerta e perguntar novamente
    while (adicionarMais != "sim" && adicionarMais != "não") {
        alert(`Operação não reconhecida!`);  // Mensagem de erro caso a entrada não seja válida
        adicionarMais = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.");
    }
    
    // Se o usuário responder "não", interromper o loop
    if (adicionarMais === "não") {
        break;  // Sai do loop principal
    }
    
    // Solicita ao usuário o nome do item a ser adicionado
    comida = prompt("Qual comida você deseja inserir?");
    
    // Solicita ao usuário a categoria do item (deve ser uma das opções pré-definidas)
    categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    
    // Verifica em qual categoria o item deve ser adicionado
    if (categoria === 'frutas') {
        frutas.push(comida);  // Adiciona a comida à lista de frutas
    } else if (categoria === 'laticínios') {
        laticinios.push(comida);  // Adiciona a comida à lista de laticínios
    } else if (categoria === 'doces') {
        doces.push(comida);  // Adiciona a comida à lista de doces
    } else if (categoria === 'congelados') {
        congelados.push(comida);  // Adiciona a comida à lista de congelados
    } else {
        alert("Essa categoria não foi pré-definida.");  // Mensagem de erro se a categoria não existir
    }
}

// Exibe a lista de compras final ao usuário
alert(`Lista de compras:\n  
  Frutas: ${frutas}\n  
  Laticínios: ${laticinios}\n  
  Doces: ${doces}\n  
  Congelados: ${congelados}`);