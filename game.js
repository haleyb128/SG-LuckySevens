//declaring variables
let startingBet,
  balance,
  recordHigh,
  highestRollCount = 0,
  totalRolls = 0;

//enter key triggers start button

    // // Execute a function when the user releases a key on the keyboard
    // input.addEventListener("keyup", function(event) {
    // // Cancel the default action, if needed
    // event.preventDefault();
    // // Number 13 is the "Enter" key on the keyboard
    // if (event.keyCode === 13) {
    //     // Trigger the button element with a click
    //     document.getElementById("startButton").click();
    // }
    // });


 //start (start button triggers)
let start = () => {
  startingBet = parseInt(document.getElementById("betInput").value);
  recordHigh = document.getElementById("betInput").value;
  //start game
  if (startingBet <= 0) {
    alert("It's not gambling if you don't bet anything!");
  } else {
    document.getElementById("betInput").disabled = 1;
    balance = startingBet;

    //keep rolling if positive balance
    while (balance > 0) {
      rollDice();
    }
    //show results
    document.getElementById("results").setAttribute("style", "");
    document
      .getElementById("startButton")
      .setAttribute("style", "display:none");
    document.getElementById("startingBet").innerHTML = "$" + startingBet;
    document.getElementById("totalRolls").innerHTML = totalRolls;
    document.getElementById("recordHigh").innerHTML = "$" + recordHigh;
    document.getElementById(
      "highestRollCount"
    ).innerHTML = `${highestRollCount}`;
  }
};

//Roll the dice!
let rollDice = () => {
  totalRolls++;
  let diceTotal = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6);
  if (diceTotal === 7) {
    balance = balance + 4.0;
    if (balance > recordHigh) {
      recordHigh = balance;
      highestRollCount = totalRolls;
    }
  } else {
    balance = balance - 1.0;
  }
};