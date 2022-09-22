// Challenge 5
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// Solution
function persistence(num) {
    result = 0;
    num = num.toString();
    while (num.length > 1) {
        result++;
        num = num
            .split("")
            .map(Number)
            .reduce((a, b) => a * b)
            .toString();
    }
    return result;
}
console.log(persistence(999));
