// Jquery Document

//Phase I Objectives ----....

$(document).ready(function()  {

    
    var startTheGame = false;
// Declare and set all the varaiables,
	var contenders;

// Create variable "attackRounds" and set it to max no of rounds 10.
	var attackRounds = 0;
    var enemiesRemaining = 5;

// Select a character between 0 to 5 and store it in variable "players".


// Get the character from players array based on "user's selection/mouseclick" store it 
// in userChoice and put the character in variable "myCharacter".
// Set all the variables with their own id's and values so that,
// we can use those id's easily into jqery programming!
//Each character in the game has 3 attributes: Health Points, Attack Power and Counter Attack Power.

   
    var myCharacter = false;
    var myCharacterNo = " "; //Store selected character in this variable
    var myHealthPoints;
    var myAttackPower;
    var myCurrentAttackPower;

// Select another character from "players" and set it
// in variable "myAttacker" of the current game and place it in defender's area.
    var myAttacker = false;
    var myAttackerNo = 0; //Store selected attacker in this variable
    var yourHealthPoints;
    var yourAttackPower;
    var yourCounterAttackPower;

// Take rest of the characters from "players" and place them in pavilion-area.
// Create a variable "resetGame" to track when to start a new game
    var resetGame = 1;

// Declare variable "win", "loses" and set them to 0.

	var win = 0;
    var losses = 0;

//Phase II Objectives ---...

// Functions to run the game starts here...

//After setting up all the variables and their attributes and values,
// , use "on select function" for selecting an enemy.

// When the user presses a key, it will run the following function...
// and will select the character and start playing the game as the chosen character.
//{ When a user does a mouseup or click event on any element from groupOfEnemy array,
// in HTML file, HTML will pass the control of the programe to the javascript.}

    $(".contenders").on("click", function(){
    alert("Select Your Character to play!!");
    startTheGame = true;
    if (myCharacter == false) {
        //groupOfEnemy("#id") = $(this).text();
        myCharacter = true; 
        myCharacterNo = $(this).attr('id');
        switch(myCharacterNo) {
            case "0": 
                myHealthPoints = 220;
                myAttackPower = 20;
            break;
            case "1":
                myHealthPoints = 180;
                myAttackPower = 18;
            break;
            case "2": 
                myHealthPoints = 150;
                myAttackPower = 15;
            break;
            case "3":
                myHealthPoints = 250;
                myAttackPower = 25;
            break;
            case "4":
                myHealthPoints = 180;
                myAttackPower = 18;
            break;
            case "5":
                myHealthPoints = 150;
                myAttackPower = 15;
            break;
        }
        myCurrentAttackPower = myAttackPower;
        $("#myCharacter").append(this);// After getting this very first "on click" on HTML, 
        $(this).addClass("myHero");
        $(this).removeClass("contenders");
        enemiesRemaining--   //move that element to the "your chosen character" area! 
     
    }
     else { 
     if (myAttacker == false) {
                                          // After selecting the character to play,
        myAttackerNo = $(this).attr('id'); 
        alert(myAttackerNo);              // select the opponent to play with on a mouseup/click function.
        switch(myAttackerNo) {
            case "0": 
                yourHealthPoints = 220;
                yourAttackPower = 20;
                yourCounterAttackPower = 18;
            break;
            case "1":
                yourHealthPoints = 180;
                yourAttackPower = 18;
                yourCounterAttackPower = 15;
            break;
            case "2": 
                yourHealthPoints = 150;
                yourAttackPower = 15;
                yourCounterAttackPower = 12;
            break;
            case "3":
                yourHealthPoints = 250;
                yourAttackPower = 25;
                yourCounterAttackPower = 20;
            break;
            case "4":
                yourHealthPoints = 180;
                yourAttackPower = 18;
                yourCounterAttackPower = 15;
            break;
            case "5":
                yourHealthPoints = 150;
                yourAttackPower = 15;
                yourCounterAttackPower = 12;
            break;

        }
        
        $("#myAttacker").append(this);// Move your opponent to the "defender's zone"!
        $(this).addClass("myVillain");
        $(this).removeClass("contenders");
        myAttacker = true;
        enemiesRemaining--;
        enemiesRemaining = contenders - myCharacter - myAttacker; 
        
        $(".contenders").appendTo("#enemiesWaiting");
        myCurrentAttackPower = myAttackPower;

        }
    }
        document.getElementById('myHP').innerHTML = myHealthPoints;
        document.getElementById('yourHP').innerHTML = yourHealthPoints;
        document.getElementById('myAP').innerHTML = myAttackPower;
        document.getElementById('yourAP').innerHTML = yourAttackPower;
        document.getElementById('yourCAP').innerHTML = yourCounterAttackPower;

});     
// Now it's time to get the onclick event for the "Attack" button!
// which will be the third "onclick" event for this game!
// We'll then set our "attackRounds" variable to 10,
// to indicate that we can proceed with our game.
    numberOfEnemies = 5;
    attackRounds = 10;

        $('#attack').on("click", function() {
            alert("Game on!!");
        if (myCharacter == true && myAttacker == true) {
            attackRounds++;
//First action,....
//Each time the player attacks, their character's Attack Power increases by its base Attack Power.
//The enemy character only has Counter Attack Power.
//Unlike the player's Attack Points, Counter Attack Power never changes.
//The Health Points, Attack Power and Counter Attack Power of each character must differ.
//No characters in the game can heal or recover Health Points.

            yourHealthPoints = yourHealthPoints - myCurrentAttackPower;
            myCurrentAttackPower = myCurrentAttackPower + myAttackPower;
            myHealthPoints = myHealthPoints - yourCounterAttackPower;
            //$("#myHP").append("<span>" + " " + "</span>");
            //$("#yourHP").append("<span>" + " " + "</span>");
            //$("#myAP").append("<span>" + " " + "</span>");
            //$("#yourAP").append("<span>" + " " + "</span>");

            document.getElementById('myHP').innerHTML = myHealthPoints;
            document.getElementById('yourHP').innerHTML = yourHealthPoints;
            document.getElementById('myAP').innerHTML = myCurrentAttackPower;
            document.getElementById('yourAP').innerHTML = yourAttackPower;
            document.getElementById('yourCAP').innerHTML = yourCounterAttackPower;

        if (yourHealthPoints <= 0) {
        //Second action,....
//When the health points of enemy character goes to 0 or below 0 then on  next click,
//the player character will select the next opponent and start the game again.
// The health points will remain unchanged!!


        $(".myVillain").appendTo("#fallenEnemies");
        $(".myVillain").css({"opacity": 0.5});
            myAttacker = false;
            numberOfEnemies--;
            $("#wins").append("<span>" + " " + "</span>");
            wins++;
            alert("You Win this round!! Select next opponent");
        }
                
        if   (myHealthPoints <= 0) {  
        //Third action,....                                   //There will be no change in all attributes of players and
            alert("Game over!! Press Restart Button to start the game again!!");// game points at the new fresh start.
            $(".myHero").appendTo("#fallenEnemies");//When the health points of myHero character goes to 0
                                                                //or below 0 then the game will be over.
            myCharacter = false;                                //On  next click, you will have to start the game by 
            $("losses").append("<span>" + " " + "</span>");                                                    //selecting your player character again.
            losses++;
            document.getElementById('losses').innerHTML = losses;
            numberOfEnemies = 5;
            myCharacter = false;
            myAttacker = false;
        

        $(".fallenOnes").addClass("contenders");
        $(".myHero").addClass("contenders");
        $(".myVillain").addClass("contenders");
        $(".contenders").removeClass("myHero");
        $(".contenders").removeClass("myVillain");
        $(".contenders").removeClass("fallenOnes");
        

        $(".megatron").appendTo("#row-players");
        $(".megatron").addClass("contenders");
        $(".starscream").appendTo("#row-players");
        $(".starscream").addClass("contenders");
        $(".shockwave").appendTo("#row-players");
        $(".shockwave").addClass("contenders");
        $(".prime").appendTo("#row-players");
        $(".prime").addClass("contenders");
        $(".bumblebee").appendTo("#row-players");
        $(".bumblebee").addClass("contenders");
        $(".arcee").appendTo("#row-players");
        $(".arcee").addClass("contenders");


            $(".contenders").css({"opacity": 1});
          
            
    }
        else { if (enemiesRemaining == 0) {
            //Fourth action,....           //When the health points of "very last enemy character" goes 
                                           //to 0 or below 0 then on  next click, the game will get reset 
                                           //and the player will start the new game with new character!!
            $(".myVillain").appendTo("#fallenEnemies");//
            myAttacker = false;
            numberOfEnemies === 0;
       
            win++;
            document.getElementById('wins').innerHTML = win;
            alert("You win!! Press Restart Button to start the game again!!");

            };
          }
        }
    });
// To restart the game perform the "on-click" function for "Restart" button 
// by setting all the variables.
    
    //$(document).ready(function()  {

//        alert($('#test').attr('id'));
//});    
        numberOfEnemies = 5;
        myCharacter = false;
        myAttacker = false;
        attackRounds = 10;
        win = 0;
        loses = 0;

       $('#restart').on("click", function() {
            alert(" Restart The Game !!");
            numberOfEnemies = 5;
            myCharacter = false;
            myAttacker = false;
        


        $(".fallenOnes").addClass("contenders");
        $(".myHero").addClass("contenders");
        $(".myVillain").addClass("contenders");
        $(".contenders").removeClass("myHero");
        $(".contenders").removeClass("myVillain");
        $(".contenders").removeClass("fallenOnes");
        

        $(".megatron").appendTo("#row-players");
        $(".megatron").addClass("contenders");
        $(".starscream").appendTo("#row-players");
        $(".starscream").addClass("contenders");
        $(".shockwave").appendTo("#row-players");
        $(".shockwave").addClass("contenders");
        $(".prime").appendTo("#row-players");
        $(".prime").addClass("contenders");
        $(".bumblebee").appendTo("#row-players");
        $(".bumblebee").addClass("contenders");
        $(".arcee").appendTo("#row-players");
        $(".arcee").addClass("contenders");


            $(".contenders").css({"opacity": 1});


        });
   

});
        
      
    

         

