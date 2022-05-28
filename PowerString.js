// Given a string s, find the power of the string.

// The power of the string is defined as the longest length of the substring possible having only 
// the same single character.


function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    for(var i = 1; i<tc+1; i++){
        var str = input[i].trim().split("");
        stringpow(str)
    }
              function stringpow(str){
                  let min = 1;
                  max = 0;
                  var N = str.length;
                  let first = str[0]
                  for(let i = 1; i<N; i++){
                      if(str[i]==first){
                         min++
                         if(min>max) max = min;
                      }
                      
                      else{
                          if(min>max) max = min;
                          min = 1;
                          first = str[i]
                          
                      }
                      
                      
                  }
                  
                  
                  
                  console.log(max)
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