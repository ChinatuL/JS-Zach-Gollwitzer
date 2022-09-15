//Challenge
// Make a number negative
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Solution
function makeNegative(num) {
    return num < 0 ? num : num * -1;
}
console.log(makeNegative(-6));
