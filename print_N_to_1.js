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
     if(n<0)
     {
         console.log("error")
     }
     else
     {
         for(let i=n;i<=n;i--)
         {
             if(i>0)
             {
             console.log(i);
             }
         }
     }


  //end-here
});