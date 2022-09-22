// Challenge 7
// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length;
}
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
