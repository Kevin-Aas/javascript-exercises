const removeFromArray = function(array, ...args) {
    let newArray = [];
    for (let elmnt of array) {
        if (!(args.includes(elmnt))) {
            newArray.push(elmnt);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
