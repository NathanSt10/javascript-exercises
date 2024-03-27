const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (x < 0 || y < 0) return "ERROR";
    // assign i to the lower int
    let i = (x < y) ? x : y;
    // figure out which int to iterate up to
    let ceiling = x + y - i;
    let sum = 0;
    for (; i <= ceiling; ++i) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
