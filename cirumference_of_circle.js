// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

let A=[];
inp.on("line", (data) => {
  A.push(data);
});
inp.on("close", () => {
    let pi=3.142
    let Circumference=2 * pi * +A;
    console.log(Circumference.toFixed(2));
});
  //end-here