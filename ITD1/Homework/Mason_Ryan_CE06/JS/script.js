/* Ryan Mason
9/26/2021
4.2 Code Exercise 06: HTML Forms */

//Problem #1 - Fill'er Up

/* Conversion Table
1 gallon = 4 Quarts
1 gallon = 8 Pints
1 gallon = 16 cups */

//make computer listen for when i click button
document.querySelector("#conButton").addEventListener("click",function(e)
{
    //if gallons is not negative and quart is checked, the following will happen
    if(document.querySelector("#numGallon").reportValidity() && 
       document.querySelector("#quartCon").checked
    )
    {   //get number of gallons in a variable
        let gal = parseFloat(document.querySelector("#numGallon").value);
        //multiply by 4 for conversion
        let quartCon = gal * 4;
        //show results in the different areas
        document.querySelector("#quartFinal").innerHTML = ""+quartCon+" quarts";
        document.querySelector("#pintFinal").innerHTML = "0 Pints";
        document.querySelector("#cupFinal").innerHTML = "0 Cups";

    }
    //same thing as quarts but with the pint conversion
    else if(document.querySelector("#numGallon").reportValidity() && 
            document.querySelector("#pintCon").checked
    )
    {
        let gal = parseFloat(document.querySelector("#numGallon").value);
     
        let pintCon = gal * 8;

        document.querySelector("#quartFinal").innerHTML = "0 Quarts";
        document.querySelector("#pintFinal").innerHTML = ""+pintCon+" Pints";
        document.querySelector("#cupFinal").innerHTML = "0 Cups";

    }
    //same thing as quarts and pints but with cup conversion
    else if(document.querySelector("#numGallon").reportValidity() && 
            document.querySelector("#cupCon").checked
    )
    {
        let gal = parseFloat(document.querySelector("#numGallon").value);
     
        let cupCon = gal * 16;

        document.querySelector("#quartFinal").innerHTML = "0 Quarts";
        document.querySelector("#pintFinal").innerHTML = "0 Pints";
        document.querySelector("#cupFinal").innerHTML = ""+cupCon+" Cups";

    }


});

//Problem #2 - Movie Star

//listening for button to be pressed
document.querySelector("#checkMem").addEventListener("click",function(e)
{
    //assigning all the inputed numbers to different variables
    let dvdNum = parseInt(document.querySelector("#dvd").value);
    let bluNum = parseInt(document.querySelector("#bluray").value);
    let ultraNum = parseInt(document.querySelector("#ultraViolet").value);
    //adding up all the variables to get a final total number
    let total = (dvdNum + bluNum + ultraNum);
    //if all parameters are met and total is less than or equal to 50 they get this text and image
    if(document.querySelector("#dvd").reportValidity() &&
       document.querySelector("#bluray").reportValidity() &&
       document.querySelector("#ultraViolet").reportValidity() &&
       total <= 50
    )
    {
            document.querySelector("#resulter").innerHTML = `Your collection contains only ${total} movies, which makes you a bronze star member.`;
            document.querySelector("#picture").src= "IMG/bronzeStar.jpg";
    }
    //same as bronze star but with silver
    else if(document.querySelector("#dvd").reportValidity() &&
            document.querySelector("#bluray").reportValidity() &&
            document.querySelector("#ultraViolet").reportValidity() &&
            total > 50 && total < 100
            )
    {
            document.querySelector("#resulter").innerHTML = `Your collection contains ${total} movies, which makes you a silver star member.`;
            document.querySelector("#picture").src= "IMG/silverStar.jpg";
    }
    //same as bronze and silver star but with gold
    else if(document.querySelector("#dvd").reportValidity() &&
            document.querySelector("#bluray").reportValidity() &&
            document.querySelector("#ultraViolet").reportValidity() &&
            total >= 100
            )
    {
            document.querySelector("#resulter").innerHTML = `Wow! Your collection contains ${total} movies, which makes you a gold star member.`;
            document.querySelector("#picture").src= "IMG/goldStar.jpg";
    }

});



