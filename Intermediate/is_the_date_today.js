// Challenge 8
// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Solution
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
}
