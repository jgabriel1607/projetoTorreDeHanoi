// Torres
let torre1 = document.querySelector("#torre1");
let torre2 = document.querySelector("#torre2");
let torre3 = document.querySelector("#torre3");

// Colunas
let coluna1 = document.querySelector("#coluna1");
let coluna2 = document.querySelector("#coluna2");
let coluna3 = document.querySelector("#coluna3");

// Discos
let disco1 = document.querySelector("#disco1");
let disco2 = document.querySelector("#disco2");
let disco3 = document.querySelector("#disco3");
let disco4 = document.querySelector("#disco4");

// Mensagens na Tela
let movimentosSpan = document.querySelector(".movimentos");
let mensagemSpan = document.querySelector(".mensagemSpan");
// Botão
let botao = document.querySelector("#botaoReset");

// Variáveis
let movimentos = 0;
let discoAtual;
let destino = false;

// Funções

// Identificando Cliques nos Elementos
torre1.addEventListener("click", clicou);
torre2.addEventListener("click", clicou);
torre3.addEventListener("click", clicou);
botao.addEventListener("click", clicouBotao);

// Resetando o Jogo
function clicouBotao() {
  movimentos = 0;
  movimentosSpan.innerText = movimentos;
  coluna1.appendChild(disco1);
  coluna1.appendChild(disco2);
  coluna1.appendChild(disco3);
  coluna1.appendChild(disco4);
  mostraMensagem("", 2);
}

// Identificando o Clique das Torres
function clicou(event) {
  let target = event.currentTarget;
  let targetId = target.id;
  movendoDiscos(targetId);
}

function contandoMovimentos() {
  movimentos++;
  movimentosSpan.innerText = movimentos;
}

// Formatando Nome do Disco
function formataNome(disco) {
  let novoNome = "";
  novoNome = disco[0].toUpperCase();
  for (let c = 1; c < disco.length; c++) {
    novoNome += disco[c];
    if (c > 3) {
      novoNome += " ";
    }
  }
  return novoNome;
}

// Mostrando Mensagens na Tela
function mostraMensagem(disco, codigo) {
  let nomeDisco;
  if (disco != "") {
    nomeDisco = formataNome(disco);
    if (codigo === 0) {
      mensagemSpan.innerText = "Você Pegou o " + nomeDisco;
    } else if (codigo === 1) {
      mensagemSpan.innerText = "O " + nomeDisco + " não pode ir aí!";
    }
  } else {
    if (codigo === 2) {
      mensagemSpan.innerText = "Jogo Resetado!";
    }
  }
}

// Movendo Discos
function movendoDiscos(targetId) {
  // Coluna 1
  if (targetId === torre1.id) {
    if (coluna1.childElementCount > 0 && !destino) {
      discoAtual = coluna1.lastElementChild;
      destino = true;
      mostraMensagem(discoAtual.id, 0);
    } else if (
      coluna1.childElementCount > 0 &&
      destino &&
      discoAtual.clientWidth < coluna1.lastElementChild.clientWidth
    ) {
      coluna1.appendChild(discoAtual);
      destino = false;
      contandoMovimentos();
    } else if (
      coluna1.childElementCount > 0 &&
      destino &&
      discoAtual.clientWidth > coluna1.lastElementChild.clientWidth
    ) {
      mostraMensagem(discoAtual.id, 1);
      discoAtual = "";
      destino = false;
    } else if (coluna1.childElementCount < 1 && destino) {
      coluna1.appendChild(discoAtual);
      destino = false;
      contandoMovimentos();
    }
  }
  // Coluna 2
  if (targetId === torre2.id) {
    if (coluna2.childElementCount > 0 && !destino) {
      discoAtual = coluna2.lastElementChild;
      destino = true;
      mostraMensagem(discoAtual.id, 0);
    } else if (
      coluna2.childElementCount > 0 &&
      destino &&
      discoAtual.clientWidth < coluna2.lastElementChild.clientWidth
    ) {
      coluna2.appendChild(discoAtual);
      destino = false;
      contandoMovimentos();
    } else if (
      coluna2.childElementCount > 0 &&
      destino &&
      discoAtual.clientWidth > coluna2.lastElementChild.clientWidth
    ) {
      mostraMensagem(discoAtual.id, 1);
      discoAtual = "";
      destino = false;
    } else if (coluna2.childElementCount < 1 && destino) {
      coluna2.appendChild(discoAtual);
      destino = false;
      contandoMovimentos();
    }
  }
  // Coluna 3
  if (targetId === torre3.id) {
    if (coluna3.childElementCount > 0 && !destino) {
      discoAtual = coluna3.lastElementChild;
      destino = true;
      mostraMensagem(discoAtual.id, 0);
    } else if (
      coluna3.childElementCount > 0 &&
      destino &&
      discoAtual.clientWidth < coluna3.lastElementChild.clientWidth
    ) {
      coluna3.appendChild(discoAtual);
      destino = false;
      contandoMovimentos();
    } else if (
      coluna3.childElementCount > 0 &&
      destino &&
      discoAtual.clientWidth > coluna3.lastElementChild.clientWidth
    ) {
      mostraMensagem(discoAtual.id, 1);
      discoAtual = "";
      destino = false;
    } else if (coluna3.childElementCount < 1 && destino) {
      coluna3.appendChild(discoAtual);
      destino = false;
      contandoMovimentos();
    }
  }
  // Mensagem de Fim de Jogo
  setTimeout(() => {
    if (coluna3.childElementCount > 3 && !destino) {
      mensagemSpan.innerText = "FIM DE JOGO!";
    }
  }, 2000);
}
