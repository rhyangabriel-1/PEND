const formulario = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    mensagem.style.color = "green";
    mensagem.textContent =
        `Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`;
});