const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//MOSTRAR SIDEBAR
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});
//FECHAR SIDEBAR
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});
//MUDAR TEMA
themeToggler.addEventListener("click", () => {
  // o toggle serve pra trocar o estado do elemento como um interruptor
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});
//PREENCHER PEDIDOS NA TABELA
let table = document.querySelector("table tbody");
Orders.forEach((order) => {
  // cria uma linha na tabela
  let linha = document.createElement("tr");
  console.log(order);

  let conteudo =
    "<td>" +
    order.productName +
    "</td>" +
    "<td>" +
    order.productNumber +
    "</td>" +
    ("<td class=" +
      // aqui o nome da classe vai mudar de acordo com resultado dos operadores ternários, que são if's e else's
      (order.shipping == "Negado"
        ? // aqui muda o nome da classe para danger
          "danger"
        : order.shipping == "Pendente"
        ? // aqui muda o nome da classe para warning
          "warning"
        : // aqui muda o nome da classe para primary
          "primary") +
      ">" +
      order.shipping +
      "</td>") +
    '<td class="primary">' +
    "Detalhes" +
    "</td>";

  linha.innerHTML = conteudo;
  // appendChild serve para adicionar um elemento filho ao elemento, o append só adciona, mas não se sabe quem o pai daquele
  // elemento, appendChild diz Explicitamente que é o filho, aqui esta adicionando o elemento linha no table
  table.appendChild(linha);
});
