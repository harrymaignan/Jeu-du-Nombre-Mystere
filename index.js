const Button = document.querySelector("#button");
const Hint = document.querySelector("#hint");
const Chance = document.querySelector("#chances");
const Result = document.querySelector("#result");

let number = 0;

function GameFeature(event) {
  event.preventDefault();
  let error = "";
  const PlayerInput = document.querySelector("#playerinput").value;
}

function SecretNumber() {
  number = Math.floor(Math.random() * 100) + 1;
}
Button.addEventListener("submit", (e) => GameFeature(e));
