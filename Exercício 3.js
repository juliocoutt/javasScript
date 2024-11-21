/* Crie um sistema simples para gerenciar o estoque de uma livraria. 
O sistema deve permitir adicionar livros ao estoque, remover livros, 
atualizar a quantidade de livros e listar todos os livros disponíveis. */

// 1 - Definir um array de objetos para armazenar os livros no estoque
const estoque_de_livros = [ // todos os livros iniciais estão acrecidos no estoque da biblioteca conforme esperado
  { ISB: 8589858585, titulo: "Como eu era antes de você", autor: "Leo Santana", quantidade: 78 },
  { ISB: 8589858586, titulo: "Furacão Anitta", autor: "Leo Dias", quantidade: 45 },
  { ISB: 8589858587, titulo: "Posições do Kama Sutra: Aprenda sobre prazer", autor: "Mariza Monte", quantidade: 21 },
  { ISB: 8589858588, titulo: "De mal a pior: Inteligência emocional como chave do sucesso", autor: "Julio Couto", quantidade: 42 }
];

// 2 - Funções para gerenciar o estoque:

/* Adicionar um novo livro ao estoque  verificando se o livro já esta cadastrado no estoque da biblioteca, caso não esteja ele será adcionado*/
function adicionarLivro(ISB, titulo, autor, quantidade) { 
  const livroExistente = estoque_de_livros.find(livro => livro.ISB === ISB || livro.titulo === titulo);
  if (livroExistente) { // verificando se o livro está no estoque atrávez de uma condicional
      console.log(`O livro "${titulo}" já existe no estoque.`);
  } else {
      estoque_de_livros.push({ ISB, titulo, autor, quantidade }); // não estando ele é adcionando no estoque dando um push 
      console.log(`Livro "${titulo}" adicionado ao estoque com sucesso!`);
  }
}

/* Remover um livro do estoque pelo título */
function removerLivro(titulo) { // função criada com objetivo de realizar a remoção do livro pelo titulo
  const indice = estoque_de_livros.findIndex(livro => livro.titulo === titulo);
  if (indice !== -1) {
      estoque_de_livros.splice(indice, 1);
      console.log(`Livro "${titulo}" removido do estoque.`);
  } else {
      console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
  }
}

/* Atualizar a quantidade de um livro no estoque */
function atualizarQuantidade(titulo, novaQuantidade) { // atulizando a quantidade de acorod com os livros que já estão cadastradado no sistema 
  const livro = estoque_de_livros.find(livro => livro.titulo === titulo);
  if (livro) {
      livro.quantidade = novaQuantidade;
      console.log(`A quantidade do livro "${titulo}" foi atualizada para ${novaQuantidade}.`);
  } else {
      console.log(`O livro "${titulo}" não foi encontrado no estoque.`); // informa ao usuario que aquele titulo não encontra-se cadastrado
  }
}

/* Listar todos os livros no estoque */
function listarLivros() { // apresenta todos os livros contidos no sistema 
  if (estoque_de_livros.length === 0) {
      console.log("O estoque está vazio.");
  } else {
      console.log("Livros disponíveis no estoque:");
      estoque_de_livros.forEach(livro => {
          console.log(`ISB: ${livro.ISB}, Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
      });
  }
}
