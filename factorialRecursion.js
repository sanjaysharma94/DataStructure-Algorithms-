function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    var product = 1;
    
   console.log( fibonnaci(N,product));
    
    
    function fibonnaci(N,product){
        if(N===1){
            return product;
        }
        
        product = product*N;
        
         return fibonnaci(N-1,product) 
         
        
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