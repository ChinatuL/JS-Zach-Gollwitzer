// Challenge 9
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
// The input will be a lowercase string with no spaces.

// Solution
function capitalize(str) {
    const evenCapitalization = str
        .split("")
        .map((item, index) => (index % 2 === 0 ? item.toUpperCase() : item))
        .join("");
    const oddCaptilization = str
        .split("")
        .map((item, index) => (index % 2 !== 0 ? item.toUpperCase() : item))
        .join("");
    return [evenCapitalization, oddCaptilization];
}
console.log(capitalize("abcdef"));
