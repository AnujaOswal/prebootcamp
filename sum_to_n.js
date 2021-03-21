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
let n=parseInt(userInput[0]);
//console.log(n,typeof(n));
let sum=0;
for(let i=0;i<=n;i++)
{
    sum=sum+i;
}
console.log(sum);

  //end-here
  //end-here
});