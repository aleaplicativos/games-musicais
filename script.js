const games = [
  {link: "https://aleaplicativos.github.io/guitarrascoloridas/"},
  {link: "https://d21u3ic0kp9e91.cloudfront.net/choir/04/index.html"}, 
  {link: "https://aleaplicativos.github.io/portalinterativo/"},
  {link: "https://aleaplicativos.github.io/3taint/"},
      
  // Adicione quantos jogos desejar nesta lista
];

const gameContainer = document.getElementById("game-container");
const gameWrapper = document.getElementById("game-wrapper");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

let currentGameIndex = -1;

function loadGame() {
  const randomIndex = Math.floor(Math.random() * games.length);
  currentGameIndex = randomIndex;
  gameWrapper.innerHTML = `<iframe src="${games[currentGameIndex].link}" width="100%" height="100%"></iframe>`;
}

function navigateToPreviousGame() {
  if (currentGameIndex === 0) {
    return;
  }

  currentGameIndex--;
  loadGame();
}

function navigateToNextGame() {
  if (currentGameIndex === games.length - 1) {
    return;
  }

  currentGameIndex++;
  loadGame();
}

previousButton.addEventListener("click", navigateToPreviousGame);
nextButton.addEventListener("click", navigateToNextGame);

loadGame();
