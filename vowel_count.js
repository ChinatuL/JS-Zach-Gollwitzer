// Challenge
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelCount = 0;
    const stringArray = str.split("");
    for (let i = 0; i < stringArray.length; i++) {
        switch (stringArray[i]) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowelCount++;
                break;
        }
    }
    return vowelCount;
}
console.log(getCount("Lucia is a pretty lady"));
