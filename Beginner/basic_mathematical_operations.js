// Challenge 16
//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string/char), value1(number), value2(number).
//The function should return result of numbers after applying the chosen operation.

// Solution 1
function basicOp(operation, value1, value2) {
    let result;
    switch (operation) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
    }
    return result;
}
console.log(basicOp("+", 4, 7));

// Solution2
function basicOp2(operation, value1, value2) {
    const result = eval(value1 + operation + value2);
    return result;
}
