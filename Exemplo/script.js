console.log("Arquivo JavaScript carregado.");

const botao = document.querySelector("#botao");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", function () {
  mensagem.textContent = "Parabéns! O JavaScript está funcionando!";
});