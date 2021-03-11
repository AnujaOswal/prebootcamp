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

  let n=userInput[0];
function fact(n)
{
    if(n==0||n==1)
    {
        return 1;
    }else{
        return n *fact(n-1);
    }
}
ans=fact(n)
console.log(ans);

  //end-here
});