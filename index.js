// VARIABLES
let currentPlayer = "X";
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let cells = Array.from(document.querySelectorAll(".cell"))
let restartBtn = document.querySelector("#restart-btn");
let playerTurnEl = document.getElementById("PT-el")
let rollingEl = document.getElementById("rolling-el")
let rollingContainerEl = document.getElementById("rollingContainer-el")
playerTurnEl.classList.add(`player-${currentPlayer}`)//set animation to x
playerTurnEl.innerHTML = `player x, your turn`

const body = document.body
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
    'img10.jpg',
    'img11.jpg',
    'img12.jpg',
]


//FUNCTIONS
function cellClicked(cellIndex) {
    if (gameBoard[cellIndex] === '' && gameActive === true) {
        gameBoard[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (currentPlayer === "X") {
            message = `player x, your turn`
        } else {
            message = `player o, your turn`
        }
        playerTurnEl.innerHTML = message
    }
    playerTurnEl.classList.remove('player-X');
    playerTurnEl.classList.remove('player-O');
    rollingEl.classList.remove('rolling-X');
    rollingEl.classList.remove('rolling-O');
    console.log(currentPlayer)
    console.log(playerTurnEl.classList)
    playerTurnEl.classList.add(`player-${currentPlayer}`)
    rollingEl.classList.add(`rolling-${currentPlayer}`)
}

function clear() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    for (let i=0; i<cells.length; i++) {
        cells[i].textContent = '';
    }
}

function bgimage() {
    let randomImage = images[Math.floor(Math.random() * images.length)]
    body.style.backgroundImage = `url(./${randomImage})`
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

//EVENTS
restartBtn.addEventListener("click", function() {
    clear()
    bgimage()
 })
 
