console.log("funcionou")
document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !gender || !message) {
        alert("Por favor, preencha todos os campos.");
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert("Por favor, insira um endereço de email válido.");
        document.getElementById("email").style.borderColor = "red";
        event.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
