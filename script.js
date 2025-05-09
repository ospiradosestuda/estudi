// Cronômetro
let tempo = 30 * 60; // 30 minutos
let descanso = 10 * 60; // 10 minutos
let estudando = true;
let intervalo;

document.getElementById('iniciar').addEventListener('click', iniciar);
document.getElementById('pausar').addEventListener('click', pausar);
document.getElementById('resetar').addEventListener('click', resetar);

function iniciar() {
  intervalo = setInterval(() => {
    if (estudando) {
      tempo--;
      if (tempo <= 0) {
        estudando = false;
        tempo = descanso;
      }
    } else {
      tempo--;
      if (tempo <= 0) {
        estudando = true;
        tempo = 30 * 60;
      }
    }
    atualizarTempo();
  }, 1000);
}

function pausar() {
  clearInterval(intervalo);
}

function resetar() {
  clearInterval(intervalo);
  tempo = 30 * 60;
  estudando = true;
}

// Estatísticas
let tempoEstudado = 0;
let tempoDescanso = 0;

// Calendário
const dataAtual = new Date();
document.getElementById('data-atual').textContent = dataAtual.toLocaleDateString();

// Relógio
setInterval(() => {
  const horaAtual = new Date();
  document.getElementById('hora-atual').textContent = horaAtual.toLocaleTimeString();
}, 1000);

// Prova PMCE
const dataProva = new Date('2025-08-03');
const diasParaProva = Math.floor((dataProva - dataAtual) / (1000 * 60 * 60 * 24));
document.getElementById('dias-para-prova').textContent = `Dias para a prova: ${diasParaProva}`;

// Atualizar tempo
function atualizarTempo() {
  const tempoElement = document.getElementById('tempo');
  const minutos = Math.floor(
```
