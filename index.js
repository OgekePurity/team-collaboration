// VARIABLES
const player1 = 'X'
const player2 = 'O'
const restartBtn = document.getElementById("restart-btn")
let currentPlayer = player1
// Initial board state
let boardState = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

// when cell is clicked function
function handleCellClick(index) {
    if (boardState[index] === " ") {
        boardState[index] = currentPlayer;
        renderBoard();
        if (checkWin(currentPlayer)) {
            console.log(currentPlayer + ' wins!');
            resetBoard();
        } else if (isBoardFull()) {
            console.log('It\'s a draw!');
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
//EVENTS
restartBtn.addEventListener("click", function() {
    clear()
 })
 

 document.addEventListener('DOMContentLoaded', () => {
     const restartBtn = document.getElementById("restart-btn");
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
 
     let currentIndex = 0; // Index of the current background image
 
     // Function to change background image
     function changeBackground() {
         body.style.backgroundImage = `url('${images[currentIndex]}')`;
         currentIndex = (currentIndex + 1) % images.length; // Move to the next image
     }
 
     // Initial background image
     changeBackground();
 
     // Restart button click handler
     restartBtn.addEventListener('click', () => {
         changeBackground(); // Change background image on button click
     });
 });
