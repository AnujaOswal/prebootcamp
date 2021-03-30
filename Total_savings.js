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
  
  let n = +userInput[0];
  
  let inital_savings=1000;
  
  let count=inital_savings+1000;
    
  if(n===1)
  {
      console.log(count);
  }
 
  else
  {
      for(i=2;i<=n;i++)
      {
          count +=i*inital_savings;
      }
      console.log(count)
  }
  
  
});