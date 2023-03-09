/*let currentOperator = null;
let firstOperand = null;
let secondOperand = null;
let result = null;*/
const previousOperandTextElement = document.querySelector('.previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');
const equalsBtn = document.querySelector('#equal');
const deleteBtn = document.querySelector('#delete');
const allClearBtn = document.querySelector('#clear');
const display = document.querySelector('textarea');
const operators = document.querySelectorAll('#operator');
const numbersBtn = document.querySelectorAll('#numbers');
let input = document.querySelectorAll('button').value;
let myArray = [];

let currentOperation = null;
//const operator = document.querySelectorAll('#operator');

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        //this.clear()
    }


    clear() {
        allClearBtn.addEventListener('click', () => {
            this.currentOperandTextElement.innerText = ''
            this.previousOperandTextElement.innerText = ''
            this.operators = undefined
        });
    }

    delete() {

    }

    appendNumber(number) {
        myArray.length = 0
        this.currentOperand = parseInt(number.replaceAll(/,/g, ','));
        myArray.push(this.currentOperand);
        //console.log(myArray)
        myArray.join("");
        //console.log(myArray);
    }

    chooseOperation(operators) {
        //if (this.currentOperation === '') return
        //if (this.previousOperand !== '') {
        // this.compute();
        // }
        this.operators = operators
        this.currentOperand = ""
        //console.log(operators);
    }

    compute() {

        const number1 = parseFloat(this.previousOperandTextElement.innerText)
        const number2 = parseFloat(this.currentOperandTextElement.innerText);

        console.log(number1);
        console.log(number2);
        console.log(this.operators);

        if (this.operators == '+') {
            this.currentOperandTextElement.innerText = number1 + number2
            this.previousOperandTextElement.innerText = ''
            console.log(this.currentOperandTextElement.innerText)
        } else if (this.operators == '-') {
            this.currentOperandTextElement.innerText = number1 - number2
            this.previousOperandTextElement.innerText = ''
        } else if (this.operators == '*') {
            this.currentOperandTextElement.innerText = number1 * number2
            this.previousOperandTextElement.innerText = ''
        } else if (this.operators == '/') {
            this.currentOperandTextElement.innerText = number1 / number2
            this.previousOperandTextElement.innerText = ''
        } else {
            console.log("something went wrong");
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = myArray.join('')
        console.log(myArray);
        //this.previousOperandTextElement.innerText = this.previousOperand
    }

    clearDisplay() {
        if (this.currentOperandTextElement.innerText === '') return;
        this.previousOperandTextElement.innerText = `${this.currentOperandTextElement.innerText}` + ` ${this.operators}`
        this.currentOperandTextElement.innerText = ''
    }
}

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numbersBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operators.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.clearDisplay();
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute();
})

allClearBtn.addEventListener('click', () => {
    window.location.reload();
})

/*function add(a, b) {
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
//const new_text = document.querySelectorAll('#numbers').forEach.innerHTML;


//create array 

const stack = [];

function addText() {
    document.querySelectorAll('#numbers').forEach((button) => {
        button.addEventListener('click', function (e) {
            stack.push(e.value);
        });
    });
}
addText();
console.log(stack);
//create stack, add things to stack (array), hold it in the stack until you need to calculate

/**
 * First Step, User clicks "4"
 *   Add 4 to the stack, stack = [4]
 * Second Step, User clicks "+"
 *   Add "+" to the stack, stack = [4, "+"]
 * Third, User clicks "5"
 *   Add "5" to the stack, stack = [4, "+", 5]
 * Fourth, User clicks "="
 *   somehow process the stack from back to front, stack will = [] when you're done
 */
/**
 * First Step, User clicks "4"
 *   Add 4 to the stack, stack = [4]
 * Second Step, User clicks "+"
 *   Add "+" to the stack, stack = [4, "+"]
 * Third, User clicks "5"
 *   Add "5" to the stack, stack = [4, "+", 5]
 * Fourth, User clicks "-"
 *   somehow process the stack from back to front, stack will = [9, '-'] when you're done
 */


/*function modifyText() {
    document.querySelectorAll('#numbers').forEach((button) => {
        button.addEventListener('click', function (e) {
            currentOperandTextElement.textContent = e.target.innerHTML;
            console.log(currentOperandTextElement.innerHTML);
        });
    });
    document.querySelectorAll('#operator').forEach((button) => {
        button.addEventListener('click', function (e) {
            currentOperandTextElement.textContent = e.target.innerHTML;
            console.log(currentOperandTextElement.innerHTML);
        })
    });
}
modifyText()

/*operators.forEach(op => {
    op.onclick = function (evt) {
        currentOperation = evt.target.value;
    }
});*/



