/* Ryan Mason
9/14/2021
For Fun Assignment */

let numberChildren = parseInt(prompt("How many children age 12 and under do you have?"));
let numberTeen = parseInt(prompt("How many teenagers ages 13-17 do you have?"));
let numberAdult = parseInt(prompt("How many Adults, ages 18-55 do you have?"));
let numberElder = parseInt(prompt("How many Elders, ages 56 and up do you have?"));
let askMember = prompt("Do you qualify for the movie discount? Yes or No (12% off ticket price)").toUpperCase();
let askMovie = parseInt(prompt("Please enter the number of the movie you are following. 1 - Fun Fish(G)  2 - Bumbo Dumbo(PG-13)  3 - Tibbies(R)"));

let childrenPrice = 5.50;
let teenPrice = 6.00;
let adultPrice = 7.00;
let elderPrice = 5.00;

let childrenTotal = childrenPrice * numberChildren;
let teenTotal = teenPrice * numberTeen;
let adultTotal = adultPrice * numberAdult;
let elderTotal = elderPrice * numberElder;

if(numberChildren >= 1 && askMovie == 3)
{
   alert("You cannot see the selected movie because there are children in your party. Please select a different movie. Please refresh the page");
}

if(askMember == "NO" && askMovie == 3)
{
    let noDiscountPrice = childrenTotal + teenTotal + adultTotal + elderTotal;
    console.log("Your total will be $"+noDiscountPrice+". You are seeing Tibbies. Happy Viewing!");
}

else if(askMember == "NO" && askMovie == 2)
{
    let noDiscountPrice = childrenTotal + teenTotal + adultTotal + elderTotal;
    console.log("Your total will be $"+noDiscountPrice+". You are seeing Bumbo Dumbo. Happy Viewing!");
}

else if(askMember == "NO" && askMovie == 1)
{
    let noDiscountPrice = childrenTotal + teenTotal + adultTotal + elderTotal;
    console.log("Your total will be $"+noDiscountPrice+". You are seeing Fun Fish. Happy Viewing!");
}

else if(askMember == "YES" && askMovie == 3)
{
    let discountBefore = (childrenTotal + teenTotal + adultTotal + elderTotal) * 0.12;
    let discountPrice = (childrenTotal + teenTotal + adultTotal + elderTotal) - discountBefore;
    console.log("Your total will be $"+discountPrice+". This includes your 12% member discount. You are seeing Tibbies. Happy Viewing!");
}

else if(askMember == "YES" && askMovie == 2)
{
    let discountBefore = (childrenTotal + teenTotal + adultTotal + elderTotal) * 0.12;
    let discountPrice = (childrenTotal + teenTotal + adultTotal + elderTotal) - discountBefore;
    console.log("Your total will be $"+discountPrice+". This includes your 12% member discount. You are seeing Bumbo Dumbo. Happy Viewing!");
}

else if(askMember == "YES" && askMovie == 1)
{
    let discountBefore = (childrenTotal + teenTotal + adultTotal + elderTotal) * 0.12;
    let discountPrice = (childrenTotal + teenTotal + adultTotal + elderTotal) - discountBefore;
    console.log("Your total will be $"+discountPrice+". This includes your 12% member discount. You are seeing Fun Fish. Happy Viewing!");
}

else{
    alert("You have entered some type of information incorrectly. Please double check you are inputting your responses as requested. Refresh the page to try again.");
}
