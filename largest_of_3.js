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

  let a=userInput[0];
    let b=userInput[1];
    let c=userInput[2];
if(a>b && a>c)
{
    console.log(a)
}
else if(b>c && b>a){
    console.log(b);
}
else
{
    console.log(c);
}

  //end-here
});