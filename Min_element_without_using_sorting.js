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
let n=+userInput[0];
  let elem=userInput[1].split(" ").map(Number);//prisoners_ids
  let min=elem[0];
 //console.log(min);
 for(let i=0;i<elem.length;i++)
 {
    if(elem[i]<min)
    {
        min=elem[i];
    }
 }
 console.log(min)

  //end-here
});