
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
    // let temp=0;
    // // temp=userinput[0];
    // userinput[0]=userinput[1];
    // userinput[1]=temp;
    // console.log(temp)
    
    let val=userInput[0].split(" ");
    console.log("Before swapping: A =>"+val[0]);
    console.log("B :"+val[1]);
   
    val[0]=val[0]+val[1];
    val[1]=val[0]-val[1];
    val[0]=val[0]-val[1];
    
    console.log("After swapping : A =>"+val[0]);
    console.log("B "+val[1])
    
} );  