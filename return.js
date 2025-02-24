function addTwoNumbers(num1, num2) {
    console.log('Boom');  // This prints before returning
    return num1 + num2;   // The function returns a value
}

let result = addTwoNumbers(4, 7);
console.log(result); // Output: Boom, then 11
