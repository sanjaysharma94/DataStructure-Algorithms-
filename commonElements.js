function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    var line= 1;
    for(var i = 0; i<tc; i++){
      var N = +input[line];
      line++;
    var arr = input[line].trim().split(" ").map(Number);
    line++;
    var arr2 = input[line].trim().split(" ").map(Number); 
    line++;
      commonElement(N,arr,arr2);
    }
  }
          function commonElement(N,arr,arr2){
    count = 0;
    var left = 0;
    var right = N-1;
    //console.log(N,left,right)
    while(left<N && right>=0){
       if(arr[left] == arr2[right]){
           
           count++;
           left++;
           right--;
           
       }
       else if(arr[left] < arr2[right]){
           left++;
       }
       else{
           right--;
       }
       
    }
    console.log(count);
    
     
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