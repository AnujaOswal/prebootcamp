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

  let a=parseInt(userInput[0]);//kilometer
 let b=a*1000;//meters
 console.log(b);
 let c=a*100000;
 console.log(c);
  //end-here
});