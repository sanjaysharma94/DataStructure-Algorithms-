function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    var line = 1;
    for(var i = 0; i<tc; i++){
        var N = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        goodPairs(N,arr);
    }
                  function goodPairs(N,arr){
                      count = 0;
                      for(let i = 0; i<N; i++){
                          for(let j = 0; j<N; j++){
                              if(i!=j){
                                  if((2*arr[i])==arr[j])  count++;
                              }
                          }
                      }
                      
                      console.log(count)
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