function add(a, b) {
    return a + b;
}
add()

function subtract(a, b) {
    return a - b;
}
subtract();

function multiply(a, b) {
    return a * b;
}
multiply();

function divide(a, b) {
    return a / b;
}
divide();

function operate(operator, a, b) {

    switch (operator) {
        case "add":
            console.log(add(a, b));
            break;
        case "subtract":
            console.log(subtract(a, b));
            break;
        case "multiply":
            console.log(multiply(a, b));
            break;
        case "divide":
            console.log(divide(a, b));
            break;
        default:
            console.log('invalid operator');
            break;
    }
}
operate("divide", 375, 572);