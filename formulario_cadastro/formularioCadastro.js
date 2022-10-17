/* submit = envio
get -> carregar dados
post -> envio de dados

aspas simples e duplas simbolizam a mesma coisa, mas é melhor 
usar aspas duplas (""), porque os navegadores leêm mais fácil
expressão regular -> São padrões usados para combinar ou conferir 
caracteres em string

frameworks - css, js
font-awesome
bootstrap
google fonts
*/
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //a funcao checkInputs() esta sendo chamada primeiro,
  //porque este evento de escuta sera o ultimo a ser executado
  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  //verificações
  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSucessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido");
  } else {
    setSucessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres");
  } else {
    setSucessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSucessFor(passwordConfirmation);
  }
  // formControls pega todos os elementos da classe form-control
  const formControls = form.querySelectorAll(".form-control");
  // a constante formIsValid é do tipo booleana e ela verifica todos os campos form control
  //se estão com a classe form-control sucess, se tiver é válido ele retorna o valor true (1), se não
  //ela não retorna o valor false (0)
  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control sucess";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  //essa contante pega o elemento pai, a tag a qual ela pertence, a tag mais em cima na hierarquia
  const formControl = input.parentElement;
  //
  const small = formControl.querySelector("small");

  //adiciona mensagem de erro
  small.innerText = message;

  //adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;

  //adicionar a classe de sucesso
  formControl.className = "form-control sucess";
}

function checkEmail(email) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(
    email
  );
}
