document.addEventListener("DOMContentLoaded", function() {
    // Aguarda o DOM ser completamente carregado antes de executar o código

    var form = document.getElementById("myForm"); // Obtém o formulário pelo ID
    var overlay = document.getElementById("overlay"); // Obtém o overlay pelo ID
    var closeOverlay = document.getElementById("closeOverlay"); // Obtém o botão de fechar o overlay pelo ID

    form.addEventListener("submit", function(event) {
        // Adiciona um ouvinte de evento para quando o formulário for enviado

        var name = document.getElementById("name"); // Obtém o input de nome pelo ID
        var email = document.getElementById("email"); // Obtém o input de email pelo ID
        var gender = document.getElementById("gender"); // Obtém o input de gênero pelo ID
        var message = document.getElementById("message"); // Obtém o input de mensagem pelo ID

        if (!name.value || !email.value || !gender.value || !message.value) {
            // Verifica se algum campo do formulário está vazio
            alert("Por favor, preencha todos os campos."); // Exibe um alerta solicitando que todos os campos sejam preenchidos
            event.preventDefault(); // Impede o envio do formulário
        } else if (!validateEmail(email.value)) {
            // Verifica se o email inserido é válido
            alert("Por favor, insira um endereço de email válido."); // Exibe um alerta solicitando um email válido
            event.preventDefault(); // Impede o envio do formulário
        } else {
            event.preventDefault(); // Impede o envio real do formulário para demonstrar a confirmação
            overlay.style.display = "flex"; // Mostra o overlay
        }
    });

    closeOverlay.addEventListener("click", function() {
        // Adiciona um ouvinte de evento para quando o botão de fechar o overlay for clicado
        overlay.style.display = "none"; // Esconde o overlay
    });

    function validateEmail(email) {
        // Função para validar o formato do email
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validação de email
        return re.test(email); // Retorna true se o email passar na validação, false caso contrário
    }
});
