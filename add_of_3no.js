// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput=[]
inp.on("line", (data) => {
    userInput.push(data);
});

inp.on("close", () =>{
    let val=userInput[0].split(" ");
   // console.log(val);
    console.log(parseInt(val[0])+parseInt(val[1])+parseInt(val[2]));
} );   