// Name: Sean Lance
// CS 81 Final Project
// Filename: robot1.js
// Game: The Broken Robot Word Game

window.onload = function () {

  var alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var word ;              // Selected word for the puzzle
  var guess ;             // the leter selected by player
  var geusses = [ ];      // Stores the player's guesses
  var lives ;             // Current number of chances (rounds)
  var counter ;           // Tracks the number of correct guesses
  var space;              // Idicates number of spaces in puzzle word
  var categories;
  var chosenCategory;
  var getHint ;

  // Declare variable names to access html elements
  var showLives = document.getElementById("rounds");
  var showCatagory = document.getElementById("catagoryName");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");



  // create alphabet ul
  var buttons = function () {
    var lineBreak = "\<br\>";
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }//end for..loop
  }//end buttons()


  // Select Category for each cycle of the game
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "CATEGORY: College Sports - Team Nicknames";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "CATEGORY: Oscar - Best Picture Nominee";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "CATEGORY: Popular American Cities";
    }
  }//end selecCat()

  // Create list of the player's guesses
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }//end for..loop
  }//end result()

  // Show number of chances left to play in the game
   comments = function () {
    showLives.innerHTML = "You have " + lives + " chances.";
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "Winner!";
      }//end if
    }//end for..loop
  }//end comments()

  // Animate Robot / Draw Robot on canvas
  var animate = function () {
    var drawMe = lives ;
    showRobot(lives);
  }

  // Get the player's mouse click selection
   check = function () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }


  // Define function for the game loop
  play = function () {
    categories = [
        ["bruins", "aggies", "wildcats", "seminoles", "huskies"],
        ["spotlight", "selma", "moneyball", "inception", "seabiscuit"],
        ["nashville", "minneapolis", "hollywood", "tallahassee", "providence"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    //update variable values
    geusses = [ ];
    lives = 8;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    //canvas();
  }

  play();   //start playing the game

  // Display the clue when user clicks the "clue!" button
  hint.onclick = function() {
      //Define array to store the clues for each word
      hints = [
        ["University of California Los Angeles", "Texas A&M", "University of Arizona", "Florida State University", "University of Washington"],
        ["Biographical crime drama", "Historical drama", "Sports Drama", "Science fiction film", "Sports action film"],
        ["Music City / City of Rocks", "City of Lakes / Brew City", "Tinseltown / Entertainment Capital", "State Capital of Florida", "America's Renaissance City"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
  };

   // Restart the game when user clicks the "reset" button
  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "";
    play();
  }
}//end window.onload()
