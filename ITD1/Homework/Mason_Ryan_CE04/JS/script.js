/* Ryan Mason
9/13/2021
2.5 Code Exercise 04: Conditionals */


/*Grade Letter Calculator*/
let numberGrade = parseInt(prompt("Please enter your number grade:"));

/*
Grade Table
A = 90-100
B = 80-89
C = 70-79
D = 60-69
F = 0-59
*/

//testing the number in each if or else statement, if it is true in one of them then it will trigger that if or else if statement, if its false, it will continue on until it runs into a true statement
if(numberGrade <= 100 && numberGrade >= 90)
{
    let letterGrade = "A";
    console.log("You have a "+numberGrade+"%, which means you have earned an "+letterGrade+" in the class");
}
    //testing if grade entered is between 80 and 89
    else if(numberGrade >= 80 && numberGrade <= 89)
{   //if it is, it will output that message into the console
    let letterGrade = "B";
    console.log("You have a "+numberGrade+"%, which means you have earned a "+letterGrade+" in the class");
}   //testing if grade entered is between 70 and 79
    else if(numberGrade >= 70 && numberGrade <= 79)
{   //if it is, it will output that message into the console
    let letterGrade = "C";
    console.log("You have a "+numberGrade+"%, which means you have earned a "+letterGrade+" in the class");
}   //testing if grade entered is between 60 and 69
    else if(numberGrade >= 60 && numberGrade <= 69)
{   //if it is, it will output that message into the console
    let letterGrade = "D";
    console.log("You have a "+numberGrade+"%, which means you have earned a "+letterGrade+" in the class");
}   //testing if grade entered is between 0 and 59
    else if(numberGrade >= 0 && numberGrade <= 59)
{   //if it is, it will output that message into the console
    let letterGrade = "F";
    console.log("You have a "+numberGrade+"%, which means you have earned a "+letterGrade+" in the class");
}   //if none of the following statements triggered, this one will automatically be triggered telling the user they entered an invalid number.
    else
    {
        alert("Please refresh and enter a valid grade number 0-100");
    }



    /*Pumpkin Patch Pickers*/


    let weight = parseFloat(prompt("Please enter your pumpkin weight"));

    /*
    Pumpkin Weight          Cost Per Pound
    
    Up to 5.5 LBS               $1.00 per LBS
    Up to 10.75 LBS             $0.90 per LBS
    Up to 25 LBS                $0.80 per LBS
    Up to 50 LBS                $0.70 per LBS
    Up to and including 100LBS  $0.60 per LBS
    Above 100 LBS               $0.50 per LBS
    */
    //checking if the inputed weight falls under this category
    if(weight > 100)
{   //if it is, it will output that message into the console
    let baseCost = 0.50;
    let newCost = weight * baseCost;
    let finalCost = (Math.round(newCost * 100) / 100).toFixed(2);
    console.log("Your pumpkin of "+weight+"lbs costs $"+finalCost+"");

}   //checking if the inputed weight falls under this category
    else if(weight > 50 && weight <= 100)
{   //if it is, it will output that message into the console
    let baseCost = 0.60;
    let newCost = weight * baseCost;
    let finalCost = (Math.round(newCost * 100) / 100).toFixed(2);
    console.log("Your pumpkin of "+weight+"lbs costs $"+finalCost+"");

}   //checking if the inputed weight falls under this category
    else if(weight > 25 && weight <= 50)
{   //if it is, it will output that message into the console
    let baseCost = 0.70;
    let newCost = weight * baseCost;
    let finalCost = (Math.round(newCost * 100) / 100).toFixed(2);
    console.log("Your pumpkin of "+weight+"lbs costs $"+finalCost+"");

}   //checking if the inputed weight falls under this category
    else if(weight > 10.75 && weight <= 25)
{   //if it is, it will output that message into the console
    let baseCost = 0.80;
    let newCost = weight * baseCost;
    let finalCost = (Math.round(newCost * 100) / 100).toFixed(2);
    console.log("Your pumpkin of "+weight+"lbs costs $"+finalCost+"");

}   //checking if the inputed weight falls under this category
    else if(weight > 5.5 && weight <= 10.75)
{   //if it is, it will output that message into the console
    let baseCost = 0.90;
    let newCost = weight * baseCost;
    let finalCost = (Math.round(newCost * 100) / 100).toFixed(2);
    console.log("Your pumpkin of "+weight+"lbs costs $"+finalCost+"");

}   //checking if the inputed weight falls under this category
    else if(weight >= 0 && weight <= 5.5)
{   //if it is, it will output that message into the console
    let baseCost = 1.00;
    let newCost = weight * baseCost;
    let finalCost = (Math.round(newCost * 100) / 100).toFixed(2);
    console.log("Your pumpkin of "+weight+"lbs costs $"+finalCost+"");
}
    //if the weight entered doesnt fall under any of the previous categories, the user will be prompted with this message
    else
{
    alert("The number you entered for pumpkin weight was invalid. Please refresh and re-enter a valid weight (any number 0 or greater)");
}


/*Loyalty Card*/

//asking the user to input their two prices, and whether or not they are a preffered customer
let firstPrice = parseFloat(prompt("Please enter the exact price of your first item:"));
let secondPrice = parseFloat(prompt("Please enter the exact price of your second item:"));
//I added the .toUpperCase so that the user can input yes or no in any capitalization, so there can be no errors with that
let member = prompt("Are you a preffered customer? (Yes or No)").toUpperCase();

//if the customer responds yes to preffered memeber, the two prices will be added up and then multiplyed by the 0.15 discount. 
if (member == "YES")
{  
   let loyalDiscount = (firstPrice + secondPrice) * 0.15;
   //to get the final price, we add up the two prices again and then subtract that 15% discount that we just got, and then print out in the console what the final price is and include the 15% discount text
   let loyalFinal = firstPrice + secondPrice - loyalDiscount;
   console.log("Your total purchase is $"+loyalFinal+", which includes your 15% discount.");
}
//if the customer responds no, then we just simply add up the two prices and show that in the console. there will be no statement about a discount after
else if(member == "NO")
{  
    let loyalNoDiscount = (firstPrice + secondPrice)
    console.log("Your total purchase is $"+loyalNoDiscount+".")
}
//if the user doesnt input yes or no, this will tell them the total cannot be calculated because they didnt answer yes or no.
else
{
    console.log("You have typed in something wrong and I cannot calculate the total.")
}