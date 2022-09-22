// Challenge 1
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out./

// Solution

function filter_list(arr) {
    // Return a new array with the strings filtered out
    return arr.filter((arrItem) => Number.isInteger(arrItem));
}
