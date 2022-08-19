function runProgram(input) {
    input = input.split("\n");
    let [n,e] = input[0].split(" ").map(Number);
    let line = 1;
    let arr = input[line].split(" ").map(Number);
    line++;
    sort(n,e,arr);
 }
 

//binary search in sorted and rotated array

 function sort(n,e,arr){
     let count=0
     for(let i=0; i<n; i++){
         if(arr[i]==e){
             console.log(i)
         }
         else{
            count++
         }
     }
     if(count==n){
         console.log(-1)
     }
 }
 
 
 if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }