const removeFromArray = function(array, value) {
    let newArray = [];
    for (let elmnt of array) {
        if (elmnt != value) {
            newArray.push(elmnt);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
