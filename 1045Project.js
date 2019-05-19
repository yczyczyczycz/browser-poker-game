//5 Card Draw CPSC1045 Project
//Bruce Yi Chen Zhao
//100298997

let ds = document.getElementById("myCanvas");
let ctx = ds.getContext("2d");
ctx.font = "20px Ariel"

//Loads the card arts. https://code.google.com/archive/p/vector-playing-cards/downloads
let cards = [];

function createImage(str)
{
	let temp = new Image()
	temp.src = str;
	return temp;
}

cards.push(createImage("ace_of_spades.png"));
cards.push(createImage("2_of_spades.png"));
cards.push(createImage("3_of_spades.png"));
cards.push(createImage("4_of_spades.png"));
cards.push(createImage("5_of_spades.png"));
cards.push(createImage("6_of_spades.png"));
cards.push(createImage("7_of_spades.png"));
cards.push(createImage("8_of_spades.png"));
cards.push(createImage("9_of_spades.png"));
cards.push(createImage("10_of_spades.png"));
cards.push(createImage("jack_of_spades2.png"));
cards.push(createImage("queen_of_spades2.png"));
cards.push(createImage("King_of_spades2.png"));
cards.push(createImage("ace_of_hearts.png"));
cards.push(createImage("2_of_hearts.png"));
cards.push(createImage("3_of_hearts.png"));
cards.push(createImage("4_of_hearts.png"));
cards.push(createImage("5_of_hearts.png"));
cards.push(createImage("6_of_hearts.png"));
cards.push(createImage("7_of_hearts.png"));
cards.push(createImage("8_of_hearts.png"));
cards.push(createImage("9_of_hearts.png"));
cards.push(createImage("10_of_hearts.png"));
cards.push(createImage("jack_of_hearts2.png"));
cards.push(createImage("queen_of_hearts2.png"));
cards.push(createImage("King_of_hearts2.png"));
cards.push(createImage("ace_of_clubs.png"));
cards.push(createImage("2_of_clubs.png"));
cards.push(createImage("3_of_clubs.png"));
cards.push(createImage("4_of_clubs.png"));
cards.push(createImage("5_of_clubs.png"));
cards.push(createImage("6_of_clubs.png"));
cards.push(createImage("7_of_clubs.png"));
cards.push(createImage("8_of_clubs.png"));
cards.push(createImage("9_of_clubs.png"));
cards.push(createImage("10_of_clubs.png"));
cards.push(createImage("jack_of_clubs2.png"));
cards.push(createImage("queen_of_clubs2.png"));
cards.push(createImage("King_of_clubs2.png"));
cards.push(createImage("ace_of_diamonds.png"));
cards.push(createImage("2_of_diamonds.png"));
cards.push(createImage("3_of_diamonds.png"));
cards.push(createImage("4_of_diamonds.png"));
cards.push(createImage("5_of_diamonds.png"));
cards.push(createImage("6_of_diamonds.png"));
cards.push(createImage("7_of_diamonds.png"));
cards.push(createImage("8_of_diamonds.png"));
cards.push(createImage("9_of_diamonds.png"));
cards.push(createImage("10_of_diamonds.png"));
cards.push(createImage("jack_of_diamonds2.png"));
cards.push(createImage("queen_of_diamonds2.png"));
cards.push(createImage("King_of_diamonds2.png"));

//Loads the welcome screen.
window.onload = function() {
	ctx.fillText("Video Poker: 5 cards draw", 190, 160);
	ctx.fillText("Author: Bruce Zhao", 220, 190);
	ctx.fillText("Build Date: Nov 2017", 220, 220);
	ctx.fillText("Press start to start the game", 190, 250);
};

//Global variables
let currentHand = [];
let button1 = false;
let button2 = false;
let button3 = false;
let button4 = false;
let button5 = false;

//Onclick of the reset/start button.
function resetCards()
{
	let i     = 0;
	let j     = 0;
	let hands = [];	
	let temp;
	let noDuplicate = true;
	
	//Resets the selections.
	button1 = false;
	button2 = false;
	button3 = false;
	button4 = false;
	button5 = false;
	
	//Assign 10 unique numbers between 0 and 51 into an array.
	for (i = 0; i < 10; i++)
	{		
		do
		{
			noDuplicate = true;	
			temp = Math.floor(Math.random() * 52);
			for (j = 0; j < hands.length; j++)
			{
				if (temp == hands[j])
				{
					noDuplicate = false;
				}	
			}	
		} while (!noDuplicate)
			
		hands.push(temp);		
	}	

	//Sets the global variable currentHand and returns the array.
	currentHand	= hands;
	return hands;				
}

