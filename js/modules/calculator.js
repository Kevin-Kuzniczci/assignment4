// ADD A PRIVATE FUNCTION CALLED CALCULATE
let firstNumber = prompt('Please select your first number.')

let secondNumber = prompt('Please select your second number.')
// function calculate() {
//     switch (chosenOperation) {
//         case "+":
//             alert('Your result is ' + add(firstNumber, secondNumber))
//             break;
//         case "-":
//             alert('Your result is ' + subtraction(firstNumber, secondNumber))
//             break;
//         case "*":
//             alert('Your result is ' + multiplication(firstNumber, secondNumber))
//             break;
//         case "/":
//             alert('Your result is ' + division(firstNumber, secondNumber))
//             break;
//         default:
//             alert('Error: cannot calculate. Please utilize the exact inputs.')
//     }
// }
// ADD FOUR PUBLIC FUNCTIONS BELOW
//////////////////////////////////
// ADD FUNCTION
export function add() {
    return Number(firstNumber) + Number(secondNumber)
}
// SUBTRACT FUNCTION
export function subtraction() {
    return Number(firstNumber) - Number(secondNumber)
}
// MULTIPLY FUNCTION
export function multiplication()  {
    return Number(firstNumber) * Number(secondNumber)
}
// DIVIDE FUNCTION
export function division() {
    return Number(firstNumber) / Number(secondNumber)
}
// EXPORT THE FOUR PUBLIC FUNCTIONS

// export function add();
// export function subtraction();
// export function multiplication();
// export function division();
// export function calculate();