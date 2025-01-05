const nomeInput = document.getElementById('nome');
const curtirBotao = document.getElementById('curtir');
const listaCurtidasParagrafo = document.getElementById('listaCurtidas');
let curtidores = new Set();

curtirBotao.addEventListener('click', () => {
    const nome = nomeInput.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome.");
        return;
    }

    if (!curtidores.has(nome)) {
        curtidores.add(nome);
        atualizarListaCurtidas();
    } else {
        alert("Você já curtiu!");
    }

    nomeInput.value = ""; // Limpa o campo de texto
});

function atualizarListaCurtidas() {
    const totalCurtidas = curtidores.size;

    if (totalCurtidas === 0) {
        listaCurtidasParagrafo.textContent = "Ninguém curtiu";
    } else if (totalCurtidas === 1) {
        listaCurtidasParagrafo.textContent = `${[...curtidores][0]} curtiu`;
    } else if (totalCurtidas === 2) {
        listaCurtidasParagrafo.textContent = `${[...curtidores].join(' e ')} curtiram`;
    } else {
        listaCurtidasParagrafo.textContent = `${[...curtidores].slice(0, 2).join(', ')} e mais ${totalCurtidas - 2} pessoas curtiram`;
    }
}
