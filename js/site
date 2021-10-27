//get starting values from the screen
//Controller Function
function getUserString() {
    //Get the user's input
    let userString = document.getElementById("userString").value;

    //Reverse the user's input - separate function
    let revString = reverseStringA(userString);

    //Compare original input and reversed input - separate function
    let result = compareStringsA(userString, revString);

    //Output Result - separate function
    displayDataB(result, userString, revString);

};

function reverseStringA(userString) {
    let startValue = userString.length - 1;
    let endValue = 0;

    //User input = Frank
    //Frank is a string AND an array of characters
    //[F, r, a, n, k]

    let revString = "";

    //In a decremented for loop the startValue must be higher than the endValue
    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i];
    };

    //Loop 1 - "k"
    //Loop 2 - "kn"
    //Loop 3 - "kna"
    //Loop 4 - "knar"
    //Loop 5 - "knarF"
    return revString
}

function reverseStringB(userString) {
    //Tall code using intermediate variables for troubleshooting
    let splitArray = userString.split("");
    let revArray = splitArray.reverse();
    let rejoinArray = revArray.join("");

    //Uses array functions to reverse the string
    return userString.split('').reverse().join("");
}


function compareStringsA(userString, revString) {
    //This is the work part
    //A != a
    //Normalize the case
    //Extra credit - "A man, a plan, a canal; Panama" - is a palindrome when the spaces and special character
    //  are removed
    //RegEx is used for this - Google is your friend
    let cleanUser = userString.replace(/[^A-Z0-9]/ig, "");
    let cleanRev = revString.replace(/[^A-Z0-9]/ig, "");

    let normalUser = cleanUser.toLowerCase();
    let normalRev = cleanRev.toLowerCase();

    //== tests for equal value
    // a == a
    // 10 == 10
    // "10" == 10

    //=== tests for equal value and type
    // a === a - true
    // 10 === 10 - true
    // "10" === 10 - false

    if (normalUser == normalRev) {
        return "was a palindrome";
    } else {
        return "was not a palindrome";
    };
};

function compareStringsB(userString, revString) {
    //This is the work part
    //A != a
    //Normalize the case
    //Extra credit - "A man, a plan, a canal; Panama" - is a palindrome when the spaces and special character
    //  are removed
    //RegEx is used for this - Google is your friend

    //No functional difference, written wide not tall
    let normalUser = userString.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    let normalRev = revString.toLowerCase().replace(/[^A-Z0-9]/ig, "");

    //== tests for equal value
    // a == a
    // 10 == 10
    // "10" == 10

    //=== tests for equal value and type
    // a === a - true
    // 10 === 10 - true
    // "10" === 10 - false

    if (normalUser == normalRev) {
        return "was a palindrome";
    } else {
        return "was not a palindrome";
    };
};

function compareStringsC(userString, revString) {
    const regEx = /[^A-Z0-9]/ig;

    //This is the work part
    //A != a
    //Normalize the case
    //Extra credit - "A man, a plan, a canal; Panama" - is a palindrome when the spaces and special character
    //  are removed
    //RegEx is used for this - Google is your friend

    //No functional difference, written wide not tall set the RegEx as a variable
    let normalUser = userString.toLowerCase().replace(regEx, "");
    let normalRev = revString.toLowerCase().replace(regEx, "");

    //== tests for equal value
    // a == a
    // 10 == 10
    // "10" == 10

    //=== tests for equal value and type
    // a === a - true
    // 10 === 10 - true
    // "10" === 10 - false

    if (normalUser == normalRev) {
        return "was a palindrome";
    } else {
        return "was not a palindrome";
    };
};

function displayDataA(result, userString, revString) {
    //We want to output three things
    //1. The original input
    //2. The reversed input
    //3. Was it a palindrome
    let output = document.getElementById("results");

    output.innerHTML = `After reversing your string I found that it ${result}<br />You entered ${userString}<br />Reversed was ${revString}`;
};