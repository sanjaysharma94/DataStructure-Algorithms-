function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    for(var i = 1; i<tc+1; i++){
        var [a,b] = input[i].trim().split(" ").map(Number);
        
       console.log(gcd(a,b))
  
    }
    
              function gcd(a,b){
                  if(b===0) return a;
                  
                  return gcd(b,a%b)
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