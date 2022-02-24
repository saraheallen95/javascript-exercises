const repeatString = function(string, num) {
  
    let returnString = "";

    if (num > 0) {
        for (i=0; i < num; i++){
            returnString += string; 
        /* console.log("returnString after adding is " + returnString);
            console.log("num is" + i);
            console.log("i is" + i);
            console.log("string is" + string);*/
        }

        return returnString;
    }

    else if (num == 0) {
        return returnString;
    }

    else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
