let randomNumber = Math.trunc(Math.random()* 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) =>{
    document.querySelector(".start-guessing").textContent = message;
}

document.querySelector(".check-btn").addEventListener('click', function(){
    let guess = Number(document.querySelector(".guess-input").value);
    if(!guess){
        document.querySelector(".start-guessing").textContent = "invalid number";
    }
    else if(guess === randomNumber){
        document.querySelector(".guess-number").textContent = randomNumber;
        document.querySelector(".start-guessing").textContent = "Correct number";
        document.querySelector("body").style.backgroundColor = "#60b347";

        if(score > highScore){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    else if(score > 1){
        displayMessage(guess > randomNumber ? "Too High" : "Too Low");
        score--;
        document.querySelector(".score").textContent = score;
    }
    else{
        score = 0;
        document.querySelector(".score").textContent = score;
        document.querySelector(".start-guessing").textContent = "End of game";
    }
    console.log(guess);
})


document.querySelector(".again-btn").addEventListener('click', function(){
    score = 20;
    randomNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".start-guessing").textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".guess-number").textContent = "?";
    document.querySelector(".guess-input").value = "";
})