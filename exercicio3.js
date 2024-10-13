/* 

Neste exercício, você vai criar 5 funções. Você pode escolher entre usar function ou arrow function.:

* Soma: recebe dois números e retorna a soma

* Subtrai: recebe dois números e retorna a diferença

* Multiplica: recebe dois números e retorna o produto

* Divide: recebe dois números e retorna o quociente

* MostraResultado: recebe dois numeros e executa um console para cada operação, exibindo o nome da operação e o resultado

Seu console deve ter o formato:

console.log(`[nome_da_operacao] entre ${num1} e ${num2}`, fn(num1, num2))

*/

    // função de soma
    function Soma (num1, num2){

        const valor = num1+ num2;

        return valor;
    }

    // função de subtraçaõ
    function Subtracao (num1, num2){

        const valor = num1 - num2;

        return valor;
    }

    // função de divisão
    function Divisao (num1, num2){

        const valor = num1/ num2;

        return valor;
    }

    // função de multiplicação
    function Multiplicacao (num1, num2){

        const valor = num1 * num2;

        return valor;
    }

    // Função destinada a apresentar os resultados conforme orinetado no cabeção do exercicio.
    const MostraResultado = (num1,num2) => 

    {
        console.log(`Resultado da soma entre ${num1} e ${num2} = `, Soma(num1, num2)) ;
        console.log(`Resultado da subtração entre ${num1} e ${num2} = `, Subtracao(num1, num2)) ;
        console.log(`Resultado da Multiplicação entre ${num1} e ${num2} = `, Multiplicacao(num1, num2)) ;
        console.log(`Resultado da Divisão entre ${num1} e ${num2} = `, Divisao(num1, num2)) ;
    
    }


    MostraResultado (40,5); // declaração dos valores que serão calculados 
