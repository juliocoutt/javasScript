// Mudar o texto do título
document.querySelector('h1').textContent = 'Coutt Doces - Sabor Inconfundível';

// Alterar o estilo dos itens da lista
const listItems = document.querySelectorAll('ul li');
listItems.forEach(item => {
    item.style.backgroundColor = '#ffe4b5';  // Muda a cor de fundo dos itens
    item.style.fontSize = '1.4rem';           // Aumenta o tamanho da fonte
    item.style.fontWeight = 'bold';           // Deixa o texto em negrito
});

// Adicionar um estilo diretamente aos parágrafos
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(p => {
    p.style.backgroundColor = '#fff5ee';  // Muda o fundo para uma cor clara
    p.style.fontStyle = 'italic';          // Torna o texto itálico
});

// Alterar o texto do botão
document.querySelector('button').textContent = 'Fale Conosco';
