// ab random number k liye apn math.random ka use krte h 

// console.log(parseInt(Math.random()*100+1));

let randomNumber= parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');

const remaining = document.querySelector('.lastResult');

const lowOrHI = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [] // ye ek array hoga jb koi value use krege to uske dikhana h ki phle use kr chuke 
let numGuess = 1 // start with 1 and then end with 10 

let playGame = true // jb bhi aise game design krege tb vo apn ko allow krta h game khlene k liye 


// sbse phle checking that you are able to play or not 
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault() // iska mtlb h ki value ko server pr na jane dena
        const guess=parseInt(userInput.value) //isse apn guess k tor pr value input kr rhe h interger m 
        validateGuess(guess) //or yha pr next k tor pr isme pass kr diya 
    })
}

// phla fucntion for validate guess 
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')
    } else if(guess < 1){
        alert('please enter a valid number')
    } else if (guess >100){
        alert('please enter a  number less than 100')
    } else {
        prevGuess.push(guess)
        if(numGuess===11){
            displayguess(guess)
            displayMessage(`Game Over Random numver was ${randomNumber}`)
            endGame()
        } else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}


// yha pr message print krege or check krege 
function checkGuess(guess){
    if(guess ===randomNumber){
        displayMessage(`you guess right`)
        endGame()
    } else if(guess <randomNumber){
        displayMessage(`numberis too low`)
    } else if(guess >randomNumber){
        displayMessage(`numberis too high`)
    }
}

// ye ek tor se clean up method h 
function displayguess(guess){
    userInput.value= ''
    guessSlot.innerHTML += `${guess}  `
    numGuess ++;
    remaining.innerHTML = `${11-numGuess}`
}

// yha pr message ko display kr dege 
function displayMessage(message){
    lowOrHI.innerHTML=`<h2> ${message}</h2>`

}

function endGame(){
    userInput.value='' //value clean kr di 
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> start new Game </h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

