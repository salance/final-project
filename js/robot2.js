// Name: Sean Lance
// CS 81 Final Project
// Filename: robot2.js
// Game: The Broken Robot Word Game

function showRobot(lives){
    var context = document.getElementById('viewport').getContext("2d");
    var img = new Image();
    var imageFile = "";

    clearTheCanvas();

    switch (lives) {
      case 1:
          imageFile = "images/robot1.png";
          break;
      case 2:
          imageFile = "images/robot2.png";
          break;
      case 3:
          imageFile = "images/robot3.png";
          break;
      case 4:
          imageFile = "images/robot4.png";
          break;
      case 5:
          imageFile = "images/robot5.png";
          break;
      case 6:
          imageFile = "images/robot6.png";
          break;
      case 7:
          imageFile = "images/robot7.png";
          break;
      case 8:
          imageFile = "imgages/robot8.png";
          break;
      default:
          imageFile = "images/robot0.png";
    }//end switch-case

    img.onload = function () {
      context.drawImage(img, 0, 0);
    }
    img.src = imageFile;
}//end showRobot()


function clearTheCanvas()
{
    var s = document.getElementById ("viewport");
    var w = s.width;
    s.width = 10;
    s.width = w;
}//end clearTheCanvas()
