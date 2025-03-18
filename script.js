// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, insira um nome.');
    return;
  }

  amigos.push(nome);
  input.value = ''; // Limpa o campo de entrada
  atualizarListaAmigos();
}

// Função para atualizar a lista de amigos exibida na página
function atualizarListaAmigos() {
  const lista = document.getElementById('lista-amigos');
  lista.innerHTML = ''; // Limpa a lista atual

  amigos.forEach((amigo, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(item);
  });
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Por favor, adicione pelo menos um amigo antes de sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById('resultado-sorteio');
  resultado.textContent = `O amigo secreto é: ${amigoSorteado}`;
}
