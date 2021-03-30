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
  let n=+userInput[0];
  //console.log("n :"+n)
  let num=userInput[1].split(" ").map(Number);
   //console.log(num)
  let large=0;
  let small=num.length;//5
  
  
  let indexL=0;
  let indexS=0;
  
  let diff=0
  
  for(let i=0;i<num.length;i++)
  {
      //comparing each element with large and then assign if satisfy 
      if(num[i]>large)
      {
          //console.log(num[i])
          large=num[i];
          indexL=i;
      }
     // console.log(large,indexL)
      
       //samll for samller one 
      if(num[i]<small)
      {
         
          small=num[i];
          indexS=i;
      }
       //console.log(small,indexS)
  }
  
  //diff of indices
  diff=indexL-indexS;
  
  console.log(diff);
  
});