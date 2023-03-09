// IMPORT THE MODULE
import { add } from "./modules/calculator.js"
import { subtraction } from "./modules/calculator.js"
import { multiplication } from "./modules/calculator.js"
import { division } from "./modules/calculator.js"

// COLLECT FIRST NUMBER FROM USER
// let firstNumber = prompt('Please select your first number.')

// COLLECT SECOND NUMBER FROM USER
// let secondNumber = prompt('Please select your second number.')

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let chosenOperation = prompt('Please choose between +, =, *, and /.')

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

function calculate() {
    switch (chosenOperation) {
        case "+":
            alert('Your result is ' + add())
            break;
        case "-":
            alert('Your result is ' + subtraction())
            break;
        case "*":
            alert('Your result is ' + multiplication())
            break;
        case "/":
            alert('Your result is ' + division())
            break;
        default:
            alert('Error: cannot calculate. Please utilize the exact inputs. Please refresh the page.')
    }
}

calculate()
