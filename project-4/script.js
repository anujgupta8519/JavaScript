let randomNumber = Math.round(Math.random() * 100 + 1);
const previous = document.querySelector(".guesses");
const button = document.querySelector(".guessSubmit")
const userInput = document.querySelector(".guessField");
const remaining = document.querySelector(".lastResult");
const lowOrhig = document.querySelector(".lowOrhig");
const StartOver = document.querySelector(".resultParas")
const p = document.createElement('p');
let previousguess = [];
let numguess = 10;
let playGame = true;

if (playGame) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a Valid Number')
    } else if (guess < 1 || guess > 100) {
        alert("Please enter a number in range of 1 to 100")
    }else{
        previousguess.push(guess)
        if (numguess===11) {
            displayGuess(guess);
            displayMessage(`Game over and Random Number was ${randomNumber} and Want to Play Again click on below Button`)
            endgame();
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessage(`You guessed is right`)
        endgame();
    } else if (guess<randomNumber) {
        displayMessage(`Number is TOOO Low`)
    } else if (guess>randomNumber) {
        displayMessage(`Number is TOOO High`)
    }

}

function displayGuess(guess) {
  userInput.value = '';
  previous.innerHTML +=`${guess},`
  numguess++;
  remaining.innerHTML = `${11 - numguess}`
}

function displayMessage(message) {
lowOrhig.innerHTML = `<h3>${message}<h3/>`
}
function endgame() {
    userInput.value = '';
    userInput.setAttribute('disabled','')
    p.innerHTML=`<button class="button" id="newGame">Start new Game</button>`

    StartOver.appendChild(p);
    playGame=false;
    newGame();
}
function newGame() {
const newgame = document.querySelector('#newGame');
console.log()
newgame.addEventListener('click',(e)=>{
    randomNumber = Math.round(Math.random() * 100 + 1);
previousguess =[]
numguess=1;
previous.innerHTML='';
remaining.innerHTML = `${11 - numguess}`
userInput.removeAttribute('disabled')
StartOver.removeChild(p)
lowOrhig.innerHTML=''
playGame= true;
})

}
