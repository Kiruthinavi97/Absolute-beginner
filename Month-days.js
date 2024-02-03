// You will be provided with a number. Print the number of days in the month corresponding to that number.

// Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

// Input Description:
// The input is in the form of a number.

// Output Description:
// Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

// Sample Input :
// 8
// Sample Output :
// 31

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

  const num = Number(userInput[0]);
  
  const arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if (num >= 1 && num<=12) {
      console.log(arr[num -1]);
  } else { 
      console.log('Error');
      
  }

  //end-here
});