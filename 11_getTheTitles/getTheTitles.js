const getTheTitles = function(arr) {

    let newArr = [];
    let book = "";
    
    for (let i = 0; i < arr.length; i ++) {
        book = arr[i].title;
        newArr.push(book);
    }
    
    return newArr;

};

// Do not edit below this line
module.exports = getTheTitles;
