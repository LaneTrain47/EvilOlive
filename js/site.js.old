//Get user input -- CONTROLLER FUNCTION
function getValue() {

    //Ensures that the class properties of target element are read 
    //first so that they are applied when the page loads.
    document.getElementById("alert").classList.add("invisible")

    //Reads user input from the field on the web page. Removes
    //capitalization for easier readability.
    let userString = document.getElementById("userString").value.toLowerCase();

    //Removes punctuation
    let regex = /[^a-zA-Z0-9]/gi;
    userString = userString.replace(regex, "");

    //Reverses the user input
    let revString = reverseString(userString);

    //Displays what the user typed, but backward.
    displayString(revString);
}

//Reverse the string -- LOGIC FUNCTION
function reverseString(userString) {

    //Defines revString as an array, which gives the ability to assign
    //array functionality to the characters the user entered.    
    let revString = [];

    //As a string is also an array, and arrays have numerical indices,
    //a for loop can be used to read and then reverse those indices.
    //To determine the last position in an array with an unknown number of
    //characters, use userString.length - 1.
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    return revString;

}

//Display the reversed user input -- VIEW FUNCTION
function displayString(revString) {

    //Writes a message that will be seen by the user on the app page.
    document.getElementById("alert").innerHTML = `When reversed, your phrase is: ${revString}`;

    //The alert that was made invisible in line 6 above now needs to 
    //be made visible again. Specify the specific classList to remove
    //by using .remove followed by parentheses containing the name of the 
    //class you wish to eliminate contained in quotation marks.
    document.getElementById("alert").classList.remove("invisible");

}