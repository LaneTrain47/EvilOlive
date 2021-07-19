function getWord() {
    let word = document.getElementById("userInput").value;
    word = word.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "");

    if (word.length < 2) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a word with at least 2 letters.'
        })
        return;
    }

    let revWord = flipword(word);
}