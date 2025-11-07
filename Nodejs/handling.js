// function_handling.js

// Normal function
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

// Callback function
function processUserInput(callback) {
  const name = "Vaibhav";
  console.log(callback(name));
}

console.log(greet("Node.js"));
console.log("Sum:", add(5, 10));
processUserInput(greet);
