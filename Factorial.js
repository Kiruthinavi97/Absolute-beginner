// You are provided with a number, "N". Find its factorial.

// Input Description:
// A positive integer is provided as an input.

// Output Description:
// Print the factorial of the integer.

// Sample Input :
// 2
// Sample Output :
// 2

//Solution

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

const num = parseInt(userInput[0]);

let fact = 1;

let i = num;

while (i > 0) {
  fact = fact * i;
  i--;
}

console.log(fact);

  //end-here
});