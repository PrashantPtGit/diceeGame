// alert("Welcome to the dice Game")
//  *********** button function *****************




// var btnclick = document.getElementById("#click-me");
document.querySelector('#click-me').addEventListener('click', function() {

var randomNumber1 = Math.floor(Math.random() * 6)
var randomImage = "./images/" + "dice" + randomNumber1 + ".png";

// document.querySelector("img1").setAttribute("src" , randomImage)
document.getElementById("image1").src = randomImage;

var randomNumber2 = Math.floor(Math.random() * 6 )
var randomImage2 = "./images/" + "dice" + randomNumber2 + ".png";

document.getElementById("image2").src = randomImage2; 


// who wins 

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";

} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";

} else {
  document.querySelector("h1").innerHTML = "Draw";
}







// score tabel

// **********************
// ******* first player ********



if (randomNumber1 > randomNumber2) {
  document.querySelector(".fr-1").innerHTML = "1";
  
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".fr-1").innerHTML = "0";

} else {
  document.querySelector(".fr-1").innerHTML = "0";
}



// ******* second player ********



if (randomNumber1 > randomNumber2) {
  document.querySelector(".fr-2").innerHTML = "0";
  
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".fr-2").innerHTML = "1";

} else {
  document.querySelector(".fr-2").innerHTML = "0";
}
})





// function diceFunction ()  {
//   alert("hey");
// }

// score tabel ****************







// function dice1 () {
    
// var finalNumber1= (Math.floor(Math.random() * 7))

// switch (finalNumber1) {
//     case 0:
//       text = "Sunday";
//       break;
//     case 1:
//         document.querySelector("img1").setAttribute("src" , "dice1.png");
//       break;
//     case 2:
//         document.querySelector("img1").setAttribute("src" , "dice2.png");
//       break;
//     case 3:
//         document.querySelector("img1").setAttribute("src" , "dice3.png");
//       break;
//     case 4:
//         document.querySelector("img1").setAttribute("src" , "dice4.png");
//       break;
//     case 5:
//         document.querySelector("img1").setAttribute("src" , "dice5.png");
//       break;
//     case 6:
//         document.querySelector("img1").setAttribute("src" , "dice6.png");
//         break;
//   }


// switch (finalNumber1) {
    
//     case 1:
//         document.getElementById("image1").src = "./images/dice1.png";
//       break;
//     case 2:
//         document.getElementById("image1").src = "./images/dice2.png";
//       break;
//     case 3:
//         document.getElementById("image1").src = "./images/dice3.png";
//       break;
//     case 4:
//         document.getElementById("image1").src = "./images/dice4.png";
//       break;
//     case 5:
//         document.getElementById("image1").src = "./images/dice5.png";
//       break;
//     case 6:
//         document.getElementById("image1").src = "./images/dice6.png";
//         break;
//   }
    
// }
//   dice1();

  

//   function dice2() {
    
//     var finalNumber2= (Math.floor(Math.random() * 7))


//     switch (finalNumber2) {
    
//         case 1:
//             document.getElementById("image2").src = "./images/dice1.png";
//           break;
//         case 2:
//             document.getElementById("image2").src = "./images/dice2.png";
//           break;
//         case 3:
//             document.getElementById("image2").src = "./images/dice3.png";
//           break;
//         case 4:
//             document.getElementById("image2").src = "./images/dice4.png";
//           break;
//         case 5:
//             document.getElementById("image2").src = "./images/dice5.png";
//           break;
//         case 6:
//             document.getElementById("image2").src = "./images/dice6.png";
//             break;
//       }
        
//   } 

// dice2();


// if (finalNumber1 > finalNumber2) {
//     document.querySelector("h1").innerHTML = "player 1 Wins";

// } else if (finalNumber1 < finalNumber2) {
//     document.querySelector("h1").innerHTML = "player 2 Wins";

// } else {
//   document.querySelector("h1").innerHTML = "draw";
// }


// second way to do it!!
// **************************************************************************



// // score tabel code
// if (randomNumber1 > randomNumber2) {
//   document.querySelector("").innerHTML = "1"
// }