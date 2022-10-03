const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-board]");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const winningMessage = document.querySelector("[data-winning-message]");
const restartButton = document.querySelector("[data-restart-button]");

//variavel responsavel pelo turno de jogadores
let isCircleTurn;

//combinações das vitórias possíveis
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//função responsavel por iniciar o jogo
const startGame = () => {
  isCircleTurn = false;
  //para cada celula na variavel cellElements
  for (const cell of cellElements) {
    cell.classList.remove("circle");
    cell.classList.remove("x");
    //remove escuta de evento "clique"
    cell.removeEventListener("click", handleClick);
    //adiciona uma escuta de clique com execução única
    cell.addEventListener("click", handleClick, { once: true }); //o once:true é para escutar o evento só uma vez
  }

  setBoardHoverClass();
  winningMessage.classList.remove("show-winning-message");
};

//função fim de jogo, passando um parametro de empate
const endGame = (isDraw) => {
  if (isDraw) {
    //se empate o texto da mensagem de vitória muda, caso contrario o resultado muda de acordo com a variavel isCircleTurn
    winningMessageTextElement.innerText = "Empate!";
  } else {
    winningMessageTextElement.innerText = isCircleTurn
      ? "O venceu!"
      : "X venceu";
  }

  winningMessage.classList.add("show-winning-message");
};

//função confere se houve vitória, verifica se houve combinação no "winningCombinations"
const checkForWin = (currentPlayer) => {
  return winningCombinations.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentPlayer); //classList é uma propriedade de javascript que lista as classes das celulas cellElements
    });
  });
};

const checkForDraw = () => {
  return [...cellElements].every((cell) => {
    // os 3 pontos é pra voltar nas funções, como ../ do prompt
    return cell.classList.contains("x") || cell.classList.contains("circle");
  });
};

const placeMark = (cell, classToAdd) => {
  cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
  board.classList.remove("circle");
  board.classList.remove("x");

  if (isCircleTurn) {
    board.classList.add("circle");
  } else {
    board.classList.add("x");
  }
};

const swapTurns = () => {
  isCircleTurn = !isCircleTurn;

  setBoardHoverClass();
};

const handleClick = (e) => {
  //colocar a marca (x ou circulo)
  const cell = e.target;
  const classToAdd = isCircleTurn ? "circle" : "x";

  placeMark(cell, classToAdd);

  //verificar por vitória
  const isWin = checkForWin(classToAdd);

  //verificar por empate
  const isDraw = checkForDraw();

  if (isWin) {
    endGame(false);
  } else if (isDraw) {
    endGame(true);
  } else {
    //mudar simbolo
    swapTurns();
  }
};

startGame();

restartButton.addEventListener("click", startGame);
