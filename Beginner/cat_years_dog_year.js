// Challenge 24
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// Solution

const humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears == 1) return [1, 15, 15];
    if (humanYears == 2) return [2, 24, 24];
    return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
};