//Draws the canvas with the correct cards.
function redrawCanvas(arr)
{
	ctx.clearRect(0, 0, 600, 420);
	ctx.fillText("Computer's cards", 10, 20);
    ctx.drawImage(cards[arr[0]], 20, 40, 100, 150);
	ctx.strokeRect(20, 40, 100, 150);
	ctx.drawImage(cards[arr[1]], 130, 40, 100, 150);
	ctx.strokeRect(130, 40, 100, 150);
	ctx.drawImage(cards[arr[2]], 240, 40, 100, 150);
	ctx.strokeRect(240, 40, 100, 150);
	ctx.drawImage(cards[arr[3]], 350, 40, 100, 150);
	ctx.strokeRect(350, 40, 100, 150);
	ctx.drawImage(cards[arr[4]], 460, 40, 100, 150);
	ctx.strokeRect(460, 40, 100, 150);
	
	ctx.fillText("Player's cards", 10, 225);
	ctx.drawImage(cards[arr[5]], 20, 245, 100, 150);
	ctx.strokeRect(20, 245, 100, 150);
	ctx.drawImage(cards[arr[6]], 130, 245, 100, 150);
	ctx.strokeRect(130, 245, 100, 150);
	ctx.drawImage(cards[arr[7]], 240, 245, 100, 150);
	ctx.strokeRect(240, 245, 100, 150);
	ctx.drawImage(cards[arr[8]], 350, 245, 100, 150);
	ctx.strokeRect(350, 245, 100, 150);
	ctx.drawImage(cards[arr[9]], 460, 245, 100, 150);
	ctx.strokeRect(460, 245, 100, 150);	
	
	button1 = false;
	button2 = false;
	button3 = false;
	button4 = false;
	button5 = false;
	document.getElementById("b1").style.background="black";
	document.getElementById("b2").style.background="black";
	document.getElementById("b3").style.background="black";
	document.getElementById("b4").style.background="black";
	document.getElementById("b5").style.background="black";
}

//Onclick for the select buttons.
function card(id)
{
	switch(id)
	{
		case "b1":  if (button1 == false)
					{
						button1 = true;
						document.getElementById("b1").style.background="red";
					}
					
					else if (button1 == true)
					{
						button1 = false;
						document.getElementById("b1").style.background="black";
					}
					break;
					
		case "b2":	if (button2 == false)
					{
						button2 = true;
						document.getElementById("b2").style.background="red";
					}
					
					else if (button2 == true)
					{
						button2 = false;
						document.getElementById("b2").style.background="black";
					}
					break;
					
		case "b3":	if (button3 == false)
					{
						button3 = true;
						document.getElementById("b3").style.background="red";
					}
					
					else if (button3 == true)
					{
						button3 = false;
						document.getElementById("b3").style.background="black";
					}
					break;
					
		case "b4":	if (button4 == false)
					{
						button4 = true;
						document.getElementById("b4").style.background="red";
					}
					
					else if (button4 == true)
					{
						button4 = false;
						document.getElementById("b4").style.background="black";
					}
					break;
					
		case "b5":	if (button5 == false)
					{
						button5 = true;
						document.getElementById("b5").style.background="red";
					}
					
					else if (button5 == true)
					{
						button5 = false;
						document.getElementById("b5").style.background="black";
					}
					break;
	}
}

