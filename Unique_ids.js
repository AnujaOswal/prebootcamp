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
  let p_ids=userInput[1].split(" ").map(Number).sort();//prisoners_ids
  let unique_ids=[];
 // console.log(typeof(ids));
  for(let i=1;i<p_ids.length;i++)
  {
      var prev=p_ids[i-1];
      var curr=p_ids[i];
      if(prev===curr)
      {
          unique_ids.push(p_ids[i]);
      }
  }
  console.log(unique_ids.join(" "));

  //end-here
});