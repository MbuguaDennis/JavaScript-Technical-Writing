// 1️⃣ Function to greet a person
function greetPerson(firstName, lastName) {
    return "Hello, " + firstName + " " + lastName + "!";
}
let greeting = greetPerson("John", "Doe");
console.log(greeting); // Output: Hello, John Doe!

// 2️⃣ Function to add four numbers
function addNumbers(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
let sum = addNumbers(10, 20, 30, 40);
console.log(sum); // Output: 100

// 3️⃣ Function to apply a discount
function applyDiscount(price, discountAmount) {
    return price - discountAmount;
}
let finalPrice = applyDiscount(100, 20);
console.log(finalPrice); // Output: 80
