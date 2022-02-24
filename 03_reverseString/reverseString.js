const reverseString = function(string) {
    let reversedArray = [""];
    let stringArray = Array.from(string);

    for (i = 1; i <= stringArray.length; i ++) {
        reversedArray.push(stringArray[stringArray.length - i]);
    }

    let reversedString = reversedArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
