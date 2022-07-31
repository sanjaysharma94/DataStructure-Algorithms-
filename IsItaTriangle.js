// Given the lengths of 3 sticks, find out if it is possible to form a triangle of a positive area. (Non-Degenerate Triangle).
// check wheather sum of all pair of two sides are greater than third side


function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    for(var i = 1; i<tc+1; i++){
        var [a,b,c] = input[i].trim().split(" ").map(Number);
        stringpow(a,b,c)
    }
              function stringpow(a,b,c){
                  
                  
                  if(a>=(b+c)) console.log("No")
                  else if(b>=(a+c)) console.log("No")
                  else if(c>=(a+b)) console.log("No")
                     else{
                         console.log("Yes")
                     } 
                      
                  }
                  
    
  
  }
  
  if (process.env.USERNAME === "hp") {
    runProgram(`3
  1 2 3`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }