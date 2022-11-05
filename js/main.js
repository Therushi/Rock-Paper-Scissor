const userScore = document.querySelector("#userScoreVal");
const compScore = document.querySelector("#compScoreVal");
const choice = document.querySelectorAll(".choice");
const userSelected = document.querySelector("#result-user-stat");
const compSelected = document.querySelector("#result-comp-stat");
const result = document.querySelector("#result-final-stat");

let selectedChoice = "";
let computerChoice = "";
let userScoreValue = 0;
let compScoreValue = 0;

function getCompChoice() {
  let compChoice = "";
  let random = Math.round(Math.random() * 2);
  switch (random) {
    case 0:
      compChoice = "rock";
      break;
    case 1:
      compChoice = "paper";
      break;
    case 2:
      compChoice = "scissor";
      break;
  }
  return compChoice;
}
function whoWins(user, comp) {
  userSelected.innerHTML = `User: ${user}`;
  compSelected.innerHTML = `Computer: ${comp}`;
  if (user === comp) {
    result.innerHTML = `It's a Tie 😉`;
    return console.log("this is tie");
  }
  if (user == "rock") {
    if (comp == "paper") {
      compScoreValue++;
      compScore.textContent = compScoreValue;
      result.innerHTML = `Winner: Computer`;
      return console.log("computer wins 😢");
    } else {
      userScoreValue++;
      userScore.textContent = userScoreValue;
      result.innerHTML = `Winner: User`;
      return console.log("You Win 😁");
    }
  }
  if (user == "paper") {
    if (comp == "scissor") {
      compScoreValue++;
      compScore.textContent = compScoreValue;
      result.innerHTML = `Winner: Computer`;
      return console.log("computer wins");
    } else {
      userScoreValue++;
      userScore.textContent = userScoreValue;
      result.innerHTML = `Winner: User`;
      return console.log("You Win");
    }
  }
  if (user == "scissor") {
    if (comp == "rock") {
      compScoreValue++;
      compScore.textContent = compScoreValue;
      result.innerHTML = `Winner: Computer`;
      return console.log("computer wins 😢");
    } else {
      userScoreValue++;
      userScore.textContent = userScoreValue;
      result.innerHTML = `Winner: User`;
      return console.log("You Win 😁");
    }
  }
}

choice.forEach((selection) => {
  selection.addEventListener("click", (selected) => {
    userSelected.innerHTML = "";
    compSelected.innerHTML = "";
    selectedChoice = "";
    console.log(selected);
    if (selected.path[1].id == "r") {
      selectedChoice = "rock";
      whoWins(selectedChoice, getCompChoice());
      console.log(getCompChoice());
    } else if (selected.path[1].id == "p") {
      selectedChoice = "paper";
      whoWins(selectedChoice, getCompChoice());
      console.log(getCompChoice());
    } else {
      selectedChoice = "scissor";
      whoWins(selectedChoice, getCompChoice());
      console.log(getCompChoice());
    }
  });
});
