

function eDiaOuEnoite(hora) // criação da função 
{
   let  periodo = ' '; // declarando um a variavel como vazaio para que seja atribuido um resultado

    if (hora <= 18) // definando o paramentro para considerar se é noturno
       periodo = 'É dia meu amor !';

    else
        return ' É de noite meu amor'; // retornando o resultado
  
}

    console.log (eDiaOuEnoite (19)); //passando o parametro para a função e exibindo oresultado 