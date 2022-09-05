//  input
//  2 tc
// 5
// aabcc
// 5
// aazaa


// output
// a2b1c2
// a2z1a2

function runProgram(input) {
    input = input.split(/[\r\n]+/);
    var tc = +input[0];
    var line = 1;
    for(var i =0; i<tc; i++){
      var N= +input[line];
      line++;
      var str = input[line]; 
      line++;
      
      cipherstring(N,str)
    }

    function cipherstring(N,str){
        arr=[];
        var count=0;
        var char = str[0];
        for(let i=0; i<str.length+1; i++){
            if(str[i]===char){
                count++;
            }
            else{
                arr.push(char);
                arr.push(count);
                
                char=str[i];
                count=0;
                i--;
                
            }
        }
        console.log(arr.join(""))
    

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