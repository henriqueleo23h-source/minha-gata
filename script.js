
const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");

// botão SIM abre o vídeo do YouTube
if (botaoSim) {
  botaoSim.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=XfbyFtDtrWs";
  });
}

// botão NÃO foge do mouse
if (botaoNao) {
  botaoNao.addEventListener("mouseover", function () {
    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const x = Math.random() * largura;
    const y = Math.random() * altura;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
  });
}