//Onclick for the button redraw.
function redrawCards()
{
	let noDuplicate = true;
	let i     = 0;
	let temp;
	let discard = []; 
	
	if (gameStarted == true)
	{	
		if (button1 == true)
		{	
			do
			{
				noDuplicate = true;	
				temp = Math.floor(Math.random() * 52);
				for (i = 0; i < currentHand.length; i++)
				{
					if (temp == currentHand[i])
					{
						noDuplicate = false;
					}	
				}
				
				for (i = 0; i < discard.length; i++)
				{
					if (temp == discard[i])
					{
						noDuplicate = false;
					}	
				}	
			} while (!noDuplicate)
			
			discard.push(currentHand[5]);
			currentHand[5] = temp;	
		}	

		if (button2 == true)
		{	
			do
			{
				noDuplicate = true;	
				temp = Math.floor(Math.random() * 52);
				for (i = 0; i < currentHand.length; i++)
				{
					if (temp == currentHand[i])
					{
						noDuplicate = false;
					}	
				}
					
				for (i = 0; i < discard.length; i++)
				{
					if (temp == discard[i])
					{
						noDuplicate = false;
					}	
				}	
			} while (!noDuplicate)
			
			discard.push(currentHand[6]);
			currentHand[6] = temp;	
		}

		if (button3 == true)
		{	
			do
			{
				noDuplicate = true;	
				temp = Math.floor(Math.random() * 52);
				for (i = 0; i < currentHand.length; i++)
				{
					if (temp == currentHand[i])
					{
						noDuplicate = false;
					}
				}
				
				for (i = 0; i < discard.length; i++)
				{
					if (temp == discard[i])
					{
						noDuplicate = false;
					}	
				}		
			} while (!noDuplicate)
			
			discard.push(currentHand[7]);	
			currentHand[7] = temp;	
		}

		if (button4 == true)
		{	
			do
			{
				noDuplicate = true;	
				temp = Math.floor(Math.random() * 52);
				for (i = 0; i < currentHand.length; i++)
				{
					if (temp == currentHand[i])
					{
						noDuplicate = false;
					}	
				}

				for (i = 0; i < discard.length; i++)
				{
					if (temp == discard[i])
					{
						noDuplicate = false;
					}	
				}			
			} while (!noDuplicate)
			
			discard.push(currentHand[8]);
			currentHand[8] = temp;	
		}

		if (button5 == true)
		{	
			do
			{
				noDuplicate = true;	
				temp = Math.floor(Math.random() * 52);
				for (i = 0; i < currentHand.length; i++)
				{
					if (temp == currentHand[i])
					{
						noDuplicate = false;
					}	
				}

				for (i = 0; i < discard.length; i++)
				{
					if (temp == discard[i])
					{
						noDuplicate = false;
					}	
				}	
			} while (!noDuplicate)
			
			discard.push(currentHand[9]);	
			currentHand[9] = temp;	
		}
		
		
		let computerHand = [currentHand[0], currentHand[1], currentHand[2], currentHand[3], currentHand[4]];
		let playerHand   = [currentHand[5], currentHand[6], currentHand[7], currentHand[8], currentHand[9]];
		
		//Computer will redraw if it sees that it is losing to the player's hand.	
		if (assignHandRanking(computerHand) < assignHandRanking(playerHand))
		{
			for (i = 0; i < 5; i++)
			{		
				do
				{
					noDuplicate = true;	
					temp = Math.floor(Math.random() * 52);
					for (j = 0; j < currentHand.length; j++)
					{
						if (temp == currentHand[j])
						{
							noDuplicate = false;
						}	
					}	
					
					for (j = 0; j < discard.length; j++)
					{
						if (temp == discard[i])
						{
							noDuplicate = false;
						}	
					}
				} while (!noDuplicate)
					
				discard.push(currentHand[i]);	
				currentHand[i] = temp;		
			}
			
			computerHand = [currentHand[0], currentHand[1], currentHand[2], currentHand[3], currentHand[4]];
		}
		
		redrawCanvas(currentHand);
		
		showdown(computerHand, playerHand);
	}

	else
	{
		document.getElementById("info").innerHTML = "Please press start first.";
	}		
}

let gameStarted = false;
//Onclick for the start/reset button.
function start()
{
	redrawCanvas(resetCards());
	document.getElementById("info").innerHTML = "Please select cards to redraw.";
	gameStarted = true;
}

