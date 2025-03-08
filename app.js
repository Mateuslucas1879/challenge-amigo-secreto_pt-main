//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let pessoas = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    pessoas.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";  // Limpa a lista existente

    pessoas.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (pessoas.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    let sorteado = pessoas[Math.floor(Math.random() * pessoas.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 O amigo secreto sorteado é: <strong>${sorteado}</strong>! 🎉</p>`;
}
