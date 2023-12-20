const fibonacci = function(i) {
    i = parseInt(i);
    if (i < 0) {
        return 'OOPS';
    };
    if (i == 1 || i == 2) {
        return 1;
    }
    let fib = [1, 1];
    for (let j=0; j<i-2; j++) {
        fib.push(fib[j] + fib[j+1]);
    };
    return fib.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
