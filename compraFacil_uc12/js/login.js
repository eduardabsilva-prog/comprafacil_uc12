

// Selecionar os elementos
const senha = document.getElementById("senha");
const mostrarSenha = document.getElementById("mostrarSenha");

// Mostrar ou ocultar senha
mostrarSenha.addEventListener("click", function () {

    if (senha.type === "password") {

        senha.type = "text";

        mostrarSenha.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

        mostrarSenha.setAttribute("aria-label", "Ocultar senha");

    } else {

        senha.type = "password";

        mostrarSenha.innerHTML = '<i class="fa-solid fa-eye"></i>';

        mostrarSenha.setAttribute("aria-label", "Mostrar senha");

    }

});
