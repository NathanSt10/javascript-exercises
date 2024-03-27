// my solution
// const removeFromArray = function(arr, ...toRemove) {
//     for (const i of toRemove) {
//         for (let j = 0; j < arr.length; ++j) {
//             if (arr[j] === i) {
//                 arr.splice(j, 1);
//                 --j;
//             }
//         }
//     }
//     return arr;
// };

// given solution, that I broke down to be more readable for me
    var removeFromArray = function(array, ...args) {
        newArr = array.filter(  // iterates through each value in array and passes as val
            function (val) {
                return !args.includes(val); //if val is in args, then return false to exclude it from newArr else add it to newArr
            }
        );
        return newArr;
    }

// Do not edit below this line
module.exports = removeFromArray;
