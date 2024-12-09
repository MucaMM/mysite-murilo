// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o formulário pelo ID
    const form = document.getElementById("contactForm");
    // Seleciona a mensagem de sucesso pelo ID
    const successMessage = document.getElementById("successMessage");

    // Adiciona um evento de submissão ao formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        successMessage.classList.remove("hidden"); // Exibe a mensagem de sucesso
        form.reset(); // Limpa os campos do formulário
    });
});
