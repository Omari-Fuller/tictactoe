let currentLetter = "O"
let numTurns = 0
let gameEnded = false

function toggleLetter() {
    if (currentLetter === "X"){ 
        currentLetter = "O"
    } else if (currentLetter === "O")  {
        currentLetter = "X"
    }
}

function performLogic(buttonId, tileId) {
    $(buttonId).remove();
    $(tileId).text(currentLetter);
    toggleLetter();
    addTurn();
}

function addTurn() {
    numTurns = numTurns + 1;

    if (numTurns === 9) {
        $("#result").text("It's a draw!");
        gameEnded = true;
    }
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
     performLogic("#button2","#tile2"); 
});

$("#button3").click(function() {
  performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

