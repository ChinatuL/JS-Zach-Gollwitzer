// Challenge
// Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// Solution
class SmallestIntegerFinder {
    findSmallestInt(arrayOfNumbers) {
        let smallestInteger;
        for (let i = 0; i < arrayOfNumbers.length; i++) {
            const arrNumber = arrayOfNumbers[i];
            if (i === 0) {
                smallestInteger = arrNumber;
            }
            if (arrNumber < smallestInteger) {
                smallestInteger = arrNumber;
            }
        }
        return smallestInteger;
    }
}
