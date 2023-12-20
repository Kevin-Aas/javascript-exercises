const palindromes = function (str) {
    let original = str;
    // Format the original string
    original = original.toLowerCase();
    original = original.replaceAll(' ', '');
    original = original.replaceAll('!', '');
    original = original.replaceAll('.', '');
    original = original.replaceAll(',', '');
    // Reverse the formated string
    let reversed = '';
    for (let i=original.length-1; i>=0; i--) {
        reversed = reversed.concat(original.charAt(i));
    };
    // Check if they are the same
    if (reversed === original) {
        return true;
    }
    else {
        return false;
    };
};

// Do not edit below this line
module.exports = palindromes;