let wins = 0;
let losses = 0;
//Showdown to determine who wins
function showdown(arr1, arr2)
{
	let result = compareTwoHands(arr1, arr2);
	
	if (result == 1)
	{
		document.getElementById("info").innerHTML = "You have " + rankingToString(assignHandRanking(arr2)) + 
		". Computer has " + rankingToString(assignHandRanking(arr1)) + 
		". You lose, the computer wins. Press start to start a new game.";
		losses++;
		document.getElementById("tracker").innerHTML = "Wins: " + wins + " Losses: " + losses;
	}	
	
	else if (result == 2)
	{
		document.getElementById("info").innerHTML = "You have " + rankingToString(assignHandRanking(arr2)) + 
		". Computer has " + rankingToString(assignHandRanking(arr1)) + 
		". You win, the computer loses. Press start to start a new game.";
		wins++;
		document.getElementById("tracker").innerHTML = "Wins: " + wins + " Losses: " + losses;
	}
	
	else
	{
		document.getElementById("info").innerHTML = "Tied game.";
	}	
	
	gameStarted = false;
}

function rankingToString(ranking)
{
	let rankingName;
	switch (ranking)
	{
		case 9: rankingName = "straight flush";
				break;
		case 8: rankingName = "four of a kind";
				break;
		case 7: rankingName = "full house";
				break;
		case 6: rankingName = "flush";
				break;
		case 5: rankingName = "straight";
				break;
		case 4: rankingName = "three of a kind";
				break;
		case 3: rankingName = "two pairs";
				break;
		case 2: rankingName = "one pair";
				break;
		case 1: rankingName = "high card";
				break;
		default:break;
	}
	
	return rankingName;
}





