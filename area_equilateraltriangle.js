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
let area=(Math.sqrt(3)/4)*(userInput[0] *userInput[0]);
console.log(area.toFixed(2));
  //end-here
});