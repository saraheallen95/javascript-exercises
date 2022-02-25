const sumAll = function(a, b) {

    let highestNumber = 0;
    let lowestNumber = 0;
    let finalSum = 0;

    if ((a >= 0) & (b >= 0) & !isNaN(a) & !isNaN(b) & (typeof a === "number") & (typeof b === "number"))
    {
    
        
        if (b > a) {
            highestNumber = b;
            lowestNumber = a;
        }
        else {
            highestNumber = a;
            lowestNumber = b;
        }

        /*console.log("lowestNumber before loop is " + lowestNumber)
        console.log("highestNumber before loop is " + highestNumber);*/

        for (let i = lowestNumber; i <= highestNumber; i++) {
            /*console.log("i is " + i);
            console.log("lowestNumber is " + lowestNumber)
            console.log("highestNumber is " + highestNumber);
            console.log("finalSum before adding i is " + finalSum)*/
            finalSum += i;
            /*console.log("finalSum after adding i is " + finalSum)*/

        } 
    }
    
    else {
        return "ERROR";

    }

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
