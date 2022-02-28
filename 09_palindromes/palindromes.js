const palindromes = function(word) {

    let wordArray = word.split("");
    let backwardsArray = [];
    let wordLength = wordArray.length;
    let lowerCasedWord = [];
    lowerCasedWord = wordArray.map(wordArray => wordArray.toLowerCase())

    for (let i = (wordArray.length - 1); i >= 0; i--) {

        if (lowerCasedWord[i].toLowerCase() != lowerCasedWord[i].toUpperCase()
        ) {
            backwardsArray.push(lowerCasedWord[i]);

        }

        else {
            lowerCasedWord.splice(i, 1);
        }
    }

    if (backwardsArray.join() == lowerCasedWord.join()) {return true;}
    else {return false};

};

// Do not edit below this line
module.exports = palindromes;
