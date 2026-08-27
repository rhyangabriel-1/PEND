let plantaSelecionada = "";

const milho = document.getElementById("milho");
const tomate = document.getElementById("tomate");
const cenoura = document.getElementById("cenoura");
const alface = document.getElementById("alface");

const canteiro = document.getElementById("canteiro");
const mensagem = document.getElementById("mensagem");

milho.addEventListener("dragstart", () => {
    plantaSelecionada = "🌽";
});

tomate.addEventListener("dragstart", () => {
    plantaSelecionada = "🍅";
});

cenoura.addEventListener("dragstart", () => {
    plantaSelecionada = "🥕";
});

alface.addEventListener("dragstart", () => {
    plantaSelecionada = "🥬";
});

canteiro.addEventListener("dragover", (e) => {
    e.preventDefault();
});

canteiro.addEventListener("drop", () => {
    canteiro.textContent = plantaSelecionada;
    mensagem.textContent = "Plantação realizada com sucesso!";
});