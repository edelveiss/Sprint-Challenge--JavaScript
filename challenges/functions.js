// ==== Callbacks ====  

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
    return cb(a, b);
}


/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greeting = (a, b) => `Hello ${a} ${b}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
//   nestedfunction() can access the variable internal because of closure.A closure is a function that has access to its outer function scope even after the outer function has returned.

// Here the nestedFunction()  can access the variables defined in its own scope, the myFunction() function’s scope, and the global scope. And the myFunction()  can access the variable defined in its own scope and the global scope.
// So a scope chain of the  code would be like this:
// Global {
//   myFunction() {
//     nestedFunction()
//   }
// }
// The nestedFunction() is surrounded by the lexical scope of myFunction() which is, in turn, surrounded by the global scope. That’s why the nestedFunction() can access the variables defined in myFunction() and the global scope.

const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();