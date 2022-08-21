function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var N = +input[0];
    var arr = input[1].trim().split(" ").map(Number);

    for(var i = 1; i<N-1; i++){
        if(arr[i-1]<arr[i] && arr[i+1]>arr[i]){
            console.log(arr[i]);
            break;
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