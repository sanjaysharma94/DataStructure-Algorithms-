
// Missing Integer -35:27:15
// Description

// You are given an array of N-1 integers and integers are in the range of 1 to N. There are no duplicates in the array. One of the integers is missing in the array. Find the missing integer


// Input
// Input Format

// The first and only line contains N-1 integers

// Constraints

// N<100
// outpot should be single integer



function runProgram(input) {
    
    input = input.split(/[\r\n]+/);
    var arr = input[0].trim().split(" ").map(Number);
  
   let N = arr.length+1;
   
   expectedSum = N * (N+1)/2;
   
   actualSum = 0;
   
   for(var i = 0; i<N-1; i++){
       actualSum += arr[i]; 
   }
   
   missingNumber = expectedSum - actualSum;
   
   console.log(missingNumber);
  
  
  
  
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