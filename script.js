function addNumbers(a, b) {
    let sum = a + b;
    console.log("The sum is: ", sum); // Error: Missing operator for concatenation
    return sum;
}

let result = addNumbers(10, 20); // Error: Implicit type coercion (adding a number and string)
console.log("Result: " + result);

function greet(name) {
    if (name) {
        console.log("Hello " + name);
    else {
        console.log("Hello, guest!");
    }// Error: Missing curly braces for else block
}

greet("Alice"); // Works fine
greet(); // Will result in unexpected output


