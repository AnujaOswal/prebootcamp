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

  let num=userInput[0].split(" ").map(Number);
 let n=num[0];
 let k=num[1];
 let values=userInput[1].split(" ").map(Number);
 let count;
 for(let i=0;i<values.length;i++)
  {
      if(values[i]===k)
      {
          count=1;
          break;
      }
      else
      {
          count=0;
      }
     // console.log(count);
  }    
    
      if(count===1)
      {
          console.log("yes");
      }
      else
      {
          console.log("no");
      }

  //end-here
});