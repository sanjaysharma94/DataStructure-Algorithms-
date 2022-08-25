function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    for(let i = 1; i<tc+1; i++){
        var arr = input[i].trim().split(" ").map(Number);
        console.log(raceDay(arr));
    }

    function raceDay(arr){
        let ans = 0;
        
        for(let i = 1; i<arr.length; i++){
            if(arr[i]>arr[0]) ans++;
        }
        
        return ans;
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