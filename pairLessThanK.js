function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    var line = 1;
    for(let i = 0; i <tc; i++){
        var N = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number);
        var K = +input[line++];
        
        pairLessThanK(N,arr,K)
    }

    function pairLessThanK(N,arr,K){
      
        var max = -1;
        
        
        for(let i = 0; i<N; i++){
            
            var sum ;
            for(let j = 0; j<N; j++){
                if(i!==j) sum  = arr[i]+arr[j]
                
                if(sum>max && sum<K ){
                    max = sum ;
                }
                
           }
        }
        
        console.log(max);
        
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
    