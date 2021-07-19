function getWord() {
    let word = document.getElementById("userInput").value;
    word = word.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");
}