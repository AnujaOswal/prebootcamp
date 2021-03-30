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

 let num=+userInput[0];//array size
let n=userInput[1].split(" ").map(Number);//array input
let k=+userInput[2]; //window size
let neg=[];

for(let i=0;i<n.length-2;i++)
{
    var count=true;
    for(j=i;j<i+k;j++)
    {
        if(n[j]<0)
        {
            neg.push(n[j]);
            count=false;
            break;
        }
    }
    if(count)
    {
        neg.push(0);
    }
}

console.log(neg.join(" "))

  //end-here
});