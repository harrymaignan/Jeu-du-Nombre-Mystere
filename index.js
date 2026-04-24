const PlayerInput = document.querySelector("#playerinput");
const Button = document.querySelector("#button");
const Hint = document.querySelector("#hint");
const Chance = document.querySelector("#chances");
const Result = document.querySelector("#result");

let number = 0;
function SecretNumber() {
  number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
}

console.log(SecretNumber());
