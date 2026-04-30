const value = parseInt(Math.random() * 100 + 1);


const userresult = document.getElementById("#guessfield");
const pre = document.querySelector(".guesses");
const lastresult = document.querySelector(".lastresult");

const finalresult = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

$(document).ready(function () {
    $("#sub").click(function () {
    })
});

function validateGuess(guess) {
  //
}

function checkGuess(guess) {}

function displayGuess(guess) {}

function displayMessage(message) {}

function endGame() {}

function newGame() {}
