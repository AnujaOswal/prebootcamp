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
let n=userInput[0].split("");
let a=[];
let b=[];

for(i=0;i<n.length;i++)
{
    let val=+n[i];
    if(val%2===0)
    {
        a.push(val);
        a.sort();
    }
    else
    {
        b.push(val);
        b.sort();
    }
}

console.log(a.join(" "));
console.log(b.join(" "));
 

  //end-here
});