//Codes for hand ranking and comparison from this point on. Warning: LONG.
//Very complicated algorithm with a lot of if and else if statements.
//I assigned a value for each card: 2 is 2 .... king is 13 and ace is 14.
//I chose ace to be 14 but not one because it is easier to compare cards since ace is bigger in ranking.
//I use bubble sort to sort the hand array of length 5 into order from small to big.
//At that point I would know the hand strength because the sorted hand will be esaily recognizable.
//For example: a sorted array that is {2, 2, 2, 2, 8} is a four of a kind. 
//				{3, 3, 3, 7, 7} is a full house and so on.


   let STRAIGHT_FLUSH  = 9;
   let FOUR_OF_A_KIND  = 8;
   let FULL_HOUSE      = 7;
   let FLUSH           = 6;
   let STRAIGHT        = 5;
   let THREE_OF_A_KIND = 4;
   let TWO_PAIR        = 3;
   let ONE_PAIR        = 2;
   let HIGH_CARD       = 1;
   
   function isFlush(arr)
   {
      if (arr[0] <= 12 && arr[1] <= 12 && arr[2] <= 12 && arr[3] <= 12 && arr[4] <= 12)
      {
         return true;
      }
      
      else if (arr[0] <= 25 && arr[1] <= 25 && arr[2] <= 25 && arr[3] <= 25 && arr[4] <= 25 &&
               arr[0] >= 13 && arr[1] >= 13 && arr[2] >= 13 && arr[3] >= 13 && arr[4] >= 13)
      {
         return true;
      }   

      else if (arr[0] <= 38 && arr[1] <= 38 && arr[2] <= 38 && arr[3] <= 38 && arr[4] <= 38 &&
               arr[0] >= 26 && arr[1] >= 26 && arr[2] >= 26 && arr[3] >= 26 && arr[4] >= 26)
      {
         return true;
      }  
      
      else if (arr[0] >= 39 && arr[1] >= 39 && arr[2] >= 39 && arr[3] >= 39 && arr[4] >= 39)
      {
         return true;
      } 
      
      else
      {
         return false;
      }
   }
   
   function assignValue(num)
   {
      let value = 0;
      
      if (num == 0 || num == 13 || num == 26 || num == 39)
      {
         value = 14;
      }
      
      if (num == 1 || num == 14 || num == 27 || num == 40)
      {
         value = 2;
      }
      
      if (num == 2 || num == 15 || num == 28 || num == 41)
      {
         value = 3;
      }
      
      if (num == 3 || num == 16 || num == 29 || num == 42)
      {
         value = 4;
      }
      
      if (num == 4 || num == 17 || num == 30 || num == 43)
      {
         value = 5;
      }
      
      if (num == 5 || num == 18 || num == 31 || num == 44)
      {
         value = 6;
      }
      
      if (num == 6 || num == 19 || num == 32 || num == 45)
      {
         value = 7;
      }
      
      if (num == 7 || num == 20 || num == 33 || num == 46)
      {
         value = 8;
      }
      
      if (num == 8 || num == 21 || num == 34 || num == 47)
      {
         value = 9;
      }
      
      if (num == 9 || num == 22 || num == 35 || num == 48)
      {
         value = 10;
      }
      
      if (num == 10 || num == 23 || num == 36 || num == 49)
      {
         value = 11;
      }
      
      if (num == 11 || num == 24 || num == 37 || num == 50)
      {
         value = 12;
      }
      
      if (num == 12 || num == 25 || num == 38 || num == 51)
      {
         value = 13;
      }
      
      return value;
   } 
     
   function assignHandValue(arr)
   {
      let handValue = [];
	  handValue.length = 5;
      
      handValue[0] = assignValue(arr[0]);
      handValue[1] = assignValue(arr[1]);
      handValue[2] = assignValue(arr[2]);
      handValue[3] = assignValue(arr[3]);
      handValue[4] = assignValue(arr[4]);
      
      return handValue;
   }
   
   //bubble sort
   function sortFromSmallToBig(arr)
   {
      let temp;
      let i;
      
      while (!(arr[0] <= arr[1] && arr[1] <= arr[2] && arr[2] <= arr[3] && arr[3] <= arr[4]))
      {
         for (i = 0; i < 4; i++)
         {
            if (arr[i] > arr[i+1])
            {
               temp = arr[i];
               arr[i] = arr[i+1];
               arr[i+1] = temp;
            }
         }
      }
   }
   
   function isStraight(arr)
   {
      let handValue = assignHandValue(arr);
      sortFromSmallToBig(handValue);
      
      if (handValue[0] == 2 && handValue[1] == 3 && handValue[2] == 4 && handValue[3] == 5 && handValue[4] == 14)
      {
         return true;
      }
      
      else if (handValue[0] + 1 == handValue[1] && handValue[1] + 1 == handValue[2] && handValue[2] + 1 == handValue[3] && handValue[3] + 1 == handValue[4])
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   function isStraightFlush(arr)
   {
      if (isStraight(arr) && isFlush(arr))
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   function isFourOfAKind(arr)
   {
      let handValue = assignHandValue(arr);
      sortFromSmallToBig(handValue);
      
      if (handValue[0] == handValue[1] && handValue[1] == handValue[2] && handValue[2] == handValue[3])
      {
         return true;
      }
      
      else if (handValue[1] == handValue[2] && handValue[2] == handValue[3] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   function isFullHouse(arr)
   {
      let handValue = assignHandValue(arr);
      sortFromSmallToBig(handValue);
      
      if (handValue[0] == handValue[1] && handValue[1] == handValue[2] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] == handValue[1] && handValue[2] == handValue[3] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   function isTwoPair(arr)
   {
      let handValue = assignHandValue(arr);
      sortFromSmallToBig(handValue);
      
      if (handValue[0] == handValue[1] && handValue[1] != handValue[2] && handValue[2] == handValue[3] && handValue[3] != handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] != handValue[1] && handValue[1] == handValue[2] && handValue[2] != handValue[3] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] == handValue[1] && handValue[1] != handValue[2] && handValue[2] != handValue[3] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   function isThreeOfAKind(arr)
   {
      let handValue = assignHandValue(arr);
      sortFromSmallToBig(handValue);
      
      if (handValue[0] == handValue[1] && handValue[1] == handValue[2] && handValue[2] != handValue[3] && handValue[3] != handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] != handValue[1] && handValue[1] == handValue[2] && handValue[2] == handValue[3] && handValue[3] != handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] != handValue[1] && handValue[1] != handValue[2] && handValue[2] == handValue[3] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   function isOnePair(arr)
   {
      let handValue = assignHandValue(arr);
      sortFromSmallToBig(handValue);
      
      if (handValue[0] == handValue[1] && handValue[1] != handValue[2] && handValue[2] != handValue[3] && handValue[3] != handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] != handValue[1] && handValue[1] == handValue[2] && handValue[2] != handValue[3] && handValue[3] != handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] != handValue[1] && handValue[1] != handValue[2] && handValue[2] == handValue[3] && handValue[3] != handValue[4])
      {
         return true;
      }
      
      else if (handValue[0] != handValue[1] && handValue[1] != handValue[2] && handValue[2] != handValue[3] && handValue[3] == handValue[4])
      {
         return true;
      }
      
      else
      {
         return false;
      }
   }
   
   //returns an int representing the strength of the hand.
   function assignHandRanking(arr)
   {
      let ranking = 0;
      
      if(isStraightFlush(arr))
      {
         ranking = STRAIGHT_FLUSH;
      }
      
      else if(isFourOfAKind(arr))
      {
         ranking = FOUR_OF_A_KIND;
      }
      
      else if(isFullHouse(arr))
      {
         ranking = FULL_HOUSE;
      }
      
      else if(isFlush(arr))
      {
         ranking = FLUSH;
      }
      
      else if(isStraight(arr))
      {
         ranking = STRAIGHT;
      }
      
      else if(isThreeOfAKind(arr))
      {
         ranking = THREE_OF_A_KIND;
      }
      
      else if(isTwoPair(arr))
      {
         ranking = TWO_PAIR;
      }
      
      else if (isOnePair(arr))
      {
         ranking = ONE_PAIR;
      }
      
      else
      {
         ranking = HIGH_CARD;
      }
      
      return ranking;
   }
   
   //compare two hands to see who wins.
   function compareTwoHands(arr1, arr2)
   {
      let PLAYER1_WON = 1;
      let PLAYER2_WON = 2;
      let TIE         = 3;
      
      let handRanking1 = assignHandRanking(arr1);
      let handRanking2 = assignHandRanking(arr2);
      
      let handValue1 = assignHandValue(arr1);
      sortFromSmallToBig(handValue1);
      let handValue2 = assignHandValue(arr2);
      sortFromSmallToBig(handValue2);
      
      if (handRanking1 > handRanking2)
      {
         return PLAYER1_WON;
      }
      
      else if (handRanking1 < handRanking2)
      {
         return PLAYER2_WON;
      }
      
      else
      {
         return tieBreaker(handValue1, handValue2, handRanking1);
      }
   }
   
   //This is needed when both hand have the same ranking, we need to know exactly who wins.
   function tieBreaker(arr1, arr2, ranking)
   {
      let PLAYER1_WON = 1;
      let PLAYER2_WON = 2;
      let TIE         = 3;
      let i;
      
      if (ranking == STRAIGHT_FLUSH || ranking == STRAIGHT)
      {
         if (arr1[4] == 14 && arr2[4] == 14)
         {
            if (arr1[0] == 2 && arr2[0] == 2)
            {
               return TIE;
            }
            
            else if (arr1[0] == 10  && arr2[0] == 2)
            {
               return PLAYER1_WON;
            }
            
            else if (arr1[0] == 2  && arr2[0] == 10)
            {
               return PLAYER2_WON;
            }
            
            else
            {
               return TIE;
            }
         }
         
         else if (arr1[4] == 14 && arr1[0] == 2)
         {
            return PLAYER2_WON;
         }   
         
         else if (arr2[4] == 14 && arr2[0] == 2)
         {
            return PLAYER1_WON;
         }
            
         else if (arr1[4] > arr2[4])
         {
            return PLAYER1_WON;
         }
            
         else if (arr1[4] < arr2[4])
         {
            return PLAYER2_WON;
         }
            
         else
         {
            return TIE;
         }
      }
      
      else if (ranking == HIGH_CARD || ranking == FLUSH)
      {
            for (i = 4; i >= 0; i--)
            {
               if (arr1[i] > arr2[i])
               {
                  return PLAYER1_WON;
               }
               
               else if (arr1[i] < arr2[i])
               {
                  return PLAYER2_WON;
               }
               
               else
               {
                  continue;
               }
            }
            
            return TIE;

      }
      
      else if (ranking == FOUR_OF_A_KIND || ranking == FULL_HOUSE || ranking == THREE_OF_A_KIND)
      { 
         if (arr1[2] > arr2[2])
         {
            return PLAYER1_WON;
         }
         
         else
         {
            return PLAYER2_WON;
         }
      }
      
      else if (ranking == TWO_PAIR)
      {
         let bigPair1;
         let smallPair1;
         let single1;
         let bigPair2;
         let smallPair2;
         let single2;
         
         if (arr1[4] != arr1[3])
         {
            single1 = arr1[4];
            
            if(arr1[0] > arr1[2])
            {
               bigPair1 = arr1[0];
               smallPair1 = arr1[2];
            }
            
            else
            {
               bigPair1 = arr1[2];
               smallPair1 = arr1[0];
            }
         }
         
         else if (arr1[0] != arr1[1])
         {
            single1 = arr1[0];
            
            if(arr1[1] > arr1[3])
            {
               bigPair1 = arr1[1];
               smallPair1 = arr1[3];
            }
            
            else
            {
               bigPair1 = arr1[3];
               smallPair1 = arr1[1];
            }
         }
         
         else
         {
            single1 = arr1[2];
            
            if(arr1[0] > arr1[4])
            {
               bigPair1 = arr1[0];
               smallPair1 = arr1[4];
            }
            
            else
            {
               bigPair1 = arr1[4];
               smallPair1 = arr1[0];
            }   
         }
         
         if (arr2[4] != arr2[3])
         {
            single2 = arr2[4];
            
            if(arr2[0] > arr2[2])
            {
               bigPair2 = arr2[0];
               smallPair2 = arr2[2];
            }
            
            else
            {
               bigPair2 = arr2[2];
               smallPair2 = arr2[0];
            }
         }
         
         else if (arr2[0] != arr2[1])
         {
            single2 = arr2[0];
            
            if(arr2[1] > arr2[3])
            {
               bigPair2 = arr2[1];
               smallPair2 = arr2[3];
            }
            
            else
            {
               bigPair2 = arr2[3];
               smallPair2 = arr2[1];
            }
         }
         
         else
         {
            single2 = arr2[2];
            
            if(arr2[0] > arr2[4])
            {
               bigPair2 = arr2[0];
               smallPair2 = arr2[4];
            }
            
            else
            {
               bigPair2 = arr2[4];
               smallPair2 = arr2[0];
            }   
         }
         
         if(bigPair1 > bigPair2)
         {
            return PLAYER1_WON;
         }
         
         else if (bigPair1 < bigPair2)
         {
            return PLAYER2_WON;
         }
         
         else
         {
            if(smallPair1 > smallPair2)
            {
               return PLAYER1_WON;
            }
         
            else if (smallPair1 < smallPair2)
            {
               return PLAYER2_WON;
            }
            
            else
            {
               if(single1 > single2)
               {
                  return PLAYER1_WON;
               }
         
               else if (single1 < single2)
               {
                  return PLAYER2_WON;
               }
               
               else
               {
                  return TIE;
               }
            }
         }         
      }
      
      //one pair
      else
      {
         let pair1;
         let highCard1;
         let midCard1;
         let lowCard1;
         let pair2;
         let highCard2;
         let midCard2;
         let lowCard2;
         
         if (arr1[0] == arr1[1])
         {
            pair1 = arr1[0];
            highCard1 = Math.max(Math.max(arr1[2], arr1[3]), arr1[4]);
            lowCard1  = Math.min(Math.min(arr1[2], arr1[3]), arr1[4]);
            
            if (arr1[2] > lowCard1 && arr1[2] < highCard1)
            {
               midCard1 = arr1[2];
            }
            
            else if (arr1[3] > lowCard1 && arr1[3] < highCard1)
            {
               midCard1 = arr1[3];
            }
            
            else
            {
               midCard1 = arr1[4];
            }
         }
         
         else if (arr1[1] == arr1[2])
         {
            pair1 = arr1[1];
            highCard1 = Math.max(Math.max(arr1[0], arr1[3]), arr1[4]);
            lowCard1  = Math.min(Math.min(arr1[0], arr1[3]), arr1[4]);
            
            if (arr1[0] > lowCard1 && arr1[0] < highCard1)
            {
               midCard1 = arr1[0];
            }
            
            else if (arr1[3] > lowCard1 && arr1[3] < highCard1)
            {
               midCard1 = arr1[3];
            }
            
            else
            {
               midCard1 = arr1[4];
            }
         }
         
         else if (arr1[2] == arr1[3])
         {
            pair1 = arr1[2];
            highCard1 = Math.max(Math.max(arr1[0], arr1[1]), arr1[4]);
            lowCard1  = Math.min(Math.min(arr1[0], arr1[1]), arr1[4]);
            
            if (arr1[0] > lowCard1 && arr1[0] < highCard1)
            {
               midCard1 = arr1[0];
            }
            
            else if (arr1[1] > lowCard1 && arr1[1] < highCard1)
            {
               midCard1 = arr1[1];
            }
            
            else
            {
               midCard1 = arr1[4];
            }
         }
         
         else
         {
            pair1 = arr1[3];
            highCard1 = Math.max(Math.max(arr1[0], arr1[1]), arr1[2]);
            lowCard1  = Math.min(Math.min(arr1[0], arr1[1]), arr1[2]);
            
            if (arr1[0] > lowCard1 && arr1[0] < highCard1)
            {
               midCard1 = arr1[0];
            }
            
            else if (arr1[1] > lowCard1 && arr1[1] < highCard1)
            {
               midCard1 = arr1[1];
            }
            
            else
            {
               midCard1 = arr1[2];
            }
         }
         
         if (arr2[0] == arr2[1])
         {
            pair2 = arr2[0];
            highCard2 = Math.max(Math.max(arr2[2], arr2[3]), arr2[4]);
            lowCard2  = Math.min(Math.min(arr2[2], arr2[3]), arr2[4]);
            
            if (arr2[2] > lowCard2 && arr2[2] < highCard2)
            {
               midCard2 = arr2[2];
            }
            
            else if (arr2[3] > lowCard2 && arr2[3] < highCard2)
            {
               midCard2 = arr2[3];
            }
            
            else
            {
               midCard2 = arr2[4];
            }
         }
         
         else if (arr2[1] == arr2[2])
         {
            pair2 = arr2[1];
            highCard2 = Math.max(Math.max(arr2[0], arr2[3]), arr2[4]);
            lowCard2  = Math.min(Math.min(arr2[0], arr2[3]), arr2[4]);
            
            if (arr2[0] > lowCard2 && arr2[0] < highCard2)
            {
               midCard2 = arr2[0];
            }
            
            else if (arr2[3] > lowCard2 && arr2[3] < highCard2)
            {
               midCard2 = arr2[3];
            }
            
            else
            {
               midCard2 = arr2[4];
            }
         }
         
         else if (arr2[2] == arr2[3])
         {
            pair2 = arr2[2];
            highCard2 = Math.max(Math.max(arr2[0], arr2[1]), arr2[4]);
            lowCard2  = Math.min(Math.min(arr2[0], arr2[1]), arr2[4]);
            
            if (arr2[0] > lowCard2 && arr2[0] < highCard2)
            {
               midCard2 = arr2[0];
            }
            
            else if (arr2[1] > lowCard2 && arr2[1] < highCard2)
            {
               midCard2 = arr2[1];
            }
            
            else
            {
               midCard2 = arr2[4];
            }
         }
         
         else
         {
            pair2 = arr2[3];
            highCard2 = Math.max(Math.max(arr2[0], arr2[1]), arr2[2]);
            lowCard2  = Math.min(Math.min(arr2[0], arr2[1]), arr2[2]);
            
            if (arr2[0] > lowCard2 && arr2[0] < highCard2)
            {
               midCard2 = arr2[0];
            }
            
            else if (arr2[1] > lowCard2 && arr2[1] < highCard2)
            {
               midCard2 = arr2[1];
            }
            
            else
            {
               midCard2 = arr2[2];
            }
         }

         if (pair1 > pair2)
         {
            return PLAYER1_WON;
         }
         
         else if (pair1 < pair2)
         {
            return PLAYER2_WON;
         }
         
         else
         {
            if (highCard1 > highCard2)
            {
               return PLAYER1_WON;
            }
            
            else if (highCard1 < highCard2)
            {
               return PLAYER2_WON;
            }
            
            else
            {
               if (midCard1 > midCard2)
               {
                  return PLAYER1_WON;
               }
               
               else if (midCard1 < midCard2)
               {
                  return PLAYER2_WON;
               }
               
               else
               {
                  if (lowCard1 > lowCard2)
                  {
                     return PLAYER1_WON;
                  }
                  
                  else if (lowCard1 < lowCard2)
                  {
                     return PLAYER2_WON;
                  }
                  
                  else
                  {
                     return TIE;
                  }
               }
            }
         }
         
      }
   }
