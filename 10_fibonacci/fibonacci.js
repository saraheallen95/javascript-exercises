const fibonacci = function(number) {

    if (number > 0) {
        let fibonacciResult = 1;
        let firstNum = fibonacciResult;

        let arr = [1, 1];

        for (let i = 0; i < number; i++)
        {
            /*console.log("number is " + number + "; i is " + i);*/
            fibonacciResult = arr[i] + arr[i+1];
            arr.push(fibonacciResult);
            /*console.log("fibonacciResult is " + fibonacciResult);*/
        }

        /*console.log("arr is " + arr)*/
        return arr[number - 1];
    }

    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
