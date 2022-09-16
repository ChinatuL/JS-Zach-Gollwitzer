// Challenge 19
// Simple, remove the spaces from the string, then return the resultant string.

// Solution
function noSpace(x) {
    return x.split(" ").join("");
}
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
