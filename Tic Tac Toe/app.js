let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('#reset-btn');
let newGameButton = document.querySelector('#new-btn');
let messageContainer = document.querySelector('.mess-container');
let messageText = document.querySelector('#mess');

let turnO = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    messageContainer.classList.add('hide');
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
        box.classList.remove('o', 'x');
    }
}
boxes.forEach((box) =>{
    box.addEventListener('click', () => {
        if(turnO){
            box.innerHTML = 'O';
            box.classList.add('o');
            box.classList.remove('x');
            turnO = false;
        }
        else{
            box.innerHTML = 'X';
            box.classList.add('x');
            box.classList.remove('o');
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const showWinner = (winner) => {
    messageContainer.classList.remove('hide');
    messageContainer.innerHTML = `
        <span id="mess">Winner is ${winner}</span>
        <button id="popup-new-btn">New Game</button>
    `;
    disableBoxes();
    document.querySelector('#popup-new-btn').addEventListener('click', resetGame);
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const checkWinner = () =>{
    for(let pattern of winningCombinations){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != '' && pos2 != '' && pos3 != ''){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
                
            }
        }
    }
}

newGameButton.addEventListener('click', resetGame);
resetButton.addEventListener('click', resetGame);