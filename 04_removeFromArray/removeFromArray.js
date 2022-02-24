const removeFromArray = function(Array, value) {

    let args = [...arguments];
    args.shift();
    let argsLength = args.length;
    console.log("args before loop is " + args);
    console.log("args.length is " + argsLength)

    let newArray = [""];
    let arrayCounter = 0;

    for (let i = 0; i < argsLength; i++) {
        
        console.log("args[i] is " + args[i]);
        console.log("i is " + i);

            for (let j = 0; j < (Array.length); j++) {
                console.log("array[j] is " + Array[j]);
                if (Array[j] === args[i]) {
                    
                    console.log("index is j: " + j);
                    newArray = Array.splice(j, 1);
                    arrayCounter += 1;
                }

                }

         }
   
    console.log("items removed were: " + newArray);
    return Array;

};

// Do not edit below this line
module.exports = removeFromArray;
