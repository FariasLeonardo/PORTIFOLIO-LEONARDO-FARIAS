/* =========================================
   BOTÃO TEMA
========================================= */

const temaBtn = document.getElementById("tema-btn");

/* RECUPERAR TEMA SALVO */

if(localStorage.getItem("tema") === "dark"){

    document.body.classList.add("dark");

    temaBtn.textContent = "☀️";
}

/* TROCAR TEMA */

temaBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        temaBtn.textContent = "☀️";

        localStorage.setItem("tema", "dark");

    }else{

        temaBtn.textContent = "🌙";

        localStorage.setItem("tema", "light");
    }
});

/* =========================================
   FORMULÁRIO
========================================= */

const formulario =
    document.getElementById("formulario");

const statusMensagem =
    document.getElementById("mensagem-status");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const nome =
        document.getElementById("nome")
        .value
        .trim();

    const email =
        document.getElementById("email")
        .value
        .trim();

    const mensagem =
        document.getElementById("mensagem")
        .value
        .trim();

    /* VALIDAR CAMPOS */

    if(nome === "" || email === "" || mensagem === ""){

        statusMensagem.textContent =
            "Preencha todos os campos!";

        statusMensagem.style.color = "#ef4444";

        return;
    }

    /* VALIDAR EMAIL */

    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValido.test(email)){

        statusMensagem.textContent =
            "Digite um e-mail válido!";

        statusMensagem.style.color = "#ef4444";

        return;
    }

    /* SUCESSO */

    statusMensagem.textContent =
        "Mensagem enviada com sucesso!";

    statusMensagem.style.color = "#16a34a";

    /* LIMPAR FORMULÁRIO */

    formulario.reset();
});