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
if(userInput[0]==1||userInput[0] == 3 || userInput[0] == 5 || userInput[0] == 7 || userInput[0] == 8 || userInput[0] == 10 || userInput[0] == 12){
    console.log("31");
    
}else if(userInput[0]==29 ||userInput[0]==0 ||userInput[0]>13){
    console.log("Error");
    
}else{
    console.log("30");
    
}
  
  //end-here
});