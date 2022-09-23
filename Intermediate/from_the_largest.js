// Challenge 10
// Given a number , Return _The Maximum number _ could be formed from the digits of the number given .

// Solution
function maxNumber(n) {
    function maxNumber(n) {
        return Number(
            String(n)
                .split("")
                .sort((a, b) => b - a)
                .join("")
        );
    }
}
console.log(maxNumber(321));
