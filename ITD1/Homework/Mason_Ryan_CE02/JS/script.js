/* Ryan Mason
9/6/2021
Code Exercise 02: Story Time */

alert("Hello. I am going to ask you a series of questions, and then tell you a story I made up using your responses.");

//prompt the user
let userName = prompt("What is your name?");

//prompt will return the value when the user presses the OK button on the pop-up box

//if the user presses Cancel it returns a null :(

//ask the user what their favorite color is
let colorName = prompt("What is your favorite color?");

//ask the user to choose a number
let numberName = prompt("Please choose a number");

//ask the user what their favorite movie is
let movieName = prompt("Tell me, what is your favorite movie?");

//ask the user what their favorite type of animal is
let animalType = prompt("Please choose an animal type for this story");

//ask the user for an adjective
let adjType = prompt("Please tell me an adjective")

//alert the user that they have finished, and instructions on how to read it
alert(""+userName+", please right click and inspect element. Then click on the console tab to read your story!");

//create a story in the console log that uses the inputed responses
console.log("%cMany many years ago, there lived a brave warrior that sailed the worlds most dangerous waters. This persons name was "+userName+". "+userName+" lived alone, only to be accompanied by their pet "+animalType+". After becoming rich from treasure, this brave warrior decided to retire, allowing them to watch "+movieName+" every single day. This was the life they dreamed of. That is until the enemies invaded. "+userName+" looked out their window one day and saw "+numberName+" "+adjType+" creatures falling from the sky onto the earth. The mighty warrior rose up, unsheathed their mighty "+colorName+" sword, and vanquished all "+numberName+" of them. This was the last battle for "+userName+", as they fell to the ground from exhaustion. The hero passed on later that day, but their name was never forgotten. Every year, a holiday is celebrated in the honor of "+userName+". The end.", "color:blue; font-size:50px");



