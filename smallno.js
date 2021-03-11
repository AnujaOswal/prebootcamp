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
  let no=userInput[0].split(" ");
  if(no[0]<no[1])
  {
      console.log(no[0]);
  }
  else{
      console.log(no[1]);
  }
  
  

  //end-here
});