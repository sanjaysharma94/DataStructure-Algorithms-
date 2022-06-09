function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    
   console.log( fibonnaci(N))
    
    
    function fibonnaci(N){
        if(N==1){
            return 1
        }
        if(N<=0){
            return 0
        }
        
        return fibonnaci(N-1) + fibonnaci(N-2)
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