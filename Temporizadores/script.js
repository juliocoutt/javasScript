// Defina a data futura para a contagem regressiva
const dataFutura = new Date('2025-01-10T00:00:00'); // Substitua com a data de sua escolha

// Função para calcular o tempo restante
function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const distancia = dataFutura - agora;

    // Calculando os dias, horas, minutos e segundos restantes
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    return { dias, horas, minutos, segundos };
}

// Função para atualizar o temporizador na tela
function atualizarTemporizador() {
    const tempoRestante = calcularTempoRestante(dataFutura);

    // Exibindo os valores na tela
    document.getElementById('dias').innerHTML = `${tempoRestante.dias} dias`;
    document.getElementById('horas').innerHTML = `${tempoRestante.horas} horas`;
    document.getElementById('minutos').innerHTML = `${tempoRestante.minutos} minutos`;
    document.getElementById('segundos').innerHTML = `${tempoRestante.segundos} segundos`;

    // Se o temporizador terminar
    if (tempoRestante.dias <= 0 && tempoRestante.horas <= 0 && tempoRestante.minutos <= 0 && tempoRestante.segundos <= 0) {
        clearInterval(intervalo);
        document.getElementById('temporizador').innerHTML = "Tempo esgotado!";
    }
}

// Atualiza o temporizador a cada segundo
const intervalo = setInterval(atualizarTemporizador, 1000);

// Inicializa o temporizador imediatamente
atualizarTemporizador();
