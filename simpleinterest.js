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
  let ptr=userInput[0].split(" ");
  //console.log(ptr);
  let SI=(+ptr[0]* +ptr[1] *+ptr[2])/100;
  console.log(SI.toFixed(2));
});
  
