const palindromes = function (input) {
    let start = 0;
    let end = string.length-1;
    while (start <= end) {
        let test = string[start++].toLowerCase()
        let test2 = string[end--].toLowerCase()
        if (test !== test2) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
