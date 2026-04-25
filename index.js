const Hint = document.querySelector("#hint");
const Chance = document.querySelector("#chances");
const Result = document.querySelector("#result");
const ErrorMessage = document.querySelector("#error");
const Form = document.querySelector("#form");

let valide = false;
let essais = 0;
let number = Math.floor(Math.random() * 100) + 1;
console.log("le nombre secret est " + number);

function GameFeature(event) {
  event.preventDefault();

  let error = "";

  const PlayerInput = document.querySelector("#playerinput").value;

  if (PlayerInput == error) {
    ErrorMessage.innerText = "Erreur, Veuiller entrer votre réponse";
    ErrorMessage.style.color = "red";
    valide = false;
  } else if (isNaN(PlayerInput) || PlayerInput <= 0 || PlayerInput >= 100) {
    ErrorMessage.innerText =
      "Erreur, Veuiller entrer un nombre positif ou de 1 à 100 ";
    ErrorMessage.style.color = "red";
    valide = false;
  } else {
    ErrorMessage.innerText = "";
    valide = true;
  }

  if (valide == true) {
    if (PlayerInput > number) {
      Hint.innerText = "C'est moins !";
      essais += 1;
      Chance.innerText = "Essai : " + essais + "/10";
    } else if (PlayerInput < number) {
      Hint.innerText = "C'est plus !";
      essais += 1;
      Chance.innerText = "Essai : " + essais + "/10";
      console.log("Nombre d'essai : " + essais);
    } else if (PlayerInput == number) {
      Result.innerText =
        "BRAVO ! VOUS AVEZ TROUVÉ ! \n Le nombre secret était : " + number;
    }
  }
}

Form.addEventListener("submit", (e) => GameFeature(e));
