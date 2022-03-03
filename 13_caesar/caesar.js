const caesar = function(string, num) {

\    const stringArr = string.split("");
    let arrUpper = [];
    let arrLower = [];
    let returnString = "";
\
    for (let i = 65; i < 91; i++) {
        arrUpper.push(String.fromCharCode(i));
    }

    for (let j = 97; j < 123; j++) {
        arrLower.push(String.fromCharCode(j));
    }

   let index = 0; 

   for (let l = 0; l < stringArr.length; l++) {


            if (stringArr[l].toLowerCase() != stringArr[l].toUpperCase()) {

                if (stringArr[l].toUpperCase() === stringArr[l]) {
                    for (let m = 0; m < arrUpper.length; m++) {


                        if (stringArr[l] == arrUpper[m]) {
                            index = m + num;

                            if (index >= (arrUpper.length - 1)) {

                                index = index%(arrUpper.length);

                            }

                            else if (index < 0) {
                                
                                if ((index + arrUpper.length) >= 0) {
                                    index += arrUpper.length;
                                }
 
                                else {
                                    index = index%arrUpper.length + arrUpper.length;
                                }

                            }

                            returnString += arrUpper[index];

                        }

                    }
                }

                else if (stringArr[l].toLowerCase() === stringArr[l]) {
                
                    for (let n = 0; n < arrLower.length; n++) {

                        if (stringArr[l] == arrLower[n]) {
                            index = n + num;

                            if (index >= (arrLower.length - 1)) {

                                index = index%(arrLower.length);

                            }

                            else if (index < 0) {

                               if ((index + arrLower.length) >= 0) {
                                   index += arrLower.length;
                               }

                               else {
                                   index = index%arrLower.length + arrLower.length;
                               }

                            }

                            returnString += arrLower[index];

                        }

                    }   

                }
            }

            else {
                returnString += stringArr[l];

            }
        }
  


    return returnString;


};

// Do not edit below this line
module.exports = caesar;
