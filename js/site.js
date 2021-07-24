//get user input -- CONTROLLER FUNCTION
function getValue() {
    //read user input from the field on the web page
    let userInput = document.getElementById("userInput").value;
}

//reverse the string -- LOGIC FUNCTION
function reverseString() {

}

//display the reversed user input -- VIEW FUNCTION
function displayMessage() {

}










//removes spaces, ignores punctuation
let regex = /[^a-zA-Z0-9]/gi;
userInput = userInput.replace(regex, "");

//converts all characters to lowercase
userInput = userInput.toLowerCase();

//check for a palindrome
let returnObj = checkForPalindrome(userInput);

//display a message in response to a button click
displayMessage(returnObj);


//evaluate user input and determine if the phrase entered is 
//the same when read both backward and forward
function checkForPalindrome(userInput) {


}


let revString = [];
let returnObj = {};

for (let index = userInput.length - 1; index >= 0; index--) {
    revString += userInput[index];
}
if (revString == userInput) {
    returnObj.msg = "Your olive is evil! You entered a palindrome."
} else {
    returnObj.msg = "Sorry, your olive is not evil. Your phrase is not a palindrome."
}
returnObj.reversed = revString;

return returnObj;

//display a message
function displayMessage() {

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
}
}