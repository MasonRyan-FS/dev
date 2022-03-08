/*Ryan Mason
9/21/2021
3.4 Code Exercise 05: QuerySelector */

/* Problem #1 - Discount Double-Check */

//setting variable for price of first item
let firstPrice = parseFloat(prompt("Please enter the price of your first item"));
//setting variable for price of second item
let secondPrice = parseFloat(prompt("Please enter the price of your second item"));

//doing the math to make new variables for after the discout has been taken
let tenPercent = (firstPrice + secondPrice) * 0.10;
let tenFinal = (firstPrice + secondPrice) - tenPercent;
let fivePercent = (firstPrice + secondPrice) * 0.05;
let fiveFinal = (firstPrice + secondPrice) - fivePercent;
let noDiscount = firstPrice + secondPrice;

//checking if the total is greater than or equal to 100
if((firstPrice + secondPrice) >= 100)
{
    //changing the h1 class to soemething else based on the results
    document.querySelector("h1").className = "secondClass";
    document.querySelector(".secondClass").innerHTML = "Your total purchase is $"+tenFinal+", which includes your 10% discount";
}
//checking if the total is between 50 and 100
else if(noDiscount >= 50 && noDiscount < 100)
{
    //changing the h1 class to soemething else based on the results
    document.querySelector("h1").className = "secondClass";
    document.querySelector(".secondClass").innerHTML = "Your total purchase is $"+fiveFinal+", which includes your 5% discount";
}
//if its anything else, it will default to this
else
{
    //changing the h1 class to soemething else based on the results
    document.querySelector("h1").className = "firstClass";
    document.querySelector(".firstClass").innerHTML = "Your total purchase is $"+noDiscount+"";
}




/*Problem #2 - Last Gas Station for Miles */
//asking user for different answers
let maxGallon = parseInt(prompt("What is the maximum number of gallons your car tank holds?"));
let howFull = parseFloat(prompt("How full is your gas tank? (in %)"));
let percentGas = howFull / 100;
let milesPer = parseInt(prompt("How many miles per gallon does your car get?"));
//doing math to create new variables based on the answers
let firstNum = maxGallon * percentGas;
let finalNum = firstNum * milesPer;
//checking if final results are greater than or equal to 200
if(finalNum >= 200)
{
    //if true, give anything with gasheader id the newGas id. then we create a function whenever the text answer button is clicked to change the html and put an image on the screen
    document.querySelector("#gasHeader").id = "newGas";
    document.querySelector("#textAnswer").addEventListener("click",function(e)
    {
        document.querySelector("#newGas").innerHTML = "Yes, you can drive "+finalNum+" miles and you can make it without stopping for gas!";
    });
    document.querySelector("#imgAnswer").addEventListener("click",function(e)
    {
        document.querySelector("#picture").src = "IMG/enoughGas.jpg"
    });
}
else if(finalNum < 200)
{
     //if true, give anything with gasheader id the noGas id. then we create a function whenever the text answer button is clicked to change the html and put an image on the screen
    document.querySelector("#gasHeader").id = "noGas";
    document.querySelector("#textAnswer").addEventListener("click",function(e)
    {
        document.querySelector("#noGas").innerHTML = "You can only drive "+finalNum+" miles more, better get gas now while you can!";
    });
    //add listeners for the image buttons
    document.querySelector("#imgAnswer").addEventListener("click",function(e)
    {
        document.querySelector("#picture").src = "IMG/notEnoughGas.jpg"
    });
}




