//menu toggle
let Menutoggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

Menutoggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});

//add hovered class in selected list item
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
{
}
document.querySelector(".theme-toggler").addEventListener("click", () => {
  document.querySelector(".sun-logo").classList.toggle("animate-sun");
  document.querySelector(".moon-logo").classList.toggle("animate-moon");
  document.querySelector("body").classList.toggle("dark-theme-variables");
});
// **********************************************************************************************//
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
    "<td>" +
    order.price +
    "</td>" +
    ("<td class=" +
      // aqui o nome da classe vai mudar de acordo com resultado dos operadores ternários, que são if's e else's
      (order.paymentStatus == "Vencido"
        ? // aqui muda o nome da classe para danger
          "danger"
        : order.paymentStatus == "Pago"
        ? // aqui muda o nome da classe para warning
          "success"
        : order.paymentStatus == "reembolsado"
        ? // aqui muda o nome da classe para warning
          "warning"
        : // aqui muda o nome da classe para primary
          "primary") +
      ">" +
      order.paymentStatus +
      "</td>") +
    ("<td class=" +
      // aqui o nome da classe vai mudar de acordo com resultado dos operadores ternários, que são if's e else's
      (order.shipping == "Em Progresso"
        ? // aqui muda o nome da classe para danger
          "status-inprogress"
        : order.shipping == "Pendente"
        ? // aqui muda o nome da classe para warning
          "status-pending"
        : order.shipping == "Entregue"
        ? // aqui muda o nome da classe para warning
          "status-delivered"
        : order.shipping == "reembolsado"
        ? // aqui muda o nome da classe para warning
          "status-return"
        : // aqui muda o nome da classe para primary
          "primary") +
      ">" +
      order.shipping +
      "</td>");

  linha.innerHTML = conteudo;
  // appendChild serve para adicionar um elemento filho ao elemento, o append só adciona, mas não se sabe quem o pai daquele
  // elemento, appendChild diz Explicitamente que é o filho, aqui esta adicionando o elemento linha no table
  table.appendChild(linha);
});
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
let updates = document.querySelector(".recentCustomers");
// let novoCliente = document.createElement("tr");
// let celulaImagem = document.createElement("td");
// let imagemPerfil = document.createElement("div");
// let mensagem = document.createElement("p");
// imagemPerfil.classList.add("imgBox");
// updates.appendChild(novoCliente);
// celulaImagem.appendChild(imagemPerfil);

let clienteNovo = "<tr>" + "<td>" + "<div>" + "<img>";
"</div>" +
  "</td>" +
  "<td>" +
  "<p>" +
  "<b>" +
  "Fulano" +
  "</b>" +
  "Recebeu alguma coisa" +
  "</p>" +
  "<small>" +
  "Há um tempo já" +
  "</small>" +
  "</td>" +
  "</tr>";
// ================================ RASCUNHO ================================//
//   <tr>
//     <td width="60">
//       <div class="imgBox">
//         <img
//           src="../imagens/daniel-deiev-97PYLquaudo-unsplash.jpg"
//           alt=""
//         />
//       </div>
//     </td>
//     <td class="message">
//       <p>
//         <b>Mike Tyson</b> Recebeu pedido:
//       </p>
//       <small class="text-muted">Há 2 minutos atrás</small>
//     </td>
//   </tr>
