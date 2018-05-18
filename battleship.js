var view = {
  displayMessage: function(msg) {
    var messageArea = document.getElementById("messageArea");
    messageArea,innerHTML = msg;
  },
  displayHit: function(location) { 
    var cell = document.getElementById(loction); 
    cell.setAttribute("class","hit");  
  },
  displayMiss: function(location) {
    var cell = document.getElementById(loction);
    cell.setAttribute("class","miss");   
  }
};
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");  
view.displayMessage("Tap tap, is this thing on?");
var model = {
  boardSize: 7,
  numShips: 3,
  shipsSunk: 0,
  shipLength: 3, 
  ships = [{ loctions: ["06", "16", "26"], hits: ["", "", ""] },
           { loctions: ["24", "34", "44"], hits: ["", "", ""] },
           { loctions: ["10", "11", "12"], hits: ["", "", ""] } ],
fire: function(guess) { 
    for (var i = 0; i < this.numShips; i++) {
    var ship = this.ships[i];
    var locations = ship.locations;
    var index = locations.indexOf(guess);
    if (index >= 0) {
      ship.hits[index] = "hit";
      view.displayHit(guess);
      view.displayMessage("HIT!");
      if (this.isSunk(ship)) {
          view.displayMessage("You sank my battleship!");
          this.shipsSunk++;
      }
      return true;
    }
  }
   view.displayMiss(guess);
   view.displayMessage("You missed.");
    return false;
   },
   isSunk: function(ship) {
     for (var i = 0; i < this.shipLength; i++) {
       if (ship.hits[i] !== "hit") {
         return false;
       }
     }
     return true;
   }
  };
  model.fire("53");
  model.fire("06");
  model.fire("16");
  model.fire("26");
  model.fire("34");
  model.fire("24");
  model.fire("44");
  model.fire("12");
  model.fire("11");
  model.fire("10");
  
  var controller = {
    guesses: 0,
    function parseGuess(guess) {
      var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
      if (guess === null || guess.Length !==2){
        alert("Oops,please enter a letter and a number on the board,");
      } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
    }
  }
  