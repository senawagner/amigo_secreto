let amigos = [];

// Adicionar nome na lista
function adicionarAmigo() {
  const input = document.getElementById("nome-amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Este nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarListaAmigos();
}

// Atualizar a lista na tela
function atualizarListaAmigos() {
  const lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(item);
  });
}

// Embaralhar lista e sortear amigos
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear.");
    return;
  }

  let sorteio = [...amigos]; // Copia a lista original
  let resultado = {};
  
  do {
    sorteio = embaralharArray(sorteio);
  } while (sorteio.some((amigo, i) => amigo === amigos[i]));

  amigos.forEach((amigo, i) => {
    resultado[amigo] = sorteio[i];
  });

  exibirResultado(resultado);
}

// Função para embaralhar um array (algoritmo Fisher-Yates)
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Exibir o resultado do sorteio
function exibirResultado(resultado) {
    const selectAmigo = document.getElementById('selecionar-amigo');
    const amigoSorteadoDiv = document.getElementById('amigo-sorteado');

    // Limpa o select e adiciona as opções
    selectAmigo.innerHTML = '<option value="">Selecione um amigo</option>';
    for (const amigo of Object.keys(resultado)) {
        const option = document.createElement('option');
        option.value = amigo;
        option.textContent = amigo;
        selectAmigo.appendChild(option);
    }

    // Atualiza o amigo sorteado ao selecionar
    selectAmigo.addEventListener('change', () => {
        const selecionado = selectAmigo.value;
        if (selecionado) {
            amigoSorteadoDiv.textContent = `Amigo sorteado: ${resultado[selecionado]}`;
            // Efeito de confete
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            amigoSorteadoDiv.textContent = '';
        }
    });
}

// Limpar a lista de amigos
function limparLista() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("resultado-sorteio").innerHTML = "";
}
