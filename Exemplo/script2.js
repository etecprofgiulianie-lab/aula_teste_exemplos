
const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome");
const tecnologia = document.querySelector("#tecnologia");
const descricao = document.querySelector("#descricao");
const resultado = document.querySelector("#resultado");
const contador = document.querySelector("#contador");


let quantidade = 0;


const tecnologias = {
  html: {
    nome: "HTML",
    explicacao: "Organiza a estrutura e o significado do conteúdo."
  },

  css: {
    nome: "CSS",
    explicacao: "Define cores, fontes, espaçamentos e layouts."
  },

  javascript: {
    nome: "JavaScript",
    explicacao: "Implementa lógica, comportamentos e interatividade."
  }
};


function atualizarDescricao() {
  const escolha = tecnologias[tecnologia.value];

  descricao.textContent = escolha.explicacao;
}


atualizarDescricao();

tecnologia.addEventListener("change", atualizarDescricao);

formulario.addEventListener("submit", function (evento) {
 
  evento.preventDefault();

  
  const nome = campoNome.value.trim();

  
  if (nome === "") {
    resultado.textContent = "Digite seu nome para continuar.";
    campoNome.focus();
    return;
  }

  const escolha = tecnologias[tecnologia.value];

  
  resultado.textContent =
    `Olá, ${nome}! Você escolheu aprender ${escolha.nome}. ` +
    escolha.explicacao;

  
  quantidade = quantidade + 1;
  contador.textContent = quantidade;
});