/* Ryan Mason
9/13/2021
Conditoinals */



//if statement will start conditional block

//will not output anything to console because the if statement is fale
if(3>5)
{
    console.log("3 is less than 5");
}

//will output "Testing Equality" to console because the if statement is true
if(6==6)
{
    console.log("Testing equality");
}


//using a variable for the condition to test, 
let num1 = 10;

if(num1>3.5)
{
    console.log("Using a variable for the condition to test")
}

//User prompt
let userValue = parseInt(prompt("Type in a whole number"));


//if the user inputs a value greater than 10, the message will appear in the console.
//if the user inputs a value less than 10, the console.log wont be executed
if(userValue>10)
{
    console.log("You typed in the number "+ userValue +"");
    console.log("It is bigger than the number 10!");
}


//else statements is a "catch all"
//if the code gets to an else statement, it will run

//If - else - it is an A or B situation
//either the if statement will run or the else statement will run
//never both and never none


if(4<8)
{
    console.log("If codeblock will run");
}
else
{
    console.log("else code block will run");
}



let age = 20;

if (age >= 21)
{
    console.log("You are old enough to drink, lets have a party");
}
else
{
    console.log("You are too young to drink, try a virgin drink");
}


//User prompt
//Anytime you are using money, you need to use Float!
let moneyInWallet = parseFloat(prompt("how much cash is in your wallet?"));

if(moneyInWallet >= 20)
{
    console.log("Can I borrow 10$");
}
else
{
    console.log("Nevermind, I will ask someone else.");
}


//test a string

let answer = "yes";

if(answer == "yes")
{
    console.log("We are testing a string and it is yes!");
}
else
{
    console.log("We are testing the string and it is not a yes");
}



//Else if(condition to test)

//Ticket Booth - Arcade

//This variable is the number of tickets
let numTicket = parseInt(prompt("Enter how many tickets you have:"));

/*
Prize table
100 or more - Video Game
50 or more - Stuffed Animal
10 or more - Eraser
Less than 10 - Nothing

*/

//Conditional 
if(numTicket >= 100)
{
    console.log("You have enough tickets to buy a video game!");
}
else if(numTicket >= 50)
{
    console.log("You have enough tickest to buy a Stuffed Animal!");
}
else if(numTicket >= 10)
{
    console.log("You have enough tickets to buy an Eraser!");
}
else if(numTicket < 10)
{
    console.log("You do not have enough tickets to buy anything.");
}