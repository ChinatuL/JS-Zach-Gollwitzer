// Challenge 20
// Given an array of integers, return a new array with each value doubled.

function maps(arr) {
    const result = arr.map((arrItem) => {
        return arrItem * 2;
    });
    return result;
}

console.log(maps([1, 2, 3]));
