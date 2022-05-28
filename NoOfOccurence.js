// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.
function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var [N,K]= input[0].trim().split(" ").map(Number);
    var arr = input[1].trim().split(" ").map(Number);
    
    frequency(N,arr,K)
  
              function frequency(N,arr,K){
                  
                  let first = firstOccur(N,arr,K)
                  
                  let last = lastOccur(N,arr,K)
                  
                  console.log(last - first + 1)
              }
              
              
              function firstOccur(N,arr,K){
                  //console.log(N)
                  var left = 0;
                  var right = N-1;
                  var res = -1;
                  
                  
                  while(left<=right){
                      var mid = Math.floor((left+right)/2);
                      if(arr[mid]<K){
                          left = mid+1
                      }
                      else if(arr[mid]>K){
                          
                          right= mid-1
                      }
                      else {
                          
                          res = mid;
                          right = mid-1
                      }
                  }
                  
                  return res;
              }
                  
                  
                  function lastOccur(N,arr,K){
                  //console.log(N)
                  var left = 0;
                  var right = N-1;
                  var res = -1;
                  
                  
                  while(left<=right){
                      var mid = Math.floor((left+right)/2);
                      if(arr[mid]<K){
                          left = mid+1
                      }
                      else if(arr[mid]>K){
                          
                          right= mid-1
                      }
                      else {
                          
                          res = mid;
                          left = mid+1
                      }
                  }
                  
                  return res;
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