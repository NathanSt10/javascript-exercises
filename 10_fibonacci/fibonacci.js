const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    let i = 1;
    let x = 1;
    let y = 0;
    while (i < n) {
        temp = x;
        x = x + y;
        y = temp;
        ++i;
    }
    return x;
};

// Do not edit below this line
module.exports = fibonacci;
