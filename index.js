// VARIABLES
const body = document.body;
const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg'
];
let currentPlayer = "X";
let gameBoard = Array(9).fill(''); // Initialize with empty strings
let gameActive = true;
const cells = Array.from(document.querySelectorAll(".cell"));
const restartBtn = document.getElementById("restart-btn"); // Get the single element
const playerTurnEl = document.getElementById("PT-el");
const rollingEl = document.getElementById("rolling-el");
const rollingContainerEl = document.getElementById("rollingContainer-el");

// Set initial animation
playerTurnEl.classList.add(`player-${currentPlayer}`);

// FUNCTIONS
function cellClicked(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updatePlayerTurnMessage();
    }
}

function updatePlayerTurnMessage() {
    const message = `Player ${currentPlayer}, your turn`;
    playerTurnEl.innerHTML = message;
    playerTurnEl.classList.remove(`player-X`, `player-O`);
    rollingEl.classList.remove(`rolling-X`, `rolling-O`);
    playerTurnEl.classList.add(`player-${currentPlayer}`);
    rollingEl.classList.add(`rolling-${currentPlayer}`);
}

function clear() {
    gameBoard.fill(''); // Reset the game board
    cells.forEach(cell => cell.textContent = '');
}

function checkWin() {
    // Implement win condition logic here
    // For now, just console log a message
    console.log("Win condition not implemented yet!");
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 6],
    [0, 4, 8],
    [0, 1, 2],
    [2, 4, 6]
];

// EVENTS
let currentIndex = 0; // Index of the current background image

restartBtn.addEventListener("click", () => {
    clear();
    changeBackground();
});

function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length; // Loop back to 0 when reaching the end
    body.style.backgroundImage = `url('${images[currentIndex]}')`;
    // Add a smooth transition effect
    body.style.transition = "background-image 0.5s ease-in-out";
}