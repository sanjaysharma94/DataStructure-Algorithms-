function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);
    
    var n = N/4;
    
     var sum = 0
    
    for(let  i = 0; i<n; i++ ){
        sum = sum + 2*arr[i]
         
    }
    for(let  i = n; i<2*n; i++ ){
        sum = sum + arr[i]
         
    }
    for(let  i = 2*n; i<3*n; i++ ){
        sum = sum + 2[i]
         
    }

    for(let  i = 3*n; i<N; i++ ){
        sum = sum + [i]
         
    }

    console.log(sum);


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
    })
}