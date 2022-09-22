// Challenge 3
// Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Solution
function list(names) {
    //your code here
    return names.reduce((previous, current, index, array) => {
        if (index === 0) {
            return current.name;
        } else if (index === array.length - 1) {
            return previous + " & " + current.name;
        } else {
            return previous + ", " + current.name;
        }
    }, "");
}
console.log(list([]));
