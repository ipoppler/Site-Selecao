function ganhou(){
    alert("🏆 O Brasil venceu!");

    confetti({
        particleCount: 200,
        spread: 120
    });
}

let mensagem = document.getElementById("mensagem");

function enviar(event) {
    event.preventDefault();

    mensagem.textContent = "⤷ ゛Obrigado pela mensagem! Rumo ao hexa! 💪ˎˊ˗";
}

function mostrar2026() {
    let secao = document.getElementById("a2026");

    if (secao.style.display === "flex") {
        secao.style.display = "none";
    } else {
        secao.style.display = "flex";
    }
